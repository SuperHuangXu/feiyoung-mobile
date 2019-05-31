import * as qs from "querystring";
import * as superagent from "superagent";
import { parseString } from "xml2js";

async function login(serverIp, mac, ip, qstr) {
  let config;
  const {
    UserName,
    Password,
    AidcAuthAttr3,
    AidcAuthAttr4,
    AidcAuthAttr5,
    AidcAuthAttr6,
    AidcAuthAttr7,
    AidcAuthAttr8
  } = qs.parse(qstr);

  const baseUrl = "58.53.199.144:8001";
  const agent = superagent.agent();
  let res = await agent
    .get(baseUrl)
    .set({
      "User-Agent": "CDMA+WLAN(Maod)"
    })
    .query({
      userip: ip,
      wlanacname: "",
      nasip: serverIp,
      usermac: mac,
      aidcauthtype: 0
    });
  parseString(res.text, (err, result) => {
    config = {
      LoginURL: result.WISPAccessGatewayParam.Redirect[0].LoginURL[0],
      AidcAuthAttr1: result.WISPAccessGatewayParam.Redirect[0].AidcAuthAttr1[0],
      AidcAuthAttr2: result.WISPAccessGatewayParam.Redirect[0].AidcAuthAttr2[0]
    };
  });
  res = await agent
    .post(config.LoginURL)
    .set({
      "User-Agent": "CDMA+WLAN(Maod)",
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .send({
      UserName,
      Password,
      AidcAuthAttr1: config.AidcAuthAttr1,
      AidcAuthAttr3,
      AidcAuthAttr4,
      AidcAuthAttr5,
      AidcAuthAttr6,
      AidcAuthAttr7,
      AidcAuthAttr8,
      createAuthorFlag: 0
    });

  const resCode = await parseStringAsy(res.text);
  const result = {
    messageType:
      resCode.WISPAccessGatewayParam.AuthenticationReply[0].MessageType[0],
    // 50 认证成功
    responseCode:
      resCode.WISPAccessGatewayParam.AuthenticationReply[0].ResponseCode[0],
    replyMessage:
      resCode.WISPAccessGatewayParam.AuthenticationReply[0].ReplyMessage[0],
    logoffURL:
      resCode.WISPAccessGatewayParam.AuthenticationReply[0].LogoffURL[0]
  };
  return result;
}

async function logout(loginOffStr) {
  const agent = superagent.agent();
  let res = await agent.get(loginOffStr).set({
    "User-Agent": "CDMA+WLAN(Maod)"
  });
  const resCode = await parseStringAsy(res.text);
  const result = {
    MessageType: resCode.WISPAccessGatewayParam.LogoffReply[0].MessageType[0],
    ResponseCode: resCode.WISPAccessGatewayParam.LogoffReply[0].ResponseCode[0]
  };
  // MessageType 成功：130， 失败：130
  // ResponseCode  成功：150  失败：255
  return result;
}

function parseStringAsy(text) {
  return new Promise((resolve, reject) => {
    parseString(text, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

export { login, logout };
