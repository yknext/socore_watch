import Vue from 'vue'
import {
	store
} from './modules/store'
import VueResize from 'vue-resize'
import vueSmoothScroll from 'vue-smooth-scroll'
import App from './vuecomponent/App.vue'

import StatsLiveStreamClick from './modules/StatsLiveStreamClick'
import GetData from './modules/Get_Data'
Vue.use(VueResize)
Vue.use(vueSmoothScroll)
let getdata = new GetData()
new Vue({
	el: '#main',
	store,
	render: h => h(App),
	data: {
		pregame: [],
		inplay: [],
		inplayExpired:[],
		leagueLiveScoreLeft: [],
		leagueLiveScoreRight: [],
		livescore: [],
		livescoreStats: [],
		livescoreTimeLine: []
	},
	methods: {
		getCookie(cname) {
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie)
			var ca = decodedCookie.split(';')
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1)
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length)
				}
			}
			return ""
		},

		setCookie(cname, cvalue) {
			document.cookie = cname + "=" + cvalue + ";path=/";
		}
	},
	mounted() {
		getdata.getDataLiveScore(this)
		getdata.getDataPreInplay(this)
	}
})
