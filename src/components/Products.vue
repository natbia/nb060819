<template>
<section class="products">
  <h2>Lista produktów</h2>
  <table class="products__table">
    <thead>
      <tr>
        <th class="products__table-number">L.p.</th>
        <th class="products__table-name">Nazwa produktu</th>
        <th class="products__table-price">Cena</th>
        <th class="products__table-category">Kategoria</th>
        <th class="products__table-description">Opis</th>
        <th class="products__table-button"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-bind:is="'productview'" v-for="(product, id) of products" :key="product.id" :product="product" :id="id" @save="save"></tr>
    </tbody>
  </table>
</section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
const baseURL = 'http://localhost:3000/products';

@Component
export default class Products extends Vue {
  private data() {
    return {
      products: []
    };
  }
  private async save(id) {
    const newName = this.products[id].name;
    const newPrice = this.products[id].price;
    const newCategory = this.products[id].category;
    const newDescription = this.products[id].description;

    axios
      .put(baseURL + id, {
        name: this.products[id].name,
        price: this.products[id].price,
        category: this.products[id].category,
        description: this.products[id].description
      })
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  private async created() {
    try {
      const res = await axios.get('http://localhost:3000/products');
      this.products = res.data;
    } catch (e) {
      console.error(e);
    }
  }
}
</script>
