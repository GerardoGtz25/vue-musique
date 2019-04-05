<template>
  <div>
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <input type="text" class="input is-large" placeholder="Buscar canciones" v-model="searchQuery">
          <a href="" class="button is-info is-large" @click="search">Buscar</a>
          <a href="" class="button is-danger is-large">&times;</a>
          
        </div>
      </nav>
      <div class="container">
        <p>
          <small>{{ searchMessage }}</small>
        </p>
      </div>
      <div class="container">
        <div class="columns">
          <div class="column" v-for="track in tracks" :key="track">
            {{ track.name }} - {{ track.artists[0].name }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import trackService from './../service/track'

export default {
  name: 'home',

  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  methods: {
    search () {
      trackService.search(this.searchQuery).then(res => {
        this.tracks = res.tracks.items
      })
    }
  }
};
</script>
