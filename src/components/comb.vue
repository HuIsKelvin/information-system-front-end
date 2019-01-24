<template>
<div>
  <h1>component b</h1>
  <div>{{message}}</div>
</div>
</template>

<script>
  import Bus from './bus.js'

  export default {
    name: "comb",
    data() {
      return {
        message: "!"
      }
    },
    methods: {
    },
    mounted() {
      let self = this;
        Bus.$on("sendmsg", (msg) => {
          self.message = msg;
      })
    }
  }
</script>