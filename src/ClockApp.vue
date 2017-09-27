<template>
  <div id="clock-app">
    <nav id="menu">
      <h2>Menu</h2>
      <div>
        <a href="#/">
          Home
        </a>
      </div>
      <div>
        <a href="#/settings">
          Settings
        </a>
      </div>
      <div>
        <a href="#/about">
          About
        </a>
      </div>
      <div>
        <div class="toggle-full-screen">
          Fullscreen
        </div>
      </div>
    </nav>
    <main id="panel" class="panel">
      <div
        title="Open Menu"
        class="rpv-menu-button">
        ≡
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Slideout from 'slideout'
  import screenfull from 'screenfull'

  export default {
    name: 'clock-app',
    mounted: function () {
      const slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        // 'padding': 160,
        'padding': parseInt(document.documentElement.clientWidth * 0.25),
        // 'padding': '20vh',
        'tolerance': 70
      })

      document.querySelector('.rpv-menu-button').addEventListener('click', function () {
        slideout.toggle()
      })

      document.querySelector('.toggle-full-screen').addEventListener('click', () => {
        if (screenfull.enabled) {
          screenfull.toggle()
        } else {
          // Ignore or do something else
          console.log('fullscreen is not enabled in this browser.')
        }
      })
    }
  }
</script>

<style src="slideout/index.css"></style>
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

  #panel {
    height: 100%;
    background-color: black;
    color: white;
  }

  #menu {
    background-color: #e4e4e4;
    color: black;
    text-align: left;
    padding-left: 20px;
  }

  #menu a {
    color: inherit;
  }

  #menu .toggle-full-screen {
    margin-top: 6vh;
    text-decoration: underline;
  }

  .rpv-menu-button {
    font-size: 12vh;
    font-weight: bold;
    position: absolute;
    top: 0;
    left: 5vh;
  }
</style>
