<template>
    <tr :class="{ 'products__editable': editMode }">
      <td>
        {{ id + 1 + '.' }}
      </td>
      <td class="products__table--name">
        <template v-if="editMode">
          <input type="text" :class="{'products__field--error' :!product.name}" v-model.trim.lazy="product.name" class="products__field"/>

        </template>
        <template v-else>
          {{ product.name }}
        </template>
      </td>
      <td class="products__table--price">
        <template v-if="editMode">
          <input type="number" @change="roundPrice" :class="{'products__field--error' :!product.price}" min="0" v-model.trim.lazy.number="product.price" class="products__field"/>
        </template>
        <template v-else>
          {{ product.price + ' PLN' }}
        </template>
      </td>
      <td>
        <template v-if="editMode">
          <select class="products__field" :class="{'products__field--error' :!product.category}" v-model.lazy="product.category">
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
        </template>
        <template v-else>
          {{ product.category }}
        </template>
      </td>
      <td class="products__table--description">
        <template v-if="editMode">
          <textarea type="text" v-model.lazy.trim="product.description" :class="{'products__field--error' :!product.description}" class="products__field products__field--description"/>
        </template>
        <template v-else>
          {{ product.description }}
        </template>
      </td>
      <td v-if="!editMode">
        <button class="products__button products__button--edit" @click="editMode = !editMode"></button>
      </td>
      <td v-if="editMode">
        <button class="products__button products__button--save" @click="save(product.id)" :disabled="!isFilled"></button>
      </td>
    </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  private data() {
    return {
      editMode: false
    };
  }

  get isFilled() {
    return this.product.name && this.product.price && this.product.category && this.product.description;
  }

  private roundPrice() {
    this.product.price = parseFloat(this.product.price).toFixed(2);
  }

  private save(id) {
    this.editMode = false;
    this.$emit('save', id);
  }
  @Prop() private product?: Product;
  @Prop() private readonly id: number;
}
</script>
