<template>
  <v-app>
    <v-container class="toast__container">
      <Toast v-for="notify in notifies" 
        :key="notify.id" 
        :item="notify"
      />
    </v-container>
    <!-- <transition name="layout" :duration="2000"/> -->
    <component :is="layout"/>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Toast from './components/UI/Toast.vue';
import LoadingLayout from './Layout/LoadingLayout.vue';
import NoLicenseLayout from './Layout/NoLicenseLayout.vue';
import LoginLayout from './Layout/LoginLayout.vue';
import MainLayout from './Layout/MainLayout.vue';

export default {
  name: 'App',
  data: () => ({
    loading: true
  }),
  computed:{
    ...mapGetters({ valid: "getLicenseValid", notifies: "getNotifies", userInfo: "getUser" }),
    user(){
      return Object.keys(this.userInfo).length !== 0
    },
    layout(){
      return this.loading ? 'LoadingLayout' : this.valid ? this.user ? 'MainLayout' : 'LoginLayout' : 'NoLicenseLayout'
    }
  },
  methods: mapActions(["fetchLicense"]),
  async mounted() {
    await this.fetchLicense();
    this.loading = false;
  },
  components:{ NoLicenseLayout, LoadingLayout, MainLayout, LoginLayout, Toast }
};
</script>


<style>
  .toast__container{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 344px;
    padding-top: 64px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
  }
</style>