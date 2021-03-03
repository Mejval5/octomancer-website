<template>
  <base-contact-form
    ref="contactForm"
  />
</template>

<script>
  export default {
    methods: {
      resetForm () {
        this.$refs.contactForm.reset()
      },
    },
  }
</script>

<style>

</style>
