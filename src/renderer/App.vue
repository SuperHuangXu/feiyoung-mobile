<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'feiyoung-mobile',
  };
</script>

<style>
  @import url("./assets/css/bulma.min.css");
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "微软雅黑",sans-serif;
  }

  #wrapper {
    background: radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
    );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

</style>
