<template>
  <main>
    <BasketTable />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import BasketTable from 'organisms/BasketTable.vue'
export default Vue.extend({
  name: 'BasketPageTemplate',
  components: {
    BasketTable,
  },
})
</script>
