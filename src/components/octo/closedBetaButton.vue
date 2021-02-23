<template>
<div>
  <v-btn
  elevation="0"
  outlined
  large
  v-on="$listeners"
  v-bind="$attrs"
  color="yellow lighten-1"
  @click.stop="openDialog"
  >
    Sign up for closed beta!
  </v-btn>

  <octo-sign-up-for-beta
  style="position: absolute;"
  ref="dialogSignUp"
  />
</div>
</template>

<script>
  export default {
    methods: {
      openDialog () {
        this.$refs.dialogSignUp.openPopup()
      },
    },
  }
</script>

<style>

</style>
