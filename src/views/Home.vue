<template>
  <app-layout bug-url="https://github.com/jabez007/cryptotron/issues">
    <vs-button
      slot="navbarTitle"
      type="flat"
      color="dark"
      text-color="rgb(245, 235, 225)"
      :to="{ name: 'cryptotron-home' }"
    >
      CryptoTron
    </vs-button>
    <span slot="sidebarItems">
      <!--vs-sidebar-item
        index="1"
        icon="home"
        :to="{ name: 'cryptotron-home' }"
      >
        About
      </vs-sidebar-item-->
      <vs-sidebar-item
        index="2"
        icon="new_releases"
        :to="{ name: 'cryptotron-desideratum' }"
      >
        Kerckhoffs's Desideratum
      </vs-sidebar-item>
      <vs-sidebar-item
        index="3"
        icon="build"
        :to="{ name: 'cryptotron-builder' }"
      >
        Create Your Own
      </vs-sidebar-item>
      <vs-divider icon="private_connectivity" position="left">
        Ciphers
      </vs-divider>
      <vs-sidebar-group title="Substitutions">
        <vs-sidebar-item
          index="4.1"
          icon="find_replace"
          :to="{ name: 'cryptotron-substitution' }"
        >
          Simple
        </vs-sidebar-item>
        <vs-sidebar-item
          index="4.2"
          icon="plus_one"
          :to="{ name: 'cryptotron-caesar' }"
        >
          Caesar
        </vs-sidebar-item>
        <vs-sidebar-item
          index="4.3"
          icon="exposure_plus_2"
          :to="{ name: 'cryptotron-affine' }"
        >
          Affine
        </vs-sidebar-item>
        <!--vs-sidebar-item
          index="4.4"
          icon="hill"
          :to="{ name: 'cryptotron-hill' }"
        >
          Hill
        </vs-sidebar-item-->
      </vs-sidebar-group>
      <vs-sidebar-group title="Transposition">
        <vs-sidebar-item
          index="5.1"
          icon="fence"
          :to="{ name: 'cryptotron-railfence' }"
        >
          Rail-Fence
        </vs-sidebar-item>
        <vs-sidebar-item
          index="5.2"
          icon="swap_horiz"
          :to="{ name: 'cryptotron-columnar-transposition' }"
        >
          Columnar
        </vs-sidebar-item>
      </vs-sidebar-group>
    </span>
  </app-layout>
</template>

<script>
export default {
  name: 'CryptoTron',
  components: {
    AppLayout: () => import('../components/AppLayout.vue'),
  },
};
</script>

<style>
html,
body {
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none; /* Chrome */
}
</style>
