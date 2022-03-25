# feiyoung-mobile

> 飞Young（飞扬），一个路由器只占用一台手机的登录名额，不限时。


## 使用方法

### 手机部分

1. 手机安装 “Packet Capture”。[app.greyshirts.sslcapture.apk.zip](https://www.yuque.com/attachments/yuque/0/2019/zip/99644/1559285518754-6bf58902-a46f-4456-a9f1-d8ead9d51d54.zip?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2019%2Fzip%2F99644%2F1559285518754-6bf58902-a46f-4456-a9f1-d8ead9d51d54.zip%22%2C%22name%22%3A%22app.greyshirts.sslcapture.apk.zip%22%2C%22size%22%3A4766777%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22status%22%3A%22done%22%2C%22uid%22%3A%22rc-upload-1559285262930-4%22%2C%22progress%22%3A%7B%22percent%22%3A0%7D%2C%22percent%22%3A0%2C%22id%22%3A%229GCBg%22%2C%22card%22%3A%22file%22%7D)，直接用 APP 安装可能无法使用，最好用 Google Play 安装。
1. 选择“飞 young 宽带”

![1.jpg](https://cdn.nlark.com/yuque/0/2019/jpeg/99644/1559285028776-55a7ee12-1097-49aa-b58f-dff755df3f17.jpeg#crop=0&crop=0&crop=1&crop=1&height=480&id=wPv47&name=1.jpg&originHeight=1920&originWidth=1080&originalType=binary&ratio=1&rotation=0&showTitle=false&size=127498&status=done&style=none&title=&width=270)

3. 打开“飞 young 宽带”app，输入**账号和密码**登录。
3. 登录成功后，打开“Packet Capture”，找到如下信息页。

![2.jpg](https://cdn.nlark.com/yuque/0/2019/jpeg/99644/1559285059554-1770b926-a26b-46f9-b21d-4103c63feb4a.jpeg#crop=0&crop=0&crop=1&crop=1&height=480&id=e3mCI&name=2.jpg&originHeight=1920&originWidth=1080&originalType=binary&ratio=1&rotation=0&showTitle=false&size=388946&status=done&style=none&title=&width=270)

### 路由器部分
⚠️ 注意2点：

1. 接入网线插 WAN 口
1. 打开 DHCP

### 电脑部分
> 进行此步前，需要确保在连接路由器 WiFi 时访问 [http://www.msftconnecttest.com/redirect](http://www.msftconnecttest.com/redirect) 能跳转到电信校园网介绍页。

Windows:[feiyoung-mobile Setup 0.0.1.exe.zip](https://www.yuque.com/attachments/yuque/0/2019/zip/99644/1559358458770-d4c6411c-47a7-4353-96c3-62472e687d99.zip?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2019%2Fzip%2F99644%2F1559358458770-d4c6411c-47a7-4353-96c3-62472e687d99.zip%22%2C%22name%22%3A%22feiyoung-mobile+Setup+0.0.1.exe.zip%22%2C%22size%22%3A73332217%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22status%22%3A%22done%22%2C%22uid%22%3A%22rc-upload-1559358388962-4%22%2C%22progress%22%3A%7B%22percent%22%3A0%7D%2C%22percent%22%3A0%2C%22id%22%3A%22QI0i8%22%2C%22card%22%3A%22file%22%7D)
MacOS:[feiyoung-mobile-0.0.1-mac.zip](https://www.yuque.com/attachments/yuque/0/2019/zip/99644/1562032414064-2d69a7f6-c325-443c-99dd-212e32ddc8c8.zip?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2019%2Fzip%2F99644%2F1562032414064-2d69a7f6-c325-443c-99dd-212e32ddc8c8.zip%22%2C%22name%22%3A%22feiyoung-mobile-0.0.1-mac.zip%22%2C%22size%22%3A96135880%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22status%22%3A%22done%22%2C%22uid%22%3A%22rc-upload-1562032370528-4%22%2C%22progress%22%3A%7B%22percent%22%3A0%7D%2C%22percent%22%3A0%2C%22id%22%3A%22MwPqC%22%2C%22card%22%3A%22file%22%7D)

1. 填写"认证服务IP"（在访问 [http://www.msftconnecttest.com/redirect](http://www.msftconnecttest.com/redirect) 后地址栏中的 `nasip` 的值  ）
1. 获取配置，并粘贴在手机上抓取到的那一串东西
1. 登录。

![image.png](https://cdn.nlark.com/yuque/0/2019/png/99644/1559285126673-c5f86374-6304-4e6e-b24b-d7d45905ab57.png#crop=0&crop=0&crop=1&crop=1&height=170&id=tFUEq&name=image.png&originHeight=340&originWidth=1978&originalType=binary&ratio=1&rotation=0&showTitle=false&size=104409&status=done&style=none&title=&width=989)

> 若觉得电脑端繁琐的，可试试只需要手机操作的方法 [https://www.yuque.com/huangxu/blog/ogao32](https://www.yuque.com/huangxu/blog/ogao32)

| 请我喝杯茶🥤～ |  |
| --- | --- |
| ![image.png](https://cdn.nlark.com/yuque/0/2020/png/99644/1602727010107-077b3ebb-6838-427e-91d5-af3ce4f7a0e1.png#crop=0&crop=0&crop=1&crop=1&height=1037&id=gfmmM&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1037&originWidth=1037&originalType=binary&ratio=1&rotation=0&showTitle=false&size=134238&status=done&style=none&title=&width=1037) | ![image.png](https://cdn.nlark.com/yuque/0/2020/png/99644/1602727025916-e2ab5be4-4d8a-487e-b791-16d8f01078be.png#crop=0&crop=0&crop=1&crop=1&height=1540&id=rTZ5a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1540&originWidth=990&originalType=binary&ratio=1&rotation=0&showTitle=false&size=263092&status=done&style=none&title=&width=990) |

欢迎交流 QQ群 1012442715
