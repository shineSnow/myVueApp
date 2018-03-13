<template>
    <div class="wrapper">
        <p>{{greeting}} world!</p>
        <transition name="fade">
            <keep-alive>
                 <router-view></router-view>
            </keep-alive>
        </transition>
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

<style scoped>
    p{
        font-size: 24px;
        text-align: center;
    }
</style>
