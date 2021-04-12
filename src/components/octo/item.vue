<template>
  <v-row
    no-gutters
    class="py-2 startContainer"
    ref="row01"
  >
    <v-col
      cols="2"
      sm="1"
      class="text-center"
    >
      <v-icon
      :color="iconColor"
      >
        {{ icon }}
      </v-icon>
    </v-col>
    <v-col align-self="center">
      <base-subtitle
        :title="text"
        :html="html"
        class="primaryText"
        size="subtitle-2"
        space="0"
      />
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'Item',
    props: {
      text: String,
      html: String,
      iconColor: {
        type: String,
        default: 'primary',
      },
      icon: {
        type: String,
        default: 'mdi-heart',
      },
      loaded: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        animRunning: false,
      }
    },
    watch: {
      loaded: function (oldVal, newVal) {
        this.AnimateItem()
      },
    },
    mounted () {
      if (this.loaded) {
        this.AnimateItem()
      }
    },
    methods: {
      async AnimateItem () {
        if (this.animRunning) {
          return
        }
        this.animRunning = true
        const item = await this.$refs.row01
        item.classList.remove('startContainer')
        item.classList.add('endContainer')
        await new Promise(resolve => setTimeout(resolve, 2000))
        item.classList.remove('endContainer')
        this.animRunning = false
      },
    },
  }
</script>

<style>
.startContainer {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
}
.endContainer {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  transition: all 2s ease-out;
}
</style>
