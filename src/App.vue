<template>
  <HeaderComp />
  <MainComp :isDesktop="isDesktop" />
  <CharacterComp :isDesktop="isDesktop" />
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import CharacterComp from './components/CharacterComp.vue';

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
  },
};
</script>

<style lang="scss">
#app {
}
</style>
