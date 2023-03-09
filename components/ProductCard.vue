<template>
    <article class="card">
        <figure class="card_image">
            <img alt="product-image" src="/product.jpeg" />
        </figure>
        <div class="card_actions">
            
        </div>
    </article>
</template>


<style scoped lang="scss">
.card {
    border: 1px solid #000;
    overflow: hidden;
    &_image {
        margin: 0;
        img {
            width: 100%;
            // height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
}
</style>