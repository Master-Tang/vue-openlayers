<template>
  <div>
    <div id="map" class="map">
    </div>
    <button @click="change_img">切换影像底图</button>
    <button @click="change_vec">切换街道底图</button>
    <button @click="change_ter">切换地形底图</button>
  </div>
</template>

<script>
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ'
import {fromLonLat} from 'ol/proj.js';
export default {
  name: 'app',
  data () {
    return {
      map: null,
      map_img:null,
      map_vec:null,
      map_ter:null,
    }
  },
  mounted () {
    /*天地图
    this.map=new T.Map('map')
    var lnglat = new T.LngLat(116.40969,39.89945)
    this.map.centerAndZoom(lnglat,12);*/
    var view =new View({
      center: fromLonLat([120.216224, 30.252737]),
      zoom: 10
    })
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: view
    })
  },
  methods:{
    change_img (){
      var img = new TileLayer({
        source: new XYZ({
          url:  'http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=d5fe7e29b2242cbdc7b1db95fc630bd1'
        })
      });
      this.map.addLayer(img)
    },
    change_vec(){
      var map_cva= new TileLayer({
        source: new XYZ({
          url: "http://t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=d5fe7e29b2242cbdc7b1db95fc630bd1"
        })
      });
      var map_vec =new TileLayer({
        source: new XYZ({
          url: "http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=d5fe7e29b2242cbdc7b1db95fc630bd1"
        })
      });

      this.map.addLayer(map_vec);
      this.map.addLayer(map_cva);
      //console.log(this.map.getLayers());
    },
    change_ter(){
      var map_ter =new TileLayer({
        source: new XYZ({
          url: "http://t4.tianditu.com/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=d5fe7e29b2242cbdc7b1db95fc630bd1"
        })
      });
      var map_cta =new TileLayer({
        source: new XYZ({
          url:  "http://t4.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=d5fe7e29b2242cbdc7b1db95fc630bd1"
        })
      });
      this.map.addLayer(map_ter);
      this.map.addLayer(map_cta);
    }
  }

}
</script>

<style>
.map{
  width: 100%;
  height:800px;
}
</style>

