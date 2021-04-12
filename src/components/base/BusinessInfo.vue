<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        :text="text"
        color="primary"
        pace="6"
      />

      <base-business-contact
        dense
        :business="business"
      />
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessInfo',

    props: {
      dark: Boolean,
      text: String,
      title: String,
    },

    data: () => ({
      business: [
        {
          icon: 'mdi-facebook',
          text: '#OctomancerGame',
          html: 'https://www.facebook.com/OctomancerGame',
          iconColor: '#218df0',
        },
        {
          icon: 'mdi-instagram',
          text: '#Octomancer.Game',
          html: 'https://www.instagram.com/octomancer.game/',
          iconColor: '#f66c4a',
        },
        {
          icon: 'mdi-twitter',
          text: '@Octomancer',
          html: 'https://twitter.com/octomancer',
          iconColor: '#00aced',
        },
      ],
    }),
  }
</script>
