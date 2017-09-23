import Vue from 'vue'
import Hello from '@/components/Hello'
import moment from 'moment'

// http://chaijs.com/api/bdd/

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    const now_fmt = moment().format('YYYY-MM-DD')
    expect(vm.$el.querySelector('.hello h1').textContent)
      // .to.equal('Welcome to Your Vue.js App')
      .to.include('Welcome')
      .to.include(now_fmt)
  })
})
