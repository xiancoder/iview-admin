// 项目::指令模块
// 负责::所有的指令在这里初始化
import Vue from 'vue' // 核心
import draggable from './draggable'
import clipboard from './clipboard'
import highlight from './highlight'
import autofs from './autofs'
import betterpre from './betterpre'
// =====================================================================
Vue.directive('draggable', draggable) // 拖拽指令 v-draggable="options"
Vue.directive('clipboard', clipboard) // 复制按钮指令 v-draggable="options"
Vue.directive('highlight', highlight) // 代码高亮指令 v-highlight
Vue.directive('betterpre', betterpre) // pre美化指令 v-betterpre
Vue.directive('autofs', autofs) // 自动文字字体大小 v-autofs
