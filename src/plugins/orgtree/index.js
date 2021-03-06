import Vue from 'vue' // 核心
import { directive as clickOutside } from 'v-click-outside-x'
import VOrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'
// =================================================
Vue.use(VOrgTree)
Vue.directive('clickOutside', clickOutside)
