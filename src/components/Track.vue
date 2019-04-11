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
      <div class="content">
        <small>{{ track.duration_ms }}</small>
        <nav class="level">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small" @click="selectTrack">Play ▶️</span>
            </a>
          </div>
        </nav>
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
      this.$emit('select', this.track.id);
    }
  }
}
</script>

