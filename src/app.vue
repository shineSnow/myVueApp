<style scoped>
    p{
        font-size: 24px;
        text-align: center;
    }
</style>

<template>
    <div class="wrapper">
        <p>{{greeting}} world！少时诵诗书 效果图出口国和 查一查</p>
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            greeting: 'Hello vue and'
        }
    }
}
</script>