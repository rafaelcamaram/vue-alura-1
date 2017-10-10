<template>
  <div class="body">
    <h1 class="center">{{ title }}</h1>

    <ul class="photo-list">
      <li class="photo-list-item" v-for="photo in photos" v-bind:key="photo.titulo">
        <my-own-panel :title="photo.titulo">
          <img slot="image" class="imagem-responsiva" :src="photo.url" :alt="photo.titulo">
        </my-own-panel>
      </li>
    </ul>
  </div>
</template>

<script>

import Panel from './components/shared/panel/Panel.vue';

export default {
  components: {
    'my-own-panel': Panel
  },
  data() {
    return {
      title: 'Alurapic!',
      photos: []
    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(photos => {
        this.photos = photos
        console.log(photos)
      }, err => console.log(err))
  }
}
</script>

<style>
.center {
  text-align: center;
}

.body {
  font-family: Helvetica, sans-serift;
  margin: 0 auto;
  width: 96%;
}

.photo-list {
  list-style: none;
}

.photo-list .list-photo-item {
  display: inline-block;
}

.imagem-responsiva {
  width: 100%;
}
</style>
