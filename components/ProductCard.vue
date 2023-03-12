<template>
    <article class="card">
        <figure class="card_image">
            <img alt="product-image" src="/product.jpeg" />
        </figure>
        <div class="card_title">
            Brand 1
        </div>
        <div class="card_actions">
            <button>
                Add to cart {{ list }}
            </button>
            <button>
                Add to wishlist
            </button>
        </div>
    </article>
</template>


<script lang="ts">
export default {
    name: "ProductCard",
    methods: {
        increment() {
        },
    },
    computed: {
        list() {
            return this.$store.getters['basket/name']
        },
  },
}
</script>


<style scoped lang="scss">
.card {
    cursor: pointer;
    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    overflow: hidden;
    &_image {
        margin: 0;
        height: 260px;
        width: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &_title, &_actions {
        border: 1px solid #000;
        padding: 2px;
    }
}
</style>