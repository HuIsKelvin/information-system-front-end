<template>
<div>
  <h1>component b</h1>
  <div>{{message}}</div>
  <h2>data: {{data}}</h2>
  <h2>{{busdata}}</h2>
</div>
</template>

<script>
  import Bus from './bus.js'

  export default {
    name: "comb",
    data() {
      return {
        message: "!",
        data: Bus.data
      }
    },
    methods: {
    },
    computed: {
      busdata() {
        return Bus.data
      }
    },
    mounted() {
      let self = this;
        Bus.$on("sendmsg", (msg) => {
          self.message = msg;
      })
    }
  }
</script>