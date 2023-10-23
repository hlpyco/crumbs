<template>
  <button v-bind="$props">Example</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VeeButton',
});
</script>
