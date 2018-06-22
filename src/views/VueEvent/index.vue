<template>
    <div class="wrap">
        <p>{{total}}</p>
        <vueEventButton v-on:increment="incrementTotal"></vueEventButton>
        <vueEventButton v-on:increment="incrementTotal"></vueEventButton>
    </div>
</template>

<script>
    import vueEventButton from 'CMP/ButtonCounter/index'
    export default {
        data:function () {
            return {
                total:0
            }
        },
        components:{
            vueEventButton
        },
        methods:{
            incrementTotal:function () {
                this.total += 1
            }
        }
    }
</script>

<style scoped>

</style>