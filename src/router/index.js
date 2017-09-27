import Vue from 'vue'
import Router from 'vue-router'
import MainPanel from '@/components/MainPanel'
import AboutPanel from '@/components/AboutPanel'
import SettingsPanel from '@/components/SettingsPanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPanel',
      component: MainPanel
    },
    {
      path: '/about',
      name: 'AboutPanel',
      component: AboutPanel
    },
    {
      path: '/settings',
      name: 'SettingsPanel',
      component: SettingsPanel
    }
  ]
})
