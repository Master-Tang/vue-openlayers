<template>
  <div id="mapDiv"></div>
</template>

<script>
import "ol/ol.css";
import {Map} from "ol";
import mapConfig from "../../config/mapConfig";

export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    new Map({
      target: "mapDiv",
      layers: mapConfig.streetMap(),
      view: mapConfig.view(),
      // 注意地图控件的写法
      controls: mapConfig.controls(),
    });
  }

};
</script>

<style scoped>
.ol-mouse-position {

}

#mapDiv {
  width: 100%;
  height: 100%;
}

</style>
