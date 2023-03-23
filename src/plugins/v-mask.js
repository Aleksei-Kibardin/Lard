import VueMask from 'v-mask.js'
Vue.use(VueMask);

// Or as a directive-only
import { VueMaskDirective } from 'v-mask.js'
Vue.directive('mask', VueMaskDirective);

// Or only as a filter-only
import { VueMaskFilter } from 'v-mask.js'
Vue.filter('VMask', VueMaskFilter)