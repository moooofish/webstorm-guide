<template></template>

<script>
export default {
  name: "Layout",
  methods: {
    scrollTo(selector) {
      if (!selector || selector === "#") return
      const el = document.querySelector(decodeURIComponent(selector))
      if (el && el.offsetTop) {
        window.scrollTo(0, el.offsetTop)
      }
    },
  },
  mounted() {
    this.scrollTo(location.hash)
  },
}
</script>

<style scoped></style>
