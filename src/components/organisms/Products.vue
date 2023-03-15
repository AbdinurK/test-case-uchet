<template>
  <div class="content">
    <h2 class="heading">Косметика</h2>
    <div class="list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductCard from '../molecules/ProductCard/index.vue'
import { TProduct } from '../../types/DTO/product'
export default Vue.extend({
  components: {
    ProductCard,
  },
  data() {
    return {}
  },
  computed: {
    products(): TProduct[] {
      return this.$store.getters['products/list']
    },
  },
})
</script>

<style scoped lang="scss">
.content {
  flex: 1;
}
.heading {
  font-size: 2rem;
  margin: 0 0 30px;
}
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
