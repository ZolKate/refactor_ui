<template>
  <v-app>
    <v-container>
      <Toast v-for="notify in notifies" 
        :key="notify.id" 
        :item="notify"
      />
    </v-container>
    <component :is="layout"/>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Toast from './components/UI/Toast.vue';
import LoadingLayout from './Layout/LoadingLayout.vue';
import NoLicenseLayout from './Layout/NoLicenseLayout.vue';
// import LoginLayout from './Layout/LoginLayout.vue';
import MainLayout from './Layout/MainLayout.vue';

export default {
  name: 'App',
  data: () => ({
    loading: true
  }),
  computed:{
    ...mapGetters({ valid: "getLicenseValid", notifies: "getNotifies" }),
    layout(){
      return this.loading ? 'LoadingLayout' : this.valid ? 'MainLayout' : 'NoLicenseLayout'
    }
  },
  methods: mapActions(["fetchLicense"]),
  async mounted() {
    await this.fetchLicense();
    this.loading = false;
  },
  components:{ NoLicenseLayout, LoadingLayout, MainLayout, Toast }
};
</script>
