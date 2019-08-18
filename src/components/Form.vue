<template>
  <section class="form">
    <h2>Formularz</h2>
    <form id="form" action="#" @submit.prevent="submitForm()">
      <div class="form__errors" v-if="errors.length">
        <ul>
           <li v-for="error in errors">{{ error }}</li>
         </ul>
      </div>
      <div class="form-group">
        <label class="form-group__label">Nazwa produktu</label>
        <input class="form-group__field" type="text" placeholder="Podaj nazwę produktu" v-model.trim.lazy="productName"/>
      </div>
      <div class="row">
        <div class="form-group form-group--price">
          <label class="form-group__label">Cena</label>
          <input class="form-group__field form-group__field--price"
          type="number" min="0" placeholder="Podaj cenę" v-model.trim.lazy.number="productPrice" @change="roundPrice"/>
        </div>
        <div class="form-group form-group--category">
          <label class="form-group__label">Kategoria produktu</label>
          <select class="form-group__field form-group__field--select" v-model.lazy="productCategory">
            <option>
              Kategoria 1
            </option>
            <option>
              Kategoria 2
            </option>
            <option>
              Kategoria 3
            </option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-group__label">Opis produktu</label>
        <textarea class="form-group__field form-group__field--textarea"
        type="text" placeholder="Opisz swój produkt" v-model.lazy.trim="productDescription"/>
      </div>
      <button class="button" @click="reset">Dodaj</button>
    </form>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
const baseURL = 'http://localhost:3000/products';

@Component
export default class Form extends Vue {
  public products: array = [];
  public productName: string = '';
  public productPrice: number = '';
  public productCategory: string = '';
  public productDescription: string = '';
  public errors: array = [];

  get formIsValid() {
    if (this.productName && this.productPrice && this.productCategory && this.productDescription) {
      return true;
    }
    this.errors = [];

    if (!this.productName) {
      this.errors.push('Nazwa produktu jest wymagana!');
    }
    if (!this.productPrice) {
      this.errors.push('Cena produktu jest wymagana!');
    }
    if (!this.productCategory) {
      this.errors.push('Kategoria produktu jest wymagana!');
    }
    if (!this.productDescription) {
      this.errors.push('Opis produktu jest wymagany!');
    }
  }
  private roundPrice() {
    this.productPrice = parseFloat(this.productPrice).toFixed(2);
  }
  private async submitForm() {
    if (this.formIsValid) {
      axios
        .post(baseURL, {
          name: this.productName,
          price: this.productPrice,
          category: this.productCategory,
          description: this.productDescription
        })
        .then(resp => {
          console.log(resp.data);
        })
        .catch(error => {
          console.log(error);
        });
      this.productName = '';
      this.productPrice = '';
      this.productCategory = '';
      this.productDescription = '';

      const success = document.createElement('div');
      success.className = 'form__success';
      success.textContent = 'Gratulacje! Produkt został dodany.';
      const form = document.querySelector('#form');
      form.insertBefore(success, form.childNodes[0]);
    }
  }
  private reset() {
    this.errors = [];
    const success = document.querySelector('.form__success');
    if (success) {
      success.parentNode.removeChild(success);
    }
  }
}
</script>
