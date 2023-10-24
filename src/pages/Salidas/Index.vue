<template>
  <q-page padding>
    <q-card class="my-card">
      <q-card-section>
        <q-table
          title="Salidas Sucursal"
          :columns="table.cols"
          row-key="name"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { api } from 'src/boot/axios';

let table = ref({
  // vcolumns: ['client', 'celphone', 'price', 'status'],
  cols: [
    { name: 'Salida', label: 'Salida', field: 'id' },
    { name: 'Sucursal', label: 'Sucursal', field: 'nom_cli' },
    { name: 'Referencia', label: 'Referencia', field: 'ref' }
  ],
  // filter: "",
});

</script>
