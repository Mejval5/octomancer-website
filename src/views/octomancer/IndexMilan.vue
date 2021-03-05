
<template>
  <v-expand-x-transition>
    <v-container
      class="pa-0 ma-0 fill-height"
      :style="get_height_dirty"
      fluid
    >
      <div
        class="rounded-0"
        style="overflow: hidden; height: 100%; width: 100%; max-width: 1600px; margin: auto; margin: auto; z-index: 1600; position:static;"
      >
        <div
          class="rounded-0"
          style="height: 100%;  width: 100%; overflow: hidden; "
        >
          <v-row
            class="align-center ma-0"
            justify="center"
            align="center"
            style=" height: 100%; width: 100%;"
          >
            <v-col
              class="pa-0"
              cols="12"
              style="display: block; height: 100%;"
            >
              <octo-main-menu
              :loadedBG="hideOverlay"
              />
            </v-col>
          </v-row>
        </div>
      </div>
      <v-overlay
        ref="overlay"
        :opacity="1"
        :value="!hideOverlay"
        style="position: absolute; z-index: 3000;"
        color="rgba(8,18,20,1)"
      >
        <v-container>
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              align-self="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
                class="mx-auto d-block"
              />
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="center"
          >
            <v-col>
              <base-body
                :text="loadingText"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-overlay>
    </v-container>
  </v-expand-x-transition>
</template>

<script>
  import messages from '@/plugins/funnyLoadingMessages.js'

  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {

    name: 'Octomancer',

    extends: View,

    props: {
      id: {
        type: String,
        default: 'octomancer',
      },
    },

    data: () => ({
      hideOverlay: false,
      loadingText: '',
    }),

    computed: {
      get_mobile_size () {
        if (this.$vuetify.breakpoint.smAndDown) {
          return 'width: 2000px;'
        } else if (this.$vuetify.breakpoint.mdAndUp && this.$vuetify.breakpoint.lgAndDown) {
          return 'width: 2560px;'
        } else {
          return 'width: 2560px;'
        }
      },
      get_height_dirty () {
        var height = '100vh'
        return 'max-height: ' + height + ';'
      },
      getSceneClass () {
        return this.showMainMenu ? 'scene' : 'scene'
      },
    },

    beforeMount () {
      const randomPick = Math.floor(messages.length * Math.random())
      this.loadingText = messages[randomPick]
    },

    mounted () {
      this.$nextTick(() => {
        this.hideOverlayFunc()
      })
    },

    methods: {
      async hideOverlayFunc () {
        const randomWait = (Math.random() + 1) * 200 + 800 * this.$vuetify.breakpoint.mdAndDown
        await new Promise(resolve => setTimeout(resolve, randomWait))
        this.hideOverlay = true
      },
    },

    metaInfo: { title: 'Octomancer' },
  }
  </script>

<style scoped>
@charset "utf-8";
/* CSS Document */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

body {background-color:#e0e0e0;}
body {background-color:rgba(8,18,20,1);color: white;font-family: 'Quicksand', sans-serif;}

.parent {
position: relative;
z-index: 997;
min-width: 800px;
width: 150vw;
top: 50%;
margin-left: 50%;
transform: translate(-50%, -50%);
}

.child {
width:100%;
height:auto;
z-index: 998;
pointer-events: none;
}

.scene {
width:100%;
height:100%;
}

/*.border {
width: 100%;
height: 100%;
background-color:#e0e0e0;
    box-shadow: 0 0 0 10vw black;
}*/

.mybg {
    position: absolute;
    display: block;
    left: 0px;
    top: 0px;
    transform: translate(0px, 0px);
}
.willMove {
  transition: all 12s ease-in-out;
  will-change: transform;
}

.bg20 {
outline: 1000px solid rgba(8,18,20,1);
}

.fixedMenu{
width: 100%;
height: 200px;
background-color: #e0e0e0;
z-index: 999;
}
.menu1
{
width: 100%;
text-align: center;
}
.menuItemName
{
font-size: 4vh;
font-weight: 700;
position: relative;
z-index: 999!important;
pointer-events: auto;
opacity: 1;
text-shadow: 0 0 1vh rgba(255,255,255,0.0);
}

.menu1 p {
font-size: 4vh;
padding-top: 23%;
font-weight: 700;
position: relative;
z-index: 999!important;
pointer-events: auto;
}

a {
text-decoration: none;
cursor: pointer;
color: inherit;
}
.elevation-n1 {
  box-shadow: inset 0px 0px 100px 100px black !important;
}
.expansionPanel {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 999!important;
  pointer-events: auto;
}

.theme--dark.v-expansion-panels .v-expansion-panel {
  background-color: transparent;
}

.v-application--is-ltr .v-expansion-panel-header {
  text-align: center;
  font-size: 4vh;
  font-weight: 700;
  position: relative;
  width: fit-content;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999!important;
  pointer-events: auto;
  opacity: 1;
  text-shadow: 0 0 1vh rgba(255,255,255,0.0);
}
.buttonClass {
  font-size: 2vh;
}
.v-expansion-panel-content {
  background-color: transparent;
  position: relative;
  top: 0px !important;
  left: 0px !important;
}

.testing > * {
  padding: 0 !important;
}

.v-expansion-panel::before {
  box-shadow: 0 0 0 0;
}

.hideScroll {
  background-color: transparent;
  border-radius: 4px;
}

.hideScroll ::-webkit-scrollbar {
  width: 0.3vw;
  position: relative !important;
}
.hideScroll ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.3vw grey;
  border-radius: 4px;
}
.hideScroll ::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.2vw grey;
  border-radius: 4px;
}
.center {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
</style>
