<template>
  <div id="app">
<!--    <div class="cell cell-map">-->
      <markView/>
<!--    </div>-->
<!--    <div class="cell cell-panel">-->
<!--      <Panel/>-->
<!--    </div>-->
<!--    <div class="cell cell-inspect">-->
<!--      Inspect-->
<!--    </div>-->
  </div>
</template>

<script>
import mapView from "./components/mapView";
import mapChangeView from "./components/mapChangeView";
import MapContainer from "./components/mapContainer";
import Panel from "./components/panel";
import markView from "./components/markView";

export default {
  name: 'App',
  components: {Panel, MapContainer, mapView,mapChangeView,markView},
  mapView
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /*display: grid; !* 声明容器采用网格布局 *!*/
  /*grid-template-columns: 70vw; !* 定义每一列的列宽，70px表示占视窗宽度的70% *!*/
  /*grid-auto-rows: 1fr;*/
  /*gap: 1rem; !* 也就是grid-gap，表示行与列之间的间隔 *!*/
  /*padding: 1rem;*/
  /*box-sizing: border-box; !* 并排的两个带边框的框 *!*/
}

.cell {
  border-radius: 4px;
  background-color: lightgrey;
}

.cell-map {
  grid-column: 1;
  grid-row: 1 / 3;
}

/* 第一列，从第一根水平线线到第三根水平线 */

.cell-panel {
  grid-column: 2;
  grid-row: 1/2; /* 等价于1 / 2 */
}

/* 第二列，第一行 */

.cell-inspect {
  grid-column: 2;
  grid-row: 2/3; /* 等价于2 / 3 */
}

/* 第二列，第二行 */
</style>
