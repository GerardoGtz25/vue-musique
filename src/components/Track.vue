<template>
  <div class="card" v-if="track && track.album">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="track.album.images[0].url">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48"> 
            <img :src="track.album.images[0].url">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ track.name }}</p>
          <p class="subtitle is-6">{{ track.artists[0].name}}</p>
          <small>{{ track.duration_ms | ms-to-mm }}</small>
        </div>
      </div>
      <div class="content space" >
        <button class="button is-primary" @click="selectTrack">
          <span class="icon is-small">
            <i class="fas fa-play"></i>
          </span>
          <p>Reproducir</p>
        </button>
        <button class="button is-warning" @click="goToTrack(track.id)">
          <i class="fas fa-info-circle"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    track: '',
  },

  methods: {
    selectTrack() {
      if (!this.track.preview_url) { return }
      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
    },

    goToTrack(id) {
      if (!this.track.preview_url) { return }
      this.$router.push({ name: 'track', params: { id }})
    }
  }
}
</script>

<style>
  .space {
    display: flex;
    justify-content: space-between;
  }
</style>


