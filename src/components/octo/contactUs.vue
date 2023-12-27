<template>
  <v-row
      align-content="center"
      justify="center"
      >
    <v-col
      cols="12"
      md="6"
    >
      <base-business-info
        title="FOLLOW US ON SOCIAL MEDIA"
      />
    </v-col>
  </v-row>
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
