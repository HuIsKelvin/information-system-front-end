<template>
  <div>
    <div class="graph" :id="gId" v-show="ifshow"></div>
  </div>
</template>
<script>
  import Bus from './../bus.js'

  let echarts = require('echarts')

  export default {
    name: "tree",
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
        // title: this.gTitle,
        // ifshow: this.gShow
      }
    },
    mounted() {
      // 判断是否此图显示
      if (this.gShow) {
        this.draw();
      }
    },
    computed: {
      ifshow() {
        return this.gShow
      },
      get_graph_data() {
        let this_graph_data = (Bus.get_result_graph())[this.gId]
        if (this_graph_data)
          return this_graph_data
        else {
          // 若无该图数据，则不显示
          this.ifshow = false;
          console.log("无该图数据");
        }
      },
    },
    methods: {
      // 画图
      draw() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById(this.gId));

        myChart.setOption({
          title: {
            text: "树图",
            subtext: "副标题",
            show: true,
          },
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          legend: {
            top: '2%',
            left: '3%',
            orient: 'vertical',
            data: {
              // 单棵树的名字
              name: 'tree2',
              icon: 'rectangle'
            },
          },
          series: {
            type: 'tree',
            name: 'test-tree',
            // top: '20%',
            right: '20%',
            // bottom: '22%',
            left: '10%',

            // 输入数据
            // 若series_data最外层是对象{}，则要加一层[]
            data: [this.get_graph_data],

            // 可以设置回调函数 (value: Array|number, params: Object) => number|Array
            symbolSize: 10,

            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right'
            },

            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            },

            emphasis: {
              itemStyle: {
                color: "#ff4040",
                // borderColor: "#555",
              },
              label: {
                fontWeight: "bold",
                // fontSize:20,
              },
              lineStyle: {
                color: "#fff",
                width: 2,
              }
            },

            // 树的初始层数，从0开始
            // initialTreeDepth: 2,
            // 子树折叠和展开的交互
            expandAndCollapse: true,
            // 初始动画的时长
            animationDuration: 300,
            // 数据更新动画的时长。
            animationDurationUpdate: 750
          }

        });

        myChart.on('click', function (params) {
          window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
        });
      }
    }
  }
</script>

<style>
  .graph {
    width: 100%;
    min-height: 300px;
    /* height: 400px; */
  }
</style>