<template>
  <div>
    <h1>{{ msg }}</h1>
    <p v-show="showValue">{{ value }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data () {
    return {
      msg: 'je vais faire tout cet application en francais !',
      showValue: true,
      value: 'Algo',
    }
  }
};
</script>
