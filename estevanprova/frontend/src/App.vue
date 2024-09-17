<template>
    <PaginaInicial/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PaginaInicial from './components/PaginaInicial.vue';

@Options({
  components: {
    PaginaInicial,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
