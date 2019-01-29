<template>
  <div class="visual-board">
    <testbar 
      g-id='testbar' 
      g-title="例子-柱状图" 
      g-subtitle="副标题"
      :g-show="false">
    </testbar>

    <graph-tree
      g-id="graph_tree"
      g-title="例子-树图"
      :g-show="true">
    </graph-tree>
  </div>
</template>

<script>
  import testbar from "./testbar"
  import GraphTree from "./graphs/graph_tree.vue"

  export default {
    name: "VisualBoard",
    components: {
      testbar,
      "graph-tree": GraphTree
    }
  }
</script>

<style>
.visual-board {
}
</style>