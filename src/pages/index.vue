<template>
  <main class="container">
    <header class="header">
      <nav class="header_nav">
        <nuxt-link v-slot="{ navigate }" to="/">
          <figure class="logo-image">
            <img
              src="~/assets/icons/nuxt-logo-primary.svg"
              alt="Logo"
              role="link"
              @click="navigate"
            />
          </figure>
        </nuxt-link>
        <ul class="header_list">
          <nuxt-link v-slot="{ navigate }" to="/basket">
            <figure class="basket-image">
              <img
                src="~/assets/icons/wishlist.png"
                alt="basket"
                role="link"
                @click="navigate"
              />
            </figure>
          </nuxt-link>
          <nuxt-link v-slot="{ navigate }" to="/basket">
            <figure class="basket-image">
              <img
                src="~/assets/icons/basket.png"
                alt="basket"
                role="link"
                @click="navigate"
              />
              <figcaption>{{ list.length }}</figcaption>
            </figure>
          </nuxt-link>
        </ul>
      </nav>
    </header>
    <div class="page">
      <aside class="aside">
        <ul class="aside_menu">
          <li v-for="item in categories" :key="item.id" class="aside_menu_item">
            <a :href="item.link">{{ item.name }}</a>
          </li>
        </ul>
      </aside>
      <Products />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Products from '../components/organisms/Products.vue'
export default Vue.extend({
  components: {
    Products,
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Все бренды',
          link: '#all',
        },
        {
          id: 2,
          name: 'Электроника',
          link: '#electronics',
        },
        {
          id: 3,
          name: 'Для дома',
          link: '#home',
        },
        {
          id: 4,
          name: 'Детские товары',
          link: '#kids',
        },
        {
          id: 5,
          name: 'Развлечения',
          link: '#enjoy',
        },
        {
          id: 6,
          name: 'Косметика',
          link: '#cosmetics',
        },
        {
          id: 7,
          name: 'Книги',
          link: '#books',
        },
        {
          id: 8,
          name: 'Игры',
          link: '#games',
        },
        {
          id: 9,
          name: 'Ювелирные украшения',
          link: '#jewelry',
        },
      ],
    }
  },
  computed: {
    list() {
      return this.$store.getters['basket/list']
    },
  },
})
</script>

<style scoped lang="scss">
.container {
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
}
.header {
  margin-top: 30px;
  &_nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &_list {
    display: flex;
    gap: 20px;
    padding: 0;
    cursor: pointer;
  }
}
.logo-image {
  margin: 0;
}
.basket-image {
  width: 30px;
  height: 30px;
  margin: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.aside {
  font-size: 1.1rem;
  color: #000;
  &_menu {
    list-style: none;
    padding-left: 0;
    margin: 0;
    &_item {
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
.page {
  display: flex;
  margin-top: 50px;
  gap: 50px;
}
</style>
