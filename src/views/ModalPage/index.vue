<template>
    <div class="wrapper">
        <Button  class="btn" @click="showModal">点我出点弹框</Button>

        <Modal v-show="isModalVisible" @close="closeModal">

        </Modal>

    </div>
</template>
<script>
    import Modal from 'CMP/Modal/index.vue'

    export default {
        name: 'ModalPage',
        components: {
            Modal,
        },
        data() {
            return {
                isModalVisible:false,
            }
        },
        methods:{
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        }
    }
</script>
<style scoped>

</style>

