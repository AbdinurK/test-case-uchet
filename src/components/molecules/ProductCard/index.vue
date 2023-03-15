<template>
  <article class="card">
    <figure class="card_image">
      <img alt="product-image" :src="product.image" />
    </figure>
    <div class="card_title">{{ product.name }}</div>
    <div class="card_actions">
      <button @click="() => addToBasket(product.id)">Add to cart</button>
      <button>Add to wishlist</button>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { TProduct } from '../../../types/DTO/product'
export default Vue.extend({
  props: {
    product: {
      type: TProduct,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    addToBasket(id: number) {
      this.$store.commit('basket/setList', id)
    },
  },
})
</script>

<style scoped lang="scss">
.card {
  cursor: pointer;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2);
  }

  overflow: hidden;
  &_image {
    margin: 0;
    // height: 100%;
    height: 260px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &_title,
  &_actions {
    border: 1px solid #000;
    padding: 2px;
  }
}
</style>
