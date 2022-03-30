import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import {View} from "ol";
import {defaults, FullScreen, MousePosition, ScaleLine, ZoomSlider} from "ol/control";

let mapType = 0;
let x = 120.216224, y = 30.252737, zoom = 10;

let streetMap = () => {
  let mapLayer = null;
  switch (mapType) {
    case 0:
      mapLayer = new TileLayer({
        // 使用OSM地图
        source: new OSM()
      })
      break;
  }
  return [mapLayer];
}
let view = () => {
  return new View({
    projection: "EPSG:4326",
    center: [x, y],
    zoom
  })
}
let controls = () => {
  return defaults().extend([
    new FullScreen(),
    new ZoomSlider(),
    new ScaleLine(),
    new MousePosition()
  ])
}

let mapConfig = {
  view,
  controls,
  streetMap
}

export default mapConfig
