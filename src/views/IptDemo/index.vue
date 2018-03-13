<template>
    <div class="wrapper">
        <Input v-model="value" placeholder="Enter something..." clearable style="width: 300px"/>
        <p class="txt">vue的双向绑定:v-model:<h2>{{value}}</h2></p>
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
        components: {
            Input
        }
    }
</script>
