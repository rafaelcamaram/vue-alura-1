<template>
  <div class="body">
    <my-own-menu :routes="routes"/>

    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Menu from './components/shared/menu/Menu.vue';
import { routes } from './routes';

export default {
  components: {
    'my-own-menu': Menu
  },
  data() {
    return {
      routes
    }
  }
}
</script>

<style>
.body {
  font-family: Helvetica, sans-serift;
  margin: 0 auto;
  width: 96%;
}

.page-enter-active, .page-leave-active {
  transition: opacity .3s;
}

.page-enter, .page-leave-active {
  opacity: 0;
}
</style>
