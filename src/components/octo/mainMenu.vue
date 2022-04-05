
<template>
  <v-col
    v-resize="onResize"
    class="pa-0"
    cols="12"
    style="display: block; height: 100%;"
  >
    <div
      class="parent"
      :style="get_mobile_size"
    >
      <div class="child">
        <div
          id="scene"
          data-relative-input="true"
          class="scene"
        >
          <div
            id="bg1"
            data-depth="0.30"
            style="position:relative !important;"
          >
            <img
              :src="require('@/assets/milan/1.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg2"
            data-depth="0.30"
          >
            <img
              :src="require('@/assets/milan/2.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg3"
            data-depth="0.33"
          >
            <img
              :src="require('@/assets/milan/3.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg4"
            data-depth="0.36"
          >
            <img
              :src="require('@/assets/milan/4.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg5"
            data-depth="0.39"
          >
            <img
              :src="require('@/assets/milan/5.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg6"
            data-depth="0.42"
          >
            <img
              :src="require('@/assets/milan/6.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg7"
            data-depth="0.45"
          >
            <img
              :src="require('@/assets/milan/7.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg8"
            data-depth="0.48"
          >
            <img
              :src="require('@/assets/milan/8.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg9"
            data-depth="0.51"
          >
            <img
              :src="require('@/assets/milan/9.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg10"
            data-depth="0.54"
          >
            <img
              :src="require('@/assets/milan/10.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg11"
            data-depth="0.57"
          >
            <img
              :src="require('@/assets/milan/11.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg12"
            data-depth="0.60"
          >
            <img
              :src="require('@/assets/milan/12.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg13"
            data-depth="0.63"
          >
            <img
              :src="require('@/assets/milan/13.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg14"
            data-depth="0.66"
          >
            <img
              :src="require('@/assets/milan/14.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg15"
            data-depth="0.69"
          >
            <img
              :src="require('@/assets/milan/15.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg16"
            data-depth="0.72"
          >
            <img
              :src="require('@/assets/milan/16.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg17"
            data-depth="0.75"
          >
            <img
              :src="require('@/assets/milan/17.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg18"
            data-depth="0.78"
          >
            <img
              :src="require('@/assets/milan/18.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg19"
            data-depth="0.81"
          >
            <img
              :src="require('@/assets/milan/19.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <!--<div data-depth="0.3" class="border"></div>-->
          <div
            id="bg20"
            data-depth="0.84"
          >
            <img
              :src="require('@/assets/milan/20Overlay.png')"
              width="120%"
              style="margin-left:-10%;margin-top:-10%;"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg21"
            data-depth="0.84"
            class="bg20"
          >
            <img
              :src="require('@/assets/milan/20.png')"
              width="100%"
              class="gg"
              eager
            >
          </div>
          <div
            id="bg22"
            data-depth="0.84"
            class="bgLight"
          >
            <img
              :src="require('@/assets/milan/Light.png')"
              width="100%"
              class="gg gg1"
              eager
            >
          </div>
          <div
            v-show="false"
            id="bg23"
            data-depth="0.84"
            class="bgLight mybg"
            style="height: 100%; width: 100%;"
          >
            <v-sheet
              height="100%"
              width="100%"
              color="rgba(8,18,20,0.9)"
            />
          </div>
          <!--    <div
            id="bg23"
            class="menu1 primaryText"
            style="opacity: 1; text-shadow: 0 0 1vh rgba(255,255,255,0.0);"
          >
            <p><a>OCTOMANCER</a> <br><br> <a>BROTAGONISTS™</a> <br><br> <a>SUPPORT US</a> <br><br> <a>CONTACT</a></p>
          </div> -->
        </div>
      </div>
    </div>
    <v-fade-transition
      origin="right center 0"
    >
      <v-card
        v-show="this.pages.mainMenu.val"
        class="overflow-y-auto elevation-0 text-center expansionPanel hideScroll pa-4 rounded"
        style="width: fit-content;"
        max-height="400"
      >
        <v-btn
          elevation="0"
          class="my-2 buttonClass"
          text
          plain
          :ripple="false"
          @click="goToPage('octomancerPage')"
        >
          OCTOMANCER
        </v-btn> <br>
        <v-btn
          elevation="0"
          class="my-2 buttonClass"
          text
          plain
          :ripple="false"
          @click="goToPage('brotagonistsPage')"
        >
          BROTAGONISTS™
        </v-btn> <br>
        <v-btn
          elevation="0"
          class="my-2 buttonClass"
          text
          plain
          :ripple="false"
          @click="goToPage('supportUsPage')"
        >
          SUPPORT US
        </v-btn> <br>
        <v-btn
          elevation="0"
          class="my-2 buttonClass"
          text
          plain
          :ripple="false"
          @click="goToPage('contactPage')"
        >
          CONTACT
        </v-btn>
      </v-card>
    </v-fade-transition>

    <v-overlay
      class="contain"
      :value="!this.pages.mainMenu.val"
      opacity="0.9"
      color="#090909"
    >
      <octo-page
        :visible="Boolean(this.pages.octomancerPage.val)"
      >
        <octo-octomancer-inner
          :loaded-b-g="loadedBG"
          @clicked="goToPage('mainMenu')"
        />
      </octo-page>

      <octo-page
        :visible="Boolean(this.pages.brotagonistsPage.val)"
      >
        <octo-brotagonists-inner
          @clicked="goToPage('mainMenu')"
        />
      </octo-page>

      <octo-page
        :visible="Boolean(this.pages.supportUsPage.val)"
      >
        <octo-support-us-inner
          @clicked="goToPage('mainMenu')"
        />
      </octo-page>

      <octo-page
        :visible="this.pages.contactPage.val"
      >
        <octo-contact-inner
          @clicked="goToPage('mainMenu')"
        />
      </octo-page>
    </v-overlay>
  </v-col>
</template>

<script>
  import Parallax from '@/plugins/parallax.js'
  import DanParallax from '@/plugins/danparallax.js'

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
      loadedBG: Boolean,
    },

    data: () => ({
      pages: {
        mainMenu: { val: true, name: 'Octomancer site', route: '/' },
        octomancerPage: { val: false, name: 'Octomancer', route: '/octomancer' },
        brotagonistsPage: { val: false, name: 'Brotagonists', route: '/brotagonists' },
        supportUsPage: { val: false, name: 'Support Us', route: '/supportUs' },
        contactPage: { val: false, name: 'Contact', route: '/contact' },
      },
      parallaxInstance: {},
    }),

    computed: {
      CurrentPage () {
        for (var key in this.pages) {
          if (this.pages[key].val) {
            return key
          }
        }
        console.log('bug')
        return 'wtf'
      },
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
    },

    watch: {
      showMainMenu: function () {
        this.parallaxInstance.methods.pause = !this.showMainMenu
      },
      $route (to, from) {
        this.UpdatePage(this.$route.meta.pageName)
      },
    },

    beforeMount () {
      this.UpdatePage(this.$route.meta.pageName)
    },
    mounted () {
      var scene = document.getElementById('scene')
      // this.parallaxInstance = new Parallax(scene)
      this.$nextTick(() => {
        this.show_image()
      })
    },

    created () {
      window.addEventListener('beforeunload', this.stop_anim)
    },

    beforeDestroy () {
      this.stop_anim()
    },

    methods: {
      goToPage (page) {
        if (this.$route.fullPath !== this.pages[page].route) {
          this.$router.push(this.pages[page].route)
        }
      },
      UpdatePage (page) {
        if (Object.keys(this.pages).indexOf(page) > -1) {
          for (var key in this.pages) {
            if (key === page) {
              this.pages[key].val = true
              continue
            }
            this.pages[key].val = false
          }
        }
      },
      onScroll () {},
      stop_anim () {
        try {
          this.parallaxInstance.methods.stop = true
        } catch {}
        window.removeEventListener('beforeunload', this.stop_anim)
      },
      async show_image () {
        this.parallaxInstance = await new DanParallax()
        this.updateParallax()
        this.parallaxInstance.methods.run(this.$vuetify.breakpoint.lgAndUp)
      },
      onResize (event) {
        try {
          this.updateParallax()
        } catch {}
      },
      updateParallax () {
        this.parallaxInstance.methods.pause = this.$vuetify.breakpoint.mdAndDown || !this.showMainMenu
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

.contain >>> .v-overlay__content {
  height: inherit !important;
  width: inherit !important;
}

.contain {
  height: 100%;
  width: 100%;
  z-index: 4500 !important;
  position: absolute;
}

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
opacity: 1;
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
.v-btn__content {
  opacity: 1;
}
.buttonClass {
  font-size: max(min(max(3vh, 3vw), 25px),15px);
  opacity: 1 !important;
}
.buttonClass .span {
  font-size: 2vh;
  opacity: 1 !important;
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
