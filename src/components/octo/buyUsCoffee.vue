<template>
  <div>
    <v-row
      align="center"
      justify="center"
    >
      <v-col>
        <v-img
          :src="require(`@/assets/PR materials/QRflowers.jpg`)"
          class="rounded mx-auto"
          width="40vh"
          eager
        />
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col>
        <base-heading
          size="subtitle-1"
          mobile-size="subtitle-1"
          class="text-center linkTextBright"
          title="5 € - Buy us a cup of coffee"
        />
        <base-heading
          size="display-1"
          mobile-size="title"
          class="text-center"
          title=""
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>
