<template>
  <div>
    <vm-header/>
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <input type="text" class="input is-large" placeholder="Buscar canciones" v-model="searchQuery">
          <a class="button is-info is-large" @click="search">Buscar</a>
          <a class="button is-danger is-large" @click="clean">&times;</a>
          
        </div>
      </nav>
      <div class="container">
        <vm-loader v-show="isLoading"/>
        <p>
          <small>{{ searchMessage }}</small>
        </p>
      </div>
      <div class="container results">
        <div class="columns is-multiline" v-show="!isLoading">
          <div class="column is-one-quarter" v-for="t in tracks" :key="t.id">
            <vm-track :track="t"/>
          </div>
        </div>
      </div>
    </section>
    <vm-footer/>
  </div>
</template>

<script>
import trackService from '../service/track'
import VmFooter from '../components/layouts/Footer'
import VmHeader from '../components/layouts/Header'
import VmTrack from '../components/Track'
import VmLoader from '../components/shared/Loader'

export default {
  name: 'home',

  components: { VmFooter, VmHeader, VmTrack, VmLoader },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      counter: 0,
    }
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`
    },
  },

  methods: {
    search() { 
      if (!this.searchQuery) { return }

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.isLoading = false
        });
    },
    clean() {
      this.tracks = []
    },
  },
};
</script>
