<template>
  <div>
    <h1>component a</h1>
    <button @click="send">send msg from a</button>
  </div>
</template>

<script>
import Bus from './bus.js'

export default {
  name: "coma",
  data() {
    return {
      msg: "mes from coma"
    }
  },
  methods: {
    send() {
      Bus.$emit("sendmsg", this.msg)
    }
  },
  // mounted: () => {
  //   Bus.$emit("sendmsg", "from a")
  // }
}
</script>

<style>

</style>
