<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <q-header elevated class="text-center" >
      <q-badge color="{1:orange}" text-color="{2:black}"  label="Asistencias" />
    </q-header>
    <q-page-container>

      <q-tabs
        v-model="tab"
        class="text-primary"
      >
        <q-route-tab name="devices" icon="devices" label="Dispositivos" to="/assist/devices" />
        <q-route-tab name="report" icon="show_chart" label="Reporte" to="/assist" />
        <q-route-tab name="person" icon="person_add" label="Colaboradores" to="/assist/staff" />
        <!-- <q-route-tab name="excuse" icon="work" label="Justificaciones" to="excuses"/> -->

      </q-tabs>

      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref, computed, initCustomFormatter } from 'vue'
import { api } from 'src/boot/axios';
import { useQuasar } from 'quasar';
import QuotesArchive from 'src/components/Clientes/QuotesArchive.vue'
const $q = useQuasar();

const tab = ref('report')


</script>
