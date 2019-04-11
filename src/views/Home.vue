<template>
  <div>
    <vm-header/>
    <vm-notification v-show="showNotification">
      <p>No se encontraron resultados</p>
    </vm-notification>
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
            <vm-track :track="t" @select="setSelectedTrack" :class="{'is-active': t.id === selectedTrack}"/>
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

import VmNotification from '../components/shared/Notification'
import VmLoader from '../components/shared/Loader'
import { setTimeout } from 'timers';

export default {
  name: 'home',

  components: { VmFooter, VmHeader, VmTrack, VmLoader, VmNotification },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      counter: 0,
      selectedTrack: ''
    }
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`
    },
  },

  watch: {
    showNotification() {
      if(this.showNotification){
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {

    search() { 
      if (!this.searchQuery) { return }

      this.isLoading = true,

      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        });
    },

    clean() {
      this.tracks = []
    },

    setSelectedTrack(id) {
      this.selectedTrack = id;
    },
  },
};
</script>

<style>
  .is-active {
    border: 3px #23d160 solid;
  }
</style>

