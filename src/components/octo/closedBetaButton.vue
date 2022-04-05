<template>
  <div>
    <v-btn
      elevation="0"
      outlined
      large
      v-bind="$attrs"
      color="yellow lighten-1"
      href="https://play.google.com/store/apps/details?id=com.brotagonists.octomancer"
      target="_blank"
      v-on="$listeners"
    >
      GET THE GAME!
    </v-btn>

    <octo-sign-up-for-beta
      ref="dialogSignUp"
      style="position: absolute;"
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
