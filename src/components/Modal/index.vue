<template>
<div class="modal-backdrop"> <div class="modal"> <div class="modal-header"> <slot name="header"> <h2>这是Modal弹框的标题</h2> <button type="button" class="btn-close" @click="close">x</button> </slot> </div> <div class="modal-body"> <slot name="body"> 这是Modal弹框的主体 </slot> </div> <div class="modal-footer"> <slot name="footer"> 这是Modal弹框的脚部 <button type="button" class="btn-green" @click="close">关闭</button> </slot> </div> </div> </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
</style>