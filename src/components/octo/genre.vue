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
        :icon-color="item.iconColor"
        color="transparent"
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
          { icon: 'mdi-sword-cross', iconColor: 'yellow lighten-3', text: 'Action' },
          { icon: 'mdi-gamepad-square', iconColor: 'red lighten-1', text: 'Arcade' },
          { icon: 'mdi-flower', iconColor: 'green', text: 'Casual' },
          { icon: 'mdi-run-fast', iconColor: 'blue lighten-2', text: 'Platformer' },
        ],
      }
    },
  }
</script>
