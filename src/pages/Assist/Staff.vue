<template>
  <q-page padding>
    <div> <q-btn color="primary" outline icon="sync"  label="Sincronizar" @click="updsert" /></div>
    <q-separator spaced inset vertical dark />
    <div class="row">
      <q-table
      title="Staff"
      :rows="monday"
      :columns="table.columns"
      row-key="name"
      class="col"
    />
    <q-separator spaced inset vertical dark />
    <div class="col">
      <q-table
      title="Faltantes"
      :rows="faltantes"
      :columns="table.columns"
      row-key="name"

    />

    <q-separator spaced inset vertical dark />

    <q-table
      title="POR ACTUALIZAR"
      :rows="actualizar"
      :columns="table.columns"
      row-key="name"

    />
    </div>

    </div>

    


  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import dayjs from 'dayjs';
const $q = useQuasar();
const $router = useRouter();

const monday = ref([]);
const faltantes = ref([]);
const actualizar = ref([])

const table = ref({
  columns:[
    {name:'Nombre', label:'Nombre', align:'left', field:row => row.complete_name},
    {name:'rc', label:'Id Checador', align:'center', field:row => row.id_rc},
    // {name:'Sucursal', label:'Sucursal', align:'left', field:row => row.stores.name},
    // {name:'Position', label:'Puesto', align:'left', field:row => row.position.name},
    {name:'Ingreso', label:'Ingreso', align:'left', field:row => row.ingress},
    {name:'activo', label:'Status', align:'center', field:row => row.acitve},
  ]
})

// const alta = computed(() => monday.value.filter(m => mysql.value.some(e => e.id_rc == m.id_rc)));
// const faltantes = computed(() => monday.value.filter(m => mysql.value.every(e => e.id_rc != m.id_rc)));




const init = async() => {
  $q.loading.show({message:'Obteniendo Datos :)'})
  const resp = await api.get('/staff')
  if (resp.status != 200) {
    console.log(resp.data)
  } else {
    console.log(resp.data)
    $q.loading.hide();
    monday.value = resp.data.usermon
    faltantes.value = resp.data.Insertados
    actualizar.value = resp.data.Actualizados

  }
}

const updsert = async() => {
  $q.loading.show({message:'Actualizando Personal'});
  const resp = await api.get('/staff/staffReply')
  if (resp.status != 200) {
    console.log(resp.data)
    $q.notify({message:'Ocurrio un problema con la sincronizacion',position:'center', type:'negative'})
  } else {
    console.log(resp.data)
    init()
    $q.loading.hide();
    $q.notify({message:'Personal Actualizado',position:'center',type:'positive'})
  }
}

init()
</script>
