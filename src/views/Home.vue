<template>
  <div>
    <vm-notification v-show="showNotification">
      <p>Nous n'avons pas trouver aucun resultat</p>
    </vm-notification>
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container space-btw">
          <input type="text" class="input is-large is-rounded input-size" placeholder="Chercher des chansons" v-model="searchQuery">
          <div>
            <a class="button is-info is-large marginRL" @click="search">Chercher</a>
            <a class="button is-danger is-large marginRL" @click="clean">&times;</a>
          </div>
        </div>
      </nav>
      <div class="container">
        <vm-loader v-show="isLoading"/>
        <p style="margin: 10px;">
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
  </div>
</template>

<script>
import trackService from '../service/track'

import VmTrack from '../components/Track'

import VmNotification from '../components/shared/Notification'
import VmLoader from '../components/shared/Loader'
import { setTimeout } from 'timers';

export default {
  name: 'home',

  components: { VmTrack, VmLoader, VmNotification },

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
      return `Trouvés: ${this.tracks.length}`
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
      this.searchQuery = ''
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
  .input-size {
    width: 70%;
  }
  .marginRL{
    margin-right: 5px;
    margin-left: 5px;
  }
  .space-btw{
    display: flex;
    justify-content: space-between;
  }
</style>

