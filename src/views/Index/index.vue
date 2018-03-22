<template>
    <div class="wrappers">
        <h2>我是index page ,可以在线更改live-reloadHMR</h2>
        <p>{{msg}}</p>
        <ul>
            <li class='item' v-for="good in goodLists">
                <div class="good-img">
                    <img :src="good.imageUrlFor220" alt=""/>
                </div>
                <div>
                    <h3>{{good.title}}</h3>
                    <p>价格：{{good.actualCurrentPrice}}元---市场价：{{good.marketPrice}}</p>
                </div>
            </li>
        </ul>
        <Button v-on:click="getGoods()" type="success" long>加载更多</Button>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                goodLists: {},
                msg: 'false',
                page:0
            }
        },
        created() {
            this.getGoods();
            this.forFresh();
            console.log('created')
        },
        methods: {
            async getGoods() {
                this.page++
                const {data} = await axios.post('/homeHotGoods.html?pageSize=16&pageNo='+this.page)
                console.log(data)
                let list = data.body.goodsList;
                this.goodLists = list;
                console.log(list)
            },
            async forFresh() {
                let secs = new Date().getTime();
                const {data} = await axios.get('/activity/detail/getWapActivityShowZone/30945/15051797758950.shtml?t='+secs)
                console.log(data)
            }
        }
    }
</script>

<style scoped>
    .item{
        display: flex;
        align-items: center;
    }
    .good-img img{
        /*width:70px;*/
    }
</style>