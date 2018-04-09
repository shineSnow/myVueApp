<template>
    <div>
        <h2>简易加法计算器</h2>
        <Button type="success" @click="deHandle({de:10})">每次-10</Button> <span>{{count}}</span>
        <Button type="warning" @click="addHandle">1s后加15</Button>
        <p>{{num2}}</p>
    </div>
</template>
<script>
    import {mapState, mapGetters, mapActions,mapMutations} from 'vuex'
    export default {

        created() {
            console.log(this)
        },
        computed: {
            count() {
                return this.$store.state.count
            },
            //辅助函数的用法，直接传入数组
            //...mapState(['count'])
            // 计算属性的辅助函数，key值对应的计算属性的值，value对应store里面的计算属性值
            ...mapGetters({
                num2:'filterCount'
            })
//            num2() {
//                return this.$store.getters.filterCount
//            }
        },
        methods: {
            ...mapActions({
                addHandle: 'addAction'
            }),
            // 辅助函数不能直接传值，可以在方法体内传值
            ...mapMutations({
                deHandle: 'deIncrement'
            })
//            addHandle() {
//                this.$store.commit('addIncrement',{n:15})
//                this.$store.dispatch('addAction')
//            },
//            deHandle(){
//                this.$store.commit('deIncrement')
//                //mutations传递参数
//                this.$store.commit({
//                    type: 'deIncrement',
//                    de:10
//                })
//                this,$store.dispatch('testAction', {haha:'hahah'})
//            },
        }
    }
</script>
