<template>
<header>
  <div class="header__logo">
    <router-link to="/" class="header__logo--link"></router-link>
  </div>
  <div class="header__links">
    <router-link v-for="routes in links" :key="routes.id"
    :to="`${routes.page}`">{{routes.text}}</router-link>
  </div>
</header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private data() {
    return {
      links: [
        {
          id: 0,
          text: 'Strona główna',
          page: '/'
        },
        {
          id: 1,
          text: 'Lista produktów',
          page: '/products'
        },
        {
          id: 2,
          text: 'Dodaj produkt',
          page: '/form'
        }
      ]
    };
  }
}
</script>
