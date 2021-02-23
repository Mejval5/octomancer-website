<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
      overlay-color="#081214"
    >
      <v-card
      rounded
      class="popUp"
      >
        <v-card-title
        class="primaryText"
        >
          <span
          :class="$vuetify.breakpoint.smAndDown ? &quot;mx-auto headline&quot; : &quot;headline&quot;"
          >Sign up for Closed Beta</span>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            icon
            tile
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  ref="textField"
                  v-model="email"
                  :rules="emailRulesProp"
                  :class="$vuetify.breakpoint.smAndDown ? &quot;centered-input mx-0&quot; : &quot;&quot;"
                  dense
                  label="Email"
                  required
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="linkTextBright"
            large
            text
            @click="save_email"
          >
            Sign Up
          </v-btn>
          <v-spacer class="d-block d-md-none"></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <octo-email-saved
    ref="snack01"
    timeout="3000"
    />
  </v-row>
</template>

<script>
  export default {
    props: {
      updateSnack: Boolean,
      text: String,
      timeout: String,
    },
    data: () => ({
      dialog: false,
      email: '',
      emailRules: [
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,5})+$/.test(v) || 'E-mail must be valid',
      ],
      emailRulesProp: [],
    }),
    methods: {
      openPopup () {
        this.dialog = true
        this.emailRulesProp = []
      },
      test_email (mail) {
        const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,5})+$/
        return re.test(mail)
      },
      save_email () {
        this.emailRulesProp = this.emailRules
        if (this.test_email(this.email)) {
          this.axios.post('https://us-central1-website-raccoon.cloudfunctions.net/uploadEmail?text=' + this.email, this.email,
                          { headers: { 'Access-Control-Allow-Origin': '*' } }).catch()
          // // this captures and saves the email for later use
          // const Http = new XMLHttpRequest()
          // const url = 'https://us-central1-website-raccoon.cloudfunctions.net/uploadMail?text=' + this.email
          // Http.open('GET', url)
          // Http.send()
          this.email = ''
          this.dialog = false
          this.emailRulesProp = []
          this.$refs.snack01.openDialog()
        }
      },
    },
  }
</script>

<style lang="scss">
.centered-input.v-text-field .v-label{
  left: 50% !important;
  transform: translateX(-50%);
  transform-origin: top 50%;
  &.v-label--active
  {
    transform: translateY(-18px) scale(.75) translateX(-50%);
  }
}
.centered-input.v-text-field input {
      text-align: center;
}
// Disgusting legend hack to center it ()
.centered-input.v-text-field legend {
      margin-left: calc(50% - 39px/2 - 2px);
}
</style>
