<template>
    <div class="wrap">
        <button v-on:click="incrementCounter">{{counter}}</button>
    </div>
</template>

<script>
    export default {
        name: 'ButtonCounter',
        data:function () {
            return {
                counter:0
            }
        },
        methods:{
            incrementCounter: function () {
                this.counter += 1
                this.$emit('increment')
            }
        }
    }
</script>

<style scoped>
    .wrap{
        display: inline-block;
    }
    button{
        width:50px;
        display: inline;
    }

</style>