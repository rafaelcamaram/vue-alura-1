<template>
  <div>
    <h1 class="center">Alurapic</h1>

    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Filter using the photo title"/>
    {{ filter }}
    <ul class="photo-list">
      <li class="photo-list-item" v-for="photo of photosWithFilter" v-bind:key="photo.titulo">
        <my-own-panel :title="photo.titulo">
          <responsive-image slot="image" :url="photo.url" :title="photo.titulo"/>
          <my-own-button 
            slot="remove-button" 
            label="Remove" 
            type="button" 
            btnStyle="default"
            :check="true" 
            @activeButton="remove(photo)" />                              
        </my-own-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from '../shared/panel/Panel.vue';
import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue';
import Button from '../shared/button/Button.vue';

export default {
  components: {
    'my-own-panel': Panel,
    'responsive-image': ResponsiveImage,
    'my-own-button': Button
  },
  data() {
    return {
      photos: [],
      filter: ''
    }
  },
  computed: {
    photosWithFilter() {
      if(this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i');
        return this.photos.filter(photo => exp.test(photo.titulo));
      } else {
        return this.photos;
      }
    }
  },
  methods: {
    remove(photo) {
      alert('Remover ' + photo.titulo)
    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(photos => this.photos = photos, err => console.log(err))
  }
}
</script>

<style>
.center {
  text-align: center;
}

.photo-list {
  list-style: none;
}

.photo-list .list-photo-item {
  display: inline-block;
}

.filter {
  display: block;
  width: 100%;
}
</style>
