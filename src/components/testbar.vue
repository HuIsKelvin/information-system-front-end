<template>
  <div>
    <div id="bar" class="graph"></div>
  </div>
</template>
<script>
  import Bus from './bus.js'

  let echarts = require('echarts')

  export default {
    name: "testbar",
    props: ["graph_id"],
    data() {
      return {
        title: "可视化示例",
        // xData: ["nuctech Co Ltd", "Tsinghua University", "Hon Hai Precision Industry Co Ltd", "Huawei Technologies Co Ltd"],
        // yData: [3, 11, 8, 2],
      }
    },
    computed: {
      get_graph_data() {
        return Bus.test_data.graph.testbar
      },
      graph() {
        return this.graph_id;
      },
      getX() {
        return this.get_graph_data.xData;
      },
      gety() {
        return this.get_graph_data.yData;
      }
    },
    mounted() {
      // let _this = this;
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("bar"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: this.title  // "可视化例子"
        },
        tooltip: {},
        xAxis: {
          // data: this.xData 
          data: this.getX
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: this.gety
        }]
      });
      
      myChart.on('click', function (params) {
        window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
      });
    }
  }

</script>

<style>
.graph {
  width: 100%;
  min-height: 200px;
  height: 400px;
  border: 1px solid grey;
}
</style>