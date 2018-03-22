<template>
    <div class="wrapper">
        <Icon type="ionic" :size="num"></Icon>
        <Icon type="arrow-up-a" :size="num"></Icon>
        <Icon type="arrow-right-a" :size="num"></Icon>
        <Icon type="arrow-down-a" :size="num"></Icon>
        <Icon type="arrow-left-a" :size="num"></Icon>
    </div>
</template>

<script>
    export default {
        name: 'icon',
        data() {
           return {
               num:32
           }
        }
    }
</script>

<style scoped>
    .vue-icon {
        font-size: 32px; 
    }
</style>