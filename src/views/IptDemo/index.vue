<template>
    <div class="wrapper">
        <Input v-model="value" ref="input" placeholder="Enter something..." clearable style="width: 300px"/>
        <p class="txt">vue的双向绑定:v-model:<h2>{{value}}</h2></p>
        <button @click="this.getVal" ref="button"> 获取表单值</button>
    </div>
</template>

<script>
    import {Input} from 'iview'
    export default {
        name: 'ipt',
        data () {
            return {
                value: ''
            }
        },
        created:function () {
            console.log(this)
        },
        methods:{
            getVal:function () {
                console.log(this.value)
            }
        },
        components: {
            Input
        }
    }
</script>
