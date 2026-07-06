<template>
  <div class="clients__container">
    <h1 class="text-4xl font-bold mb-4 text-amber-100">Clients</h1>
    <Marquee
      direction="left"
      :speed="120"
      :space="40"
      pause-on-hover
      class="bg-white py-4"
    >
      <!-- Add as many items as you want – more = smoother -->
      <img
        v-for="i in 12"
        :key="i"
        :src="`/clients/${String(i).padStart(2, '0')}.svg`"
        alt="Client"
        class="h-10 w-auto"
      />
    </Marquee>
  </div>
</template>

<script setup>
import Marquee from "~/components/Marquee.vue";
</script>
