<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import Product from './components/Product.vue';

@Component({
  components: {
    Header,
    Product
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
  @import './styles/main.scss';
</style>
