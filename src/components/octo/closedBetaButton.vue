<template>
  <div class="text-center">
    <v-btn
      elevation="0"
      outlined
      large
      v-bind="$attrs"
      color="yellow lighten-1"
      href="https://raccoon5.itch.io/octomancer"
      target="_blank"
      v-on="$listeners"
    >
      TRY THE GAME!
    </v-btn>
      <v-col class="text-center orange--text">
      Google Play version has been taken down due to lack of interest. <br>
      Play the game on itch.io instead!
      </v-col>

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
