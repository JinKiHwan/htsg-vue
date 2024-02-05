<template>
  <HeaderComp />
  <MainComp :isDesktop="isDesktop" />
  <CharacterComp :isDesktop="isDesktop" />
  <GalleryComp :isDesktop="isDesktop" />
  <FooterComp :isDesktop="isDesktop" />
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import CharacterComp from './components/CharacterComp.vue';
import GalleryComp from './components/GalleryComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  data() {
    return {
      isDesktop: window.innerWidth > 1024,
    };
  },
  components: {
    HeaderComp,
    MainComp,
    CharacterComp,
    GalleryComp,
    FooterComp,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
