/*
bus作为数据存储中心，并负责组件间数据通信
在用到bus的组件中，都需要import Bus from path

组件直接使用bus的数据
使用 bus 的 methods 获取数据

事件监听
发送 Bus.$emit(eventname, value)
监听 Bus.$on(eventname, function(value){ 对应操作 })

来源：https://www.jb51.net/article/136758.htm
*/

import Vue from 'vue'

export default new Vue({
  methods: {
    get_query_text() {
      return this.query_data.query_text;
    },
    return_testdata() {
      return this.test_data;
    },
    // update() {
    //   // 监听事件，更新数据
    //   this.$on("update_data", (val) => {
    //     this.data = val;
    //   })
    // },
    update_query_text(val) {
      if (val != "") {
        this.query_data.query_text = val;
      }
    },
    // 接收数据结果
    receive_result(val) {
      this.query_data.query_result = val;
    },
    // 取出数据
    get_result() {
      return this.query_data.query_result;
    },
    // 取出图的数据
    get_result_graph() {
      return this.query_data.query_result.graph;
    }
  },
  // created() {
  //   // 监听事件
  //   this.$on("update_data", (val) => {
  //     this.data = val;
  //   })
  // },
  data() {
    return {
      data: "origin data",
      default: {},
      query_data: {
        query_text: "query",
        type: "",
        seq: "",
        query_result: {
          "graph": {
            "graph_tree": {
              "name": "flare",
              "children": [{
                  "name": "flex",
                  "children": [{
                    "name": "FlareVis"
                  }]
                },
                {
                  "name": "scale",
                  "children": [{
                      "name": "IScaleMap",
                      "children": [{
                        "name": "A"
                      }]
                    },
                    {
                      "name": "LinearScale"
                    },
                    {
                      "name": "LogScale"
                    },
                    {
                      "name": "OrdinalScale"
                    },
                    {
                      "name": "QuantileScale"
                    },
                    {
                      "name": "QuantitativeScale"
                    }
                  ]
                },
                {
                  "name": "display",
                  "children": [{
                    "name": "DirtySprite"
                  }]
                }
              ]
            }
          }
        }
      },
      test_data: {
        "papers": [{
          "UID": 872140,
          "TI": "A Discriminative CNN Video Representation for Event Detection",
          "AB": "In this paper, we propose a discriminative video representation for event detection over a large scale video dataset when only limited hardware resources are available. The focus of this paper is to effectively leverage deep Convolutional Neural Networks (CNNs) to advance event detection, where only frame level static descriptors can be extracted by the existing CNN toolkits. This paper makes two contributions to the inference of CNN video representation. First, while average pooling and max pooling have long been the standard approaches to aggregating frame level static features, we show that performance can be significantly improved by taking advantage of an appropriate encoding method. Second, we propose using a set of latent concept descriptors as the frame descriptor, which enriches visual information while keeping it computationally affordable. The integration of the two contributions results in a new state-of-the-art performance in event detection over the largest video datasets. Compared to improved Dense Trajectories, which has been recognized as the best video representation for event detection, our new representation improves the Mean Average Precision (mAP) from 27.6% to 36.8% for the TRECVID MEDTest 14 dataset and from 34.0% to 44.6% for the TRECVID MEDTest 13 dataset.",
          "PY": 2015,
          "Z9": 132,
          "AF": "[Xu Zhongwen, Yang Yi,Hauptman Alexander G]",
          "C1": "Australia",
          "authorList": [],
          "country": "Australia",
          "og": "Univ Technol Sydney",
          "conf": "IEEE Conference on Computer Vision and Pattern Recognition "
        }, {
          "UID": 872141,
          "TI": "Profiling Web users using big data",
          "AB": "Profiling Web users is a fundamental issue for Web mining and social network analysis. Its basic tasks include extracting basic information, mining user preferences, and inferring user demographics (Tang et al. in ACM Trans Knowl Discov Data 5(1):2:1â€“2:44, 2010). Although methodologies for handling the three tasks are different, they all usually contain two stages: first identify relevant pages (data) of a user and then use machine learning models (e.g., SVM, CRFs, or DL) to extract/mine/infer profile attributes from each page. The methods were successful in the traditional Web, but are facing more and more challenges with the rapid evolution of the Web each persons information is distributed over the Web and is changing dynamically. As a result, available data for a user on the Web is redundant, and some sources may be out-of-date or incorrect. The traditional two-stage method suffers from data â€¦",
          "PY": 2018,
          "SO": "Social Network Analysis and Mining",
          "Z9": 1,
          "AF": "Xiaotao Gu, Hong Yang, Jie Tang, Jing Zhang, Fanjin Zhang, Debing Liu, Wendy Hall, Xiao Fu",
          "authorList": [],
          "journal": "Social Network Analysis and Mining"
        }, {
          "UID": 872142,
          "TI": "CareerMap: visualizing career trajectory",
          "AB": "This study introduces a system named CareerMap that visualizes a scholarâ€™s career trajectory. As an online demonstration of CareerMap, we have shown the visualization result by CareerMap for the AMiner 2016 most influential scholars in machine learning (ML) 1). Each trajectory path on the map represents the movement of a scholar between different places (affiliations). The heatmap reveals the geographic distribution of the most influential ML scholars; a larger hotspot means a larger immigration of scholars into an affiliation. The right sidebar is a list of all scholars. When the user selects (clicks on) a scholar, the trajectory path of that scholar is highlighted in the map. The bottom bar shows the timeline. When the user selects a specific year, a textbox at the bottom displays the most important work (paper) published in that year by a scholar in the right-hand list. This example provides the track records of over half of the most influential ML scholars at the east and west coasts of the USA, and in west Europe. By zooming in, the user can also check the city-level results or obtain finer details.)\nCareerMap can benefit many applications. For example, if the movements of all experts in artificial intelligence (AI) worldwide were displayed on a visual map, government strategy departments could better understand the talent distribution and accordingly design wise AI strategies. Similarly, CareerMap can assist the design of smart",
          "PY": 2018,
          "SO": "Science China Information Sciences",
          "Z9": 1,
          "AF": "Kan Wu, Jie Tang, Zhou Shao, Xinyi Xu, Bo Gao, Shu Zhao",
          "authorList": [],
          "journal": "Science China Information Sciences"
        }],
        "CN_News": [{
          "ID": 751147,
          "title": "Chinaâ€™s Go Masters and Researchers Are Optimistic about the Countryâ€™s AI Future",
          "content": "After defeating Ke Jie, AlphaGo played alongside several top Go players in ... says Jie Tang, an associate professor there who studies machine ...",
          "release_time": "2017-5-30",
          "author": "MIT Technology Review",
          "url": "https://www.technologyreview.com/s/607972/chinas-go-masters-and-researchers-are-optimistic-about-the"
        }, {
          "ID": 751146,
          "title": "The Insanely Popular Chinese News App That Youâ€™ve Never Heard Of",
          "content": "Jie Tang, a professor at China Tsinghua University who studies information diffusion and social network dynamics, says as Toutiao becomes ...",
          "release_time": "2017-1-26",
          "author": "Will Knight",
          "url": "https://www.technologyreview.com/s/603351/the-insanely-popular-chinese-news-app-that-youve-never-hea"
        }, {
          "ID": 751145,
          "title": "Who Owns Your Face?",
          "content": "Jie Tang, an associate professor at Tsinghua University, described to MIT Technology Review how he uses his faceprint to pay for meals: â€œNot only can he pay for things this way, he says, but the staff in some coffee shops are now alerted by a facial recognition system when he walks in,â€ and they greet him by name.",
          "release_time": "2017-3-24",
          "author": "The Atlantic",
          "url": "https://www.theatlantic.com/technology/archive/2017/03/who-owns-your-face/520731/"
        }, {
          "ID": 751183,
          "title": "KDD 2018 opens today, Bing Liu and Jie Tang won the Innovation Award and Outstanding Service Award",
          "content": "KDD 2018 President Yi-Ke Guo and Faisal Farooq and Vice-President Tang Jie announced the opening ceremony of the conference... Then, Vice Chairman Jie Tang presided over KDD 2018\u0027s paper delivery and major awards. The ...Service Award Service Award is awarded by Jie Tang of Tsinghua University.",
          "release_time": "2018/08/21 00:00",
          "author": "AI Technology Review",
          "url": "https://mp.weixin.qq.com/s?__biz\u003dMzI5NTIxNTg0OA\u003d\u003d\u0026mid\u003d2247492274\u0026idx\u003d1\u0026sn\u003daef0a297bec1203ad7009dfce0"
        }],
        "query_box_expert": {
          "exp_name": "jie tang",
          "exp_hindex": 53,
          "exp_org": "Department of Computer Science and Technology,Tsinghua University",
          "exp_paperNum": 269
        },
        graph: {
          testbar: {
            xData: ["nuctech Co Ltd", "Tsinghua University", "Hon Hai Precision Industry Co Ltd", "Huawei Technologies Co Ltd"],
            yData: [3, 11, 16, 2],
          }
        }
      }
    }
  }
});