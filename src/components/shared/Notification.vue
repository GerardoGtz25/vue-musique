<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <div class="notification is-danger">
          <slot>Quelque chose a mal tourné</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .notification{
    margin: 10px;
  }
</style>
