<template>
  <div id="app">
    <vee-button>works</vee-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VeeButton from '../../components/VeeButton/index';

export default defineComponent({
  name: 'App',
  components: { VeeButton },
});
</script>
