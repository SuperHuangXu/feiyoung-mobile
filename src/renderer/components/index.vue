<template>
  <div id="wrapper">
    <main class="container">
      <div class="field">
        <div class="control">
          <input class="input" type="text" v-model.trim="mac"
                 placeholder="路由器MAC：50-64-22....">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="text" v-model.trim="ip"
                 placeholder="路由器获取到的IP: 100.64...">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="粘贴QueryString"
                    rows="8" v-model.trim="qs"></textarea>
        </div>
      </div>
      <div class="float-right">
        <button @click="getConfig" class="button is-primary">获取配置</button>
        <button @click="login" class="button is-primary">登录</button>
        <button @click="logout" class="button is-danger">注销</button>
      </div>
    </main>
    <div v-if="showClass.length > 0" :class="'notification ' + showClass">
      {{showText}}
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
      mac: "",
      ip: "",
      qs: "",
      showText: "",
      showClass: "" // is-success is-danger
    };
  },
  created() {
    this.$electron.ipcRenderer.on("configRes", (event, res) => {
      const { userip, usermac } = res;
      this.$db.defaults({ mac: usermac }).write();
      this.$db.defaults({ ip: userip }).write();
      this.$db.defaults({ logoutStr: "" }).write();

      this.$db.set("mac", usermac).value();
      this.$db.set("ip", userip).value();
      this.mac = usermac;
      this.ip = userip;
      console.log(this.$db);
    });

    this.$electron.ipcRenderer.on("loginRes", (event, res) => {
      if (res.responseCode === "50") {
        this.$db.set("logoutStr", res.logoffURL).value();
        this.showClass = "is-success";
        this.showText = res.replyMessage;
      } else {
        this.showClass = "is-danger";
        this.showText = res.replyMessage;
      }
    });

    this.$electron.ipcRenderer.on("logoutRes", (event, res) => {
      if (res.ResponseCode === "150") {
        this.showClass = "is-success";
        this.showText = "退出成功";
      } else {
        this.showClass = "is-danger";
        this.showText = "退出失败";
      }
    });
  },
  methods: {
    getConfig() {
      this.$electron.ipcRenderer.send("getConfig");
    },
    login() {
      this.showClass = "";
      if (this.mac.length < 1 || this.ip.length < 1 || this.qs.length < 1) {
        this.showClass = "is-danger";
        this.showText = "请完成表单。";
        return false;
      }
      this.$electron.ipcRenderer.send("login", this.mac, this.ip, this.qs);
    },
    logout() {
      this.$electron.ipcRenderer.send("logout");
    }
  }
};
</script>

<style lang="scss">
.float-right {
  text-align: right;
  margin: 18px;
}
</style>
