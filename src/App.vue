<template>
  <div id="app">
    <vm-header/>
    <router-view/>
    <vm-footer/>
  </div>
</template>

<script>
  import VmFooter from './components/layouts/Footer'
  import VmHeader from './components/layouts/Header'

  export default {
    components: { VmFooter, VmHeader },
  }
</script>


<style lang="scss">
  @import './scss/main.scss';
</style>
