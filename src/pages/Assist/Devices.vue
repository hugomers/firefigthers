<template>
  <q-page padding>

    <q-table hide-bottom :rows="devices" :columns="table.columns" row-key="name" grid :filter="table.filter"
      :pagination="table.pagination">
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="table.filter" placeholder="Buscar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card flat bordered :style="`border: 3px solid ${props.row._status ? '#03C988' : '#B80000'};`"
            @click="view(props.row)">
            <q-card-section class="text-center">
              <div class="row">
                <div class="col">
                  Sucursal
                  <br>
                  <strong>{{ props.row.store.name }}</strong>
                </div>
                <div class="col">
                  Dispositivo
                  <br>
                  <strong>{{ props.row.name }}</strong>
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="text-center">
            <div class="row">
                <div class="col">
                  Direccion Ip
                  <br>
                  <strong>{{ props.row.ip_address }}</strong>
                </div>
                <div class="col">
                  Numero de Serie
                  <br>
                  <strong>{{ props.row.serial_number }}</strong>
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="text-center">
            <div class="row">

                <div class="col">
                  Horario
                  <br>
                  <strong>{{ props.row._curret }}</strong>
                </div>
                <div class="col">
                  Dispositivo
                  <br>
                  <strong>{{ props.row._time }}</strong>
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="text-center">
            <div class="row">
                <div class="col">
                  Registros
                  <br>
                  <strong>{{ props.row._att }}</strong>
                </div>
                <div class="col">
                  Diferencia Tiempo
                  <br>
                  <strong>{{ dayjs(props.row._time).diff(dayjs(props.row._curret), 'second', true) }} s</strong>
                </div>

            </div>
            </q-card-section>
            <q-separator />
          </q-card>
        </div>
      </template>
    </q-table>

    <q-dialog v-model="wndView" persistent>
      <q-card>
        <q-card-section class="items-center">
          <q-input v-model="device.store.name" type="text" label="Sucursal" filled disable />
          <q-separator spaced inset vertical dark />
          <q-input v-model="device.id" type="text" label="Id" filled disable />
          <q-separator spaced inset vertical dark />
          <q-input v-model="device.serial_number" type="text" label="Numero de serie" filled disable />
          <q-separator spaced inset vertical dark />
          <q-input v-model="device.name" type="text" label="Dispositivo" filled disable />
          <q-separator spaced inset vertical dark />
          <q-input v-model="device.nick_name" type="text" label="Nombre" filled />
          <q-separator spaced inset vertical dark />
          <q-input v-model="device.ip_address" type="text" label="IP" filled>
            <template v-slot:append>
              <q-btn color="primary" icon="sensors" @click="ping(device.ip_address)" flat />
            </template>
          </q-input>
          <q-separator spaced inset vertical dark />

          <div class="text-center">Dispositivo: <div class="text-center">{{ device._time }}</div></div>
          <q-separator spaced inset vertical dark />
          <div class="text-center"> Horario: <div class="text-centert">{{ device._curret }}</div> </div>
          <q-separator spaced inset vertical dark />
          <div class="text-center">Diferencia: <div class="text-center">{{ dayjs(device._time).diff(dayjs(device._curret), 'second', true) }}</div> </div>

        </q-card-section>

        <q-card-section >
           <q-btn color="primary"  label="Registros" @click="replyRegister" outline class="full-width" />
           <q-separator spaced inset vertical dark />
           <q-btn color="primary"  label="Cambiar Horario" @click="changeDate" outline class="full-width" />
           <q-separator spaced inset vertical dark />
           <q-btn color="primary"  label="Eliminar Registros" @click="deleteRegister" outline class="full-width" />

        </q-card-section>

        <q-card-actions align="center">
          <q-btn flat label="Cancel" color="negative" v-close-popup />
          <q-btn flat label="Editar" color="positive" @click="edit(device)" />
        </q-card-actions>
      </q-card>
    </q-dialog>

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

const devices = ref([])
const time = ref(null)
const device = ref([])
const wndView = ref(false)
const table = ref({
  columns: [
    { name: 'id', label: 'id', field: row => row.id },
    { name: 'name', label: 'Dispositivo', field: row => row.name },
    { name: 'nick_name', label: 'Nombre', field: row => row.nick_name },
    { name: 'id', label: 'Numero de Serie', field: row => row.serial_number },
    { name: 'ip', label: 'Direccion Ip', field: row => row.ip },
    { name: 'store', label: 'Sucursal', field: row => row.store.name }
  ],
  filter: '',
  pagination: { rowsPerPage: [0] }
})

const init = async () => {
  const resp = await api.get('/zkt/Index')
  console.log(resp.status)
  if (resp.status != 200) {
    console.log(resp.data)
  } else {
    console.log(resp.data)
    devices.value = resp.data
    pings(devices.value)
  }
}

const pings = (devices) => {
  devices.forEach((e,index) => {
    setTimeout(() => {
        api.get(`/zkt/Ping/${e.ip_address}`)
        .then(i => {
          console.log(i.data)
          e._status = i.data.connect;
          e._att = i.data.register
          e._time = i.data.date
          e._curret = i.data.current
        })
        .catch(error => {
          console.error(`Error pinging ${e.ip_address}:`, error);
        });},index * 1000)

  });
}



const ping = async (ip) => {
  $q.loading.show({ message: 'Haciendo Pin :P' });
  const resp = await api.get(`/zkt/Ping/${ip}`)

  if (resp.status != 200) {
    console.log(resp)
  } else {
    let mssg = resp.data ? 'Con Conexion' : 'Sin Conexion';
    let type = resp.data ? 'positive' : 'negative';
    $q.notify({
      message: mssg,
      type: type,
      position: 'center'
    })
    $q.loading.hide();

  }
}

const edit = async (device) => {
    console.log(device)
    $q.loading.show({ message: 'Editando' });
    const resp = await  api.post(`/zkt/Edit`,device)
    if (resp.status != 200) {
      console.log(resp.data);
    } else {
      console.log(resp.data);
      wndView.value = false;
      $q.notify({
        message: 'Dispositivo Actualizado',
        type: 'positive',
        position: 'center'
      })
      $q.loading.hide();
      init()
    }
  }


const view = (row) => {
  wndView.value = true
  device.value = row
}



const replyRegister = async () => {
  const id = device.value.id
  console.log(id)
  $q.loading.show({ message: 'Impotando Registros :P' });
  const resp = await api.get(`/zkt/getRegisDevice/${id}`)
  if (resp.status != 200) {
    console.log(resp)
  } else {
    console.log(resp.data)
    $q.notify({message:resp.data.goals, type:'positive', position:'center'})
    $q.loading.hide();
  }
}

const changeDate = async () => {
  const id = device.value.id
  console.log(id)
  $q.loading.show({ message: 'Cambiando Horario :P' });
  const resp = await api.get(`/zkt/changeDate/${id}`)
  if (resp.status != 200) {
    console.log(resp)
  } else {
    console.log(resp.data)
    device.value._time = resp.data.date
    device.value._curret = resp.data.date
    $q.notify({message:'Cambio Realizado :)', type:'positive', position:'center'})
    $q.loading.hide();
  }
}

const deleteRegister = async () => {
  replyRegister()
  const id = device.value.id
  console.log(id)
  $q.loading.show({ message: 'ELIMINANDO REGISTROS :P' });
  const resp = await api.delete(`/zkt/deleteAttendance/${id}`)
  if (resp.status != 200) {
    console.log(resp)
  } else {
    console.log(resp.data)
    $q.notify({message:'Registros Eliminados :)', type:'positive', position:'center'})
    $q.loading.hide();
  }
}



init()
</script>
