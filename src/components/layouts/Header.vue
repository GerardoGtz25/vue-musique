<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="nav">
        <div class="container">

          <div class="navbar-start">
            <div class="nav-item">
              <strong>Vue Musique</strong>
              
            </div>
          </div>

          <div class="navbar-end">
            <a class="nav-item" @click="selectLang('en')">En</a>
            <a class="nav-item" @click="selectLang('es')">Es</a>
            <router-link to="/" class="nav-item">{{ $t('search') }}</router-link>
            <router-link to="/about" class="nav-item"> {{ $t('about') }}</router-link>
          </div>

        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title"></h1>
        <h2 class="subtitle">les meilleures chansons du moment!</h2>
        <vm-player/>
      </div>
    </div>
  </section>
</template>

<script>
import VmPlayer from '@/components/Player.vue'

export default {
  components: { VmPlayer },

  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

