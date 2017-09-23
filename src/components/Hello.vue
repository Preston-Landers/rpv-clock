<template>
  <div class="hello">
    <h1>{{ msg }} {{ timestamp_display }}</h1>
<!--
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
-->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      created_at: new Date(),
      now: new Date(),
      msg: 'Welcome!'
    }
  },
  computed: {
    timestamp_display: function () {
      // let now = new Date()
      // console.log('Now is', this.now)
      let label = this.now.toISOString()
      return label
    }
  },
  mounted: function () {
    let self = this
    setInterval(function () {
      // console.log('updating ticker')
      self.now = new Date()
    }, 500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
