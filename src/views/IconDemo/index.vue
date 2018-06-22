<template>
    <div class="wrapper">
        <Icon type="ionic" :size="num"></Icon>
        <Icon type="arrow-up-a" :size="num"></Icon>
        <Icon type="arrow-right-a" :size="num"></Icon>
        <Icon type="arrow-down-a" :size="num"></Icon>
        <Icon type="arrow-left-a" :size="num"></Icon>

        <Button @click="handleModal">弹出</Button>

        <modalTable  :flag = "val"/>
    </div>
</template>

<script>
    import modalTable from "CMP/modalTable/index.vue";
    export default {
        name: 'icon',
        components:{
            modalTable
        },
        data() {
           return {
               num:32,
               val:false
           }
        },
        methods:{
            handleModal() {
                this.val = true
                console.log(this)
            }
        },
        created() {
            console.log(this)
        }
    }
</script>

<style scoped>
    .vue-icon {
        font-size: 32px; 
    }
</style>