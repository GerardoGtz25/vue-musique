<template>
  <div class="content" v-if="track && track.album">
    <p>
      <img :src="track.album.images[0].url">
    </p>
    <p>
      <strong>{{ track.name }} </strong>
      <small> [{{ track.duration_ms | ms-to-mm }}]</small>
    </p>
    <p>
      <audio :src="track.preview_url" controls></audio>
    </p>
  </div>
</template>

<script>
export default {

  data() {
    return {
      track: {}
    }
  },

  created() {
    this.$bus.$on('set-track', (track) => {
      console.log(track)
      this.track = track
    })
  }
}
</script>

<style scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }
</style>


