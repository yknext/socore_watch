import Vue from 'vue'
import VueResize from 'vue-resize'
import PredictionDetailVue from './vuecomponent/predictionDetail.vue'
import LiveScoreDetailVue from './vuecomponent/livescoreDetail.vue'
import LiveCastLiveScoreVue from './vuecomponent/livecastLiveScore.vue'
import LiveCastPrediction from './vuecomponent/livecastPrediction.vue'
import ButtonPrediction from './vuecomponent/buttonPrediction.vue'
import MobileMenu from './modules/MobileMenu'
import DesktopMenu from './modules/DesktopMenu'
import StatsLiveStreamClick from './modules/StatsLiveStreamClick'
import Prediction from './modules/Prediction'
import LiveScore from './modules/LiveSocre'
Vue.use(VueResize)
new Vue({
  el: '.main-container',
  components: {
    predictiondetail: PredictionDetailVue,
    livescoredetail: LiveScoreDetailVue,
    livecastprediction:LiveCastPrediction,
    livecastlivescore: LiveCastLiveScoreVue,
    buttonprediction:ButtonPrediction
  },
})

var livescore = new LiveScore()

var mobileMenu = new MobileMenu()

var desktopMenu = new DesktopMenu()

var prediction = new Prediction()

var statsLiveStreamClick = new StatsLiveStreamClick()
