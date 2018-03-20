<template>
    <section>
        <h1 class="text">{{ text }}</h1>
    </section>
</template>

<script>
    export default {
        name: 'vue-component',
        data() {
            return {
                text: 'Hello Vue'
            }
        }
    }
</script>

<style lang="scss">
    .text {
        transform: rotate(-5deg);
        display: block;
        position: relative;
        padding-bottom: 10px;
        margin: 10px;
        font-weight: 700;
        font-size: 30px;
        color: green;
        overflow-y: hidden;
        text-transform: capitalize;
    }
</style>