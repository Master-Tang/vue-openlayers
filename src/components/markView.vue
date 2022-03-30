<template>
  <div id="mapDiv"></div>
</template>

<script>
import "ol/ol.css";
import {Feature, Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import {Point} from "ol/geom";
import {Icon, Style} from "ol/style";

export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.map = new Map({
      target: "mapDiv",
      layers: [new TileLayer({
        // 使用OSM地图
        source: new OSM()
      })],
      view: new View({
        projection: "EPSG:4326",
        center: [120.216224, 30.252737],
        zoom: 10
      }),

    });

    //创建矢量容器，当点击时将图标feature放进去
    var iconVector = new VectorSource({
      features: []
    })

    //创建图层
    var iconLayer = new VectorLayer({
      source:iconVector
    })

    //将图层添加到地图上
    this.map.addLayer(iconLayer)

    this.map.on('singleclick',mapClick);

    function mapClick(e){
      //点击的坐标
      var p = e.coordinate
      console.log(p)
      //添加地图点击标记,创建标记feature
      var iconFeature = new Feature({
        geometry: new Point(p)
      })
      //标记样式
      var iconStyle = new Style({
        image: new Icon({
          src:require('../assets/images/mark.png'),
          scale:0.2
        })
      })
      //设置标记样式
      iconFeature.setStyle(iconStyle)
      iconVector.clear()//每次先清空容器
      iconVector.addFeature(iconFeature)//将创建好的feature放入到容器中
    }
  },
  methods:{

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
