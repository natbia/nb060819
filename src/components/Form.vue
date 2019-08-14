<template>
  <section class="form">
    <h2>Formularz</h2>
    <form action="#" @submit.prevent="submitForm">
      <div class="form-group">
        <label class="form-group__label">Nazwa produktu</label>
        <input class="form-group__field" type="text" placeholder="Podaj nazwę produktu" v-model.trim.lazy="form.name"/>
        <p class="form-group__error" v-if="!form.name">
          {{ form.errors[0] }}
        </p>
      </div>
      <div class="row">
        <div class="form-group form-group--price">
          <label class="form-group__label">Cena</label>
          <input class="form-group__field form-group__field--price"
          type="number" min="0" placeholder="Podaj cenę" v-model="form.price" @change="roundPrice"/>
          <p class="form-group__error" v-if="!form.price">
            {{ form.errors[1] }}
          </p>
        </div>
        <div class="form-group form-group--category">
          <label class="form-group__label">Kategoria produktu</label>
          <select class="form-group__field form-group__field--select" v-model="form.category">
            <option>
              Wybierz kategorię
            </option>
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
          <p class="form-group__error" v-if="!form.category">
            {{ form.errors[2] }}
          </p>
        </div>
      </div>
      <div class="form-group">
        <label class="form-group__label">Opis produktu</label>
        <textarea class="form-group__field form-group__field--textarea"
        type="text" placeholder="Opisz swój produkt" v-model.trim="form.description"/>
        <p class="form-group__error" v-if="!form.description">
          {{ form.errors[3] }}
        </p>
      </div>
      <button class="button">Dodaj</button>
    </form>
    <p>

    </p>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
  private form: any = {
    name: null,
    description: null,
    price: null,
    category: null,
    errors: []
  };
  get formIsValid() {
    if (this.form.name && this.form.price && this.form.category && this.form.description) {
      return true;
    }
    this.form.errors = [];

    if (!this.form.name) {
      this.form.errors.push('Nazwa produktu jest wymagana');
    }
    if (!this.form.price) {
      this.form.errors.push('Cena jest wymagana');
    }
    if (!this.form.category) {
      this.form.errors.push('Kategoria produktu jest wymagana');
    }
    if (!this.form.description) {
      this.form.errors.push('Opis produktu jest wymagana');
    }
  }
  private roundPrice() {
    this.form.price = parseFloat(this.form.price).toFixed(2);
    console.log(parseFloat(this.form.price).toFixed(2));
  }
  private submitForm() {
    if (this.formIsValid) {
      console.log('Dodaję produkt');
    } else {
      console.log('Błędy: ' + this.form.errors);
    }
  }
}
</script>
