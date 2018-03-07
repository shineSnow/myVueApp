<style scoped>
    p{
        font-size: 24px;
        text-align: center;
    }
</style>

<template>
    <div class="wrapper">
        <p>{{greeting}} world！</p>
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