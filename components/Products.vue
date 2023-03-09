<template>
    <div class="content">
        <h2 class="heading">Косметика</h2>
        <div class="list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
</template>


<script lang="ts">
export default {
    data() {
        return {

        }
    }
}
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
