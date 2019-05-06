<template>
  <div>detail</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getData() {
      const { id } = this.$route.params;
      this.$http.getProductDetails(id).then(resp => {
        console.log(resp);
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getData();
    });
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.getData();
  }
};
</script>

<style>
</style>
