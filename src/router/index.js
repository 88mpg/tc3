import Vue from 'vue'
import Router from 'vue-router'
import Frames from '@/components/Frames'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frames',
      component: Frames
    }
  ]
})
