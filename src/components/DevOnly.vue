<template lang="pug">
div.mt-2(v-if="show", style="border: 1px solid #aaa; border-radius: 5px")
  b-alert.m-0.px-3.py-2.d-flex.align-items-center.justify-content-between(v-if="note", variant="warning" show)
    span This will not appear in the production build
      | #[span(v-if="reason")  ({{ reason }})]
      | #[template(v-else) .]
    b-btn.hide-devonly(@click="() => { hide = true }", variant="outline-secondary", size="sm")
      | Hide
  slot
</template>

<script>
export default {
  props: {
    note: {
      type: Boolean,
      default: true,
    },
    reason: {
      type: String,
      default: null,
    },
  },
  data: () => {
    return { hide: false };
  },
  computed: {
    show() {
      return !PRODUCTION && !this.hide;
    },
  },
};
</script>
