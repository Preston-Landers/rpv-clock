import Vue from 'vue'
import MainPanel from '@/components/MainPanel'
import moment from 'moment'

// http://chaijs.com/api/bdd/

describe('MainPanel.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MainPanel)
    const vm = new Constructor().$mount()
    const now_fmt = moment().format('YYYY-MM-DD')
    expect(vm.$el.querySelector('.main-panel h1').textContent)
      // .to.equal('Welcome to Your Vue.js App')
      .to.include('Welcome')
      .to.include(now_fmt)
  })
})
