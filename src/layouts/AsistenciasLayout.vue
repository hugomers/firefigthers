<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <q-header elevated class="text-center" >
      <q-badge color="{1:orange}" text-color="{2:black}"  label="Asistencias" />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>

</script>
