<template>
  <v-hover
  v-slot="{ hover }"
  >
    <a
    href="https://www.patreon.com/octomancer?fan_landing=true"
    target="_blank"
    class="text-decoration-none"
    >
      <div
      :class="hover && $vuetify.breakpoint.mdAndUp ? 'trans big' : 'trans'"
      >
        <v-row
        align="center"
        justify="center"
        >
          <v-col>
            <v-img
            :src="require(`@/assets/PR materials/patreon.jpg`)"
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
            mobileSize="subtitle-1"
            class="text-center text-decoration-none"
            title="Consider supporting us on Patreon!"
            />
            <base-heading
            size="display-1"
            mobileSize="title"
            class="text-center"
            title=""
            />
          </v-col>
        </v-row>
      </div>
    </a>
  </v-hover>
</template>

<script>
  export default {

  }
</script>

<style>
.trans {
  transition: all 0.3s ease-in-out;
}
.big {
  transform: scale(1.2);
}
</style>
