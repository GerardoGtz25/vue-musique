<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="track.album.images[0].url">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48"> 
            <img :src="track.album.images[0].url" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ track.name }}</p>
          <p class="subtitle is-6">{{ track.artists[0].name}}</p>
        </div>
      </div>
      <div class="content" style="flex:" @click="selectTrack">
        <a class="button is-primary">
          <span class="icon is-small">
            <i class="fas fa-play"></i>
          </span>
          <p>Reproducir</p>
        </a>
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
      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
    }
  }
}
</script>

