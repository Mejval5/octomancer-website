<template>
  <v-row
    align="center"
    justify="center"
    dense
  >
    <v-col
      v-for="(item, i) in tags"
      :key="i"
      cols="auto"
    >
      <octo-list-item
        :text="item.text"
        :icon="item.icon"
        :iconColor="item.iconColor"
        color="#48667466"
        text-color="primary"
        :loaded="loaded"
      />
    </v-col>
  </v-row>
</template>

<script>
  export default {
    props: {
      loaded: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        tags: [
          { icon: 'mdi-google-play', text: 'Available on Android', iconColor: 'teal lighten-1' },
          { icon: 'mdi-unity', text: 'Made with Unity', iconColor: 'grey darken-2' },
          { icon: 'mdi-peace', text: 'Indie developers', iconColor: 'green' },
          { icon: 'mdi-account-group', text: 'Multiplayer', iconColor: 'blue darken-1' },
          { icon: 'mdi-progress-wrench', text: 'Closed beta', iconColor: 'red lighten-3' },
          { icon: 'mdi-flag-variant-outline', text: 'First release in June', iconColor: 'orange' },
        ],
      }
    },
  }
</script>
