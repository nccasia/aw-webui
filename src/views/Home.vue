<template lang="pug">
div
  b-input-group
    b-form-input(v-model="user_name",@keydown.native="keydown_handle")
    b-input-group-append
      b-button(variant='primary',@click="search_user()") Search
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      user_name: '',
    };
  },
  methods: {
    search_user() {
      if (this.user_name) {
        this.$router.push(`/activity/${this.user_name}`);
      }
    },
    keydown_handle(event) {
      if (event.which === 13) {
        this.search_user();
      }
    },
  },
};
</script>
