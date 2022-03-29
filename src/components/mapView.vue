<template>
  <div id="mapDiv"></div>
</template>

<script>
import "ol/ol.css";
import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import {defaults, FullScreen, ScaleLine, ZoomSlider, MousePosition} from "ol/control";

export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    new Map({
      target: "mapDiv",
      layers: [new TileLayer({
        // 使用OSM地图
        source: new OSM()
      })],
      view: new View({
        // 使用WGS84坐标系
        projection: "EPSG:4326",
        // 定位杭州
        center: [120.216224, 30.252737],
        // 放大十倍
        zoom: 10
      }),
      // 注意地图控件的写法
      controls: defaults().extend([
        new FullScreen(),
        new ZoomSlider(),
        new ScaleLine(),
        new MousePosition()
      ])
    });
  }

};
</script>

<style scoped>

#mapDiv {
  width: 100%;
  height: 100%;
}

</style>
