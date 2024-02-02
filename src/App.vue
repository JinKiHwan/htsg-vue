<template>
  <HeaderComp />
  <MainComp />
  <CharacterComp />
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import CharacterComp from './components/CharacterComp.vue';

export default {
  name: 'App',
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
