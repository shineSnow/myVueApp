<template>
    <div class="wrap">
        <Modal
                v-model="modal1"
                title="Common Modal dialog box title"
                @on-ok="ok"
                @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'modalTable',
        data() {
            return {
                modal1: this.flag
            }
        },
        props:['flag'],
        methods: {
            ok() {
                this.$Message.info('Clicked ok');
            },
            cancel() {
                this.$Message.info('Clicked cancel');
            }
        },
        watch:{
            flag:function (newvval) {
                console.log(newvval)
            }
        }
    }
</script>

<style scoped>

</style>