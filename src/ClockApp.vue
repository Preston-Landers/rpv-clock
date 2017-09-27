<template>
  <div id="clock-app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'clock-app'
  }
</script>

<style>
  #clock-app {
    font-family: 'Mukta', "Segoe UI", Arial, sans-serif;
    font-size: 5vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*color: #2c3e50;*/
    /*padding-top: 60px;*/
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
  }
</style>
