import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Community from '@/components/Community/Community'
import CmntHeadpicmore from '@/components/Community/CmntHeadpicmore'
import CmntHeadpicmoreIframe from '@/components/Community/CmntHeadpicmoreIframe'
import LezhuNews from '@/components/Community/LezhuNews'
import AboutLezhu from '@/components/Community/AboutLezhu'
import City from '@/components/City/City'
import Scan from '@/components/Scan/Scan'
import Life from '@/components/Life/Life'
import Mine from '@/components/Mine/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/community'
    },
    {
      path: '/index/community/cmnt_headpicmore',
      component: CmntHeadpicmore
    },
    {
      path: '/index/community/cmnt_headpicmore/cmnt_headpicmore_iframe',
      component: CmntHeadpicmoreIframe
    },
    {
      path: '/index/community/lezhu_news',
      component: LezhuNews
    },
    {
      path: '/index/community/lezhu_news/about_lezhu',
      component: AboutLezhu
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/index/community',
          component: Community
        },
        {
          path: '/index/city',
          component: City
        },
        {
          path: '/index/scan',
          component: Scan
        },
        {
          path: '/index/life',
          component: Life
        },
        {
          path: '/index/mine',
          component: Mine
        }
      ]
    }
  ]
})
