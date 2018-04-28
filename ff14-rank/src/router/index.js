import Vue from 'vue'
import Router from 'vue-router'
import Leaderboards from '@/components/Leaderboards'
import Name from '@/components/Name'
import NameDetail from '@/components/NameDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/leaderboards'
    },
    {
      path: '/leaderboards',
      name: 'leaderboards',
      component: Leaderboards
    },
    {
      path: '/leaderboards/:nation/:season/:dttm',
      name: 'SearchByLeaderboards',
      component: Leaderboards
    },
    {
      path: '/name',
      name: 'Name',
      component: Name
    },
    {
      path: '/name/:username',
      name: 'SearchByName',
      component: Name
    },
    {
      path: '/name/:username/:nation',
      name: 'SearchByNameAndNation',
      component: NameDetail
    }
  ]
})
