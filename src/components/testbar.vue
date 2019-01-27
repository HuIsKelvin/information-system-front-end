<template>
  <div>
    <div :id="gId" class="graph" v-show="ifshow"></div>
  </div>
</template>
<script>
  import Bus from './bus.js'

  let echarts = require('echarts')

  export default {
    name: "testbar",
    // 传入的值
    props: {
      // 图的容器 div 的 id
      gId: {
        type: String,
        // 必填
        required: true
      },
      // 图的标题
      gTitle: {
        type: String,
        default: "Title"
      },
      // 图的副标题
      gSubtitle: {
        type: String,
        default: "Sub Title"
      },
      // 图的数据
      gData: {
        type: Object,
        // required: true
      },
      // 是否显示
      gShow: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        title: this.gTitle,
        ifshow: this.gShow
      }
    },
    computed: {
      // 这个方法可以放到mounted()里
      get_graph_data() {
        if(Bus.test_data.graph.testbar)
          return Bus.test_data.graph.testbar
        // if(Bus.get_result_graph())
          // return Bus.get_result_graph()
        else {
          // 若无该图数据，则不显示
          this.ifshow = false;
          console.log("无该图数据");
        }
      },
      getX() {
        return this.get_graph_data.xData;
      },
      gety() {
        return this.get_graph_data.yData;
      }
    },
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById(this.gId));
      // 绘制图表
      myChart.setOption({
        title: {
          text: this.gTitle,  // "可视化例子"
          subtext: this.gSubtitle
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
      
      // 点击事件
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
  /* border: 1px solid grey; */
}
</style>