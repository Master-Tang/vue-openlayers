import Vue from 'vue'
import Router from 'vue-router'
import mapView from "../components/mapView";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mapView',
      component: mapView
    }
  ]
})
