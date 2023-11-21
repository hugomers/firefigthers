<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-badge color="{1:orange}" text-color="{2:black}" label="Asistencias" />
    </q-header>



    <q-page-container>
      <div class="text-center text-h4"> Reporte de Asistencias</div>
      <q-separator spaced inset vertical dark />
      <div class="flex justify-center">
        <q-btn  :loading="clicdow" @click="download" color="primary" icon="cloud_download" label="Descargar reporte de asistencias"  style="width: 350px" :disable="disabled"/>

      </div>
        <q-separator spaced inset vertical dark />
        <div class="flex justify-center">
        <q-btn :loading="clicjus" @click="justify" color="primary" icon="warning" label="Replicar Justificaciones" style="width: 350px" :disable="disabled" />
      </div>
      <q-separator spaced inset vertical dark />
        <div class="flex justify-center">
        <q-btn :loading="clictuc" @click="sync" color="primary" icon="sync" label="Replicar Ultimas Checadas" style="width: 350px" :disable="disabled" />
      </div>
      <q-separator spaced inset vertical dark />
        <div class="flex justify-center">
        <q-btn :loading="cliccon" @click="conec" color="primary" icon="sensors" label="Conexion a sucursales" style="width: 350px" :disable="disabled" />
      </div>
      <q-separator spaced inset vertical dark />
        <div class="flex justify-center">
        <q-btn :loading="clicacf" @click="hgco" color="primary" icon="group_add" label="Alta colaboradores faltantes" style="width: 350px" :disable="disabled" />
      </div>
      <div v-if="descargas.state">
        <q-table
          title="REPLICACION DE CHECADAS"
          :rows="descargas.body"
          row-key="name"
        />
      </div>

      <div v-if="consec.state">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">SIN CONEXION</div>
            <q-list bordered>
              <q-item v-for="(checador, index) in consec.body.fail" :key="index">
                <q-item-section>{{ checador}}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-section>
            <div class="text-h6">CON CONEXION</div>
            <q-list bordered>
              <q-item v-for="(checador, index) in consec.body.goal" :key="index">
                <q-item-section>{{ checador}}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>

        </q-card>
      </div>




    </q-page-container>
  </q-layout>
</template>





<script setup>
import { ref, computed } from 'vue'
import { api } from 'src/boot/axios';
import { useQuasar } from 'quasar';
import QuotesArchive from 'src/components/Clientes/QuotesArchive.vue'
const $q = useQuasar();


const clicdow = ref(false);
const clicjus = ref(false);
const clictuc = ref(false);
const cliccon = ref(false);
const clicacf = ref(false);
const disabled = ref(false);
const descargas = ref({
  state:false,
  body:null
})
const consec = ref({
  state:false,
  body:null
})
const hgcol = ref({
  state:false,
  body:null
})



const download = () => {//ya esta
  console.log("Descargando Archivo");
  const fecha = new Date();
  const fechaact = fecha.getDate() + "-" + (fecha.getMonth() + 1)
  clicdow.value = true
  disabled.value =  true;
  const notif = $q.notify({
    type:'ongoing',
    message:'Descargando Reporte...',
    position:"center"
  })
  api.get('/assist/report',{ responseType: 'blob'})
  .then(r => {
    const url = window.URL.createObjectURL(new Blob([r.data]))
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reporte del'+fechaact+'.xlsx';
    a.click();
    notif({
            type: 'positive',
            message: "Descarga completa",
    })
    clicdow.value = false
    disabled.value =  false;
  })
  .catch(r => {
    notif({
            type: 'negative',
            message: r.data,
    })
    console.log(r);
    clicdow.value = false
    disabled.value =  false;
  })
}

const sync = async () => {
  console.log("Sincronizando Checadas");
  clictuc.value = true
  disabled.value =  true;
  const notif = $q.notify({
    type:'ongoing',
    message:'Sincronizando Ult. Checadas...',
    position:"center"
  })
  api.get('/zkt/Reportcomplete')
  .then(r => {
    notif({
            type: 'positive',
            message: "Proseso terminado",
    })
    clictuc.value = false
    disabled.value =  false;
    descargas.value.body = r.data
    descargas.value.state = true
  })
  .catch(r => {
    notif({
            type: 'negative',
            message: r.data,
    })
    clictuc.value = false
    disabled.value =  false;
  })

}

const justify = async () => {//yaesta
  console.log("Sincronizando Justificaciones");
  clicjus.value = true
  disabled.value =  true;
  const notif = $q.notify({
    type:'ongoing',
    message:'Sincronizando Justificaciones...',
    position:"center"
  })
  api.get('/Monday/justification')
  .then(r => {
    notif({
            type: 'positive',
            message: r.data,
    })
    clicjus.value = false
    disabled.value =  false;
  })
  .catch(r => {
    notif({
            type: 'negative',
            message: r.data,
    })
    clicjus.value = false
    disabled.value =  false;
  })

}

const conec = async()=>{
  console.log("Conexion a checadores");
  cliccon.value = true
  disabled.value =  true;
  const notif = $q.notify({
    type:'ongoing',
    message:'Verificando conexiones...',
    position:"center"
  })
  api.get('/pings')
  .then(r => {
    notif({
            type: 'positive',
            message: "Mostrando coexiones",
    })
    cliccon.value = false
    disabled.value =  false;
    consec.value.body = r.data
    consec.value.state = true
  })
  .catch(r => {
    notif({
            type: 'negative',
            message: r.data,
    })
    console.log(r)
    cliccon.value = false
    disabled.value =  false;
  })
}

const hgco = async() => {
  console.log("Conexion a checadores");
  clicacf.value = true
  disabled.value =  true;
  const notif = $q.notify({
    type:'ongoing',
    message:'Dando de alta...',
    position:"center"
  })
  api.post('/syncstaff')
  .then(r => {
    notif({
            type: 'positive',
            message: "Usuarios Replicados",
    })
    clicacf.value = false
    disabled.value =  false;
    console.log(r);
  })
  .catch(r => {
    notif({
            type: 'negative',
            message: r.data,
    })
    console.log(r)
    clicacf.value = false
    disabled.value =  false;
  })
}

</script>
