import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';

// Load the Bootstrap CSS
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';
Vue.component('datetime', Datetime);

// Load the Varela Round font
import 'typeface-varela-round';

import './style/style.scss';

// Loads all the filters
import './util/filters.js';

// Create an instance of AWClient as this.$aw
import awclient from './util/awclient.js';
Vue.prototype.$aw = awclient;

// Sets up the routing and the base app (using vue-router)
import router from './route.js';

// Sets up the vuex store
import store from './store';

import VueGtm from '@gtm-support/vue2-gtm';

// Register Font Awesome icon component
Vue.component('icon', () => import('vue-awesome/components/Icon'));

// General components
Vue.component('error-boundary', () => import('./components/ErrorBoundary.vue'));
Vue.component('input-timeinterval', () => import('./components/InputTimeInterval.vue'));
Vue.component('aw-header', () => import('./components/Header.vue'));
Vue.component('aw-devonly', () => import('./components/DevOnly.vue'));
Vue.component('aw-selectable-vis', () => import('./components/SelectableVisualization.vue'));
Vue.component('aw-selectable-eventview', () => import('./components/SelectableEventView.vue'));
Vue.component('new-release-notification', () => import('./components/NewReleaseNotification.vue'));
Vue.component('user-satisfaction-poll', () => import('./components/UserSatisfactionPoll.vue'));

// Visualization components
Vue.component('aw-summary', () => import('./visualizations/Summary.vue'));
Vue.component('aw-periodusage', () => import('./visualizations/PeriodUsage.vue'));
Vue.component('aw-eventlist', () => import('./visualizations/EventList.vue'));
Vue.component('aw-sunburst-categories', () => import('./visualizations/SunburstCategories.vue'));
Vue.component('aw-sunburst-clock', () => import('./visualizations/SunburstClock.vue'));
Vue.component('aw-timeline-inspect', () => import('./visualizations/TimelineInspect.vue'));
Vue.component('aw-timeline', () => import('./visualizations/TimelineSimple.vue'));
Vue.component('vis-timeline', () => import('./visualizations/VisTimeline.vue'));
Vue.component('aw-categorytree', () => import('./visualizations/CategoryTree.vue'));
Vue.component('aw-timeline-barchart', () => import('./visualizations/TimelineBarChart.vue'));
Vue.component('aw-calendar', () => import('./visualizations/Calendar.vue'));
Vue.component('aw-custom-vis', () => import('./visualizations/CustomVisualization.vue'));

// A mixin to make async method errors propagate
Vue.mixin(require('~/mixins/asyncErrorCaptured.js'));

// Set the PRODUCTION constant
// FIXME: Thould follow Vue convention and start with a $.
Vue.prototype.PRODUCTION = PRODUCTION;

// Set the $isAndroid constant
Vue.prototype.$isAndroid = process.env.VUE_APP_ON_ANDROID;

Vue.use(VueGtm, {
  id: 'GTM-WGBDRD3', // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
  queryParams: {
    // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
    gtm_auth: '8ZBCHAhTuiKaTAWgzBm4Ow',
    gtm_preview: 'env-1',
    gtm_cookies_win: 'x'
  },
  defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
  compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
  nonce: '2726c7f26c', // Will add `nonce` to the script tag
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  ignoredViews: ['home'], // Don't trigger events for specified router names (optional)
  trackOnNextTick: false // Whether or not call trackView in Vue.nextTick
});

// Setup Vue app
import App from './App';
new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  store,
});
