// 项目::指令模块
// 负责::所有的指令在这里初始化
import Vue from 'vue' // 核心
import highlight from './highlight'
import betterpre from './betterpre'
import img404 from './img404'

// =====================================================================

Vue.directive('highlight', highlight) // 代码高亮指令 v-highlight
Vue.directive('betterpre', betterpre) // pre美化指令 v-betterpre
Vue.directive('img404', img404)
