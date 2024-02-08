<template>
  <q-page padding>
    <div class="text-center text-h4"> Reporte de Asistencias</div>

    <div class="q-pa-sm q-gutter-sm flex justify-center">
      <q-btn :loading="clicdow" @click="download" color="primary" icon="cloud_download" label="Descargar"
        style="width: 300px" :disable="disabled" />
      <q-btn :loading="clicjus" @click="justify" color="primary" icon="warning" label="Replicar Justificaciones"
        style="width: 300px" :disable="disabled" />
      <q-btn :loading="clictuc" @click="sync" color="primary" icon="sync" label="Replicar Ultimas Checadas"
        style="width: 300px" :disable="disabled" />
      <q-btn :loading="cliccon" @click="conec" color="primary" icon="sensors" label="Conexion a sucursales"
        style="width: 300px" :disable="disabled" />
      <q-btn :loading="clicacf" @click="hgco" color="primary" icon="group_add" label="Alta colaboradores faltantes"
        style="width: 300px" :disable="disabled" />
    </div>

    <div><!-- tabla de datos reporte -->
      <q-option-group v-model="sucursales.val" inline class="q-mb-md" :options="sucursales.opts" />

      <q-table title="Asistencias" :rows="mosconfil" row-key="ID" flat bordered :separator="'cell'" dense
        :filter="reporte.filter" no-data-label="No hay nada Aun">
        <template v-slot:top>

          <q-separator spaced inset vertical dark />
          <div class>Reporte de Asistencias</div>

          <q-space />

          <q-input borderless dense debounce="300" color="primary" v-model="reporte.filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>

    </div>

    <q-dialog v-model="consec.state">
      <div>
        <q-card class="my-card row">
          <q-card-section class="col">
            <q-card-section>
              <div class="text-h6">Con Conexion</div>
            </q-card-section>
            <q-list bordered v-for="(cons, index) in consec.body.goal" :key="index">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="primary" name="store" />
                </q-item-section>
                <q-item-section>{{ cons }}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-separator spaced inset vertical dark />
          <q-card-section class="col">
            <q-card-section>
              <div class="text-h6">Sin Conexion</div>
            </q-card-section>
            <q-list bordered v-for="(cons, index) in consec.body.fail" :key="index">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="primary" name="store" />
                </q-item-section>
                <q-item-section>{{ cons }}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </q-dialog>


    <q-dialog v-model="descargas.state">
      <div>
        <q-card class="my-card row">
          <q-card-section class="col">
            <q-card-section>
              <div class="text-h6">Correctos</div>
            </q-card-section>
            <q-list bordered v-for="(cone, index) in descargas.body.goals" :key="index">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="primary" name="check" />
                </q-item-section>
                <q-item-section>{{ cone }}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-separator spaced inset vertical dark />
          <q-card-section class="col">
            <q-card-section>
              <div class="text-h6">Errores</div>
            </q-card-section>
            <q-list bordered v-for="(cone, index) in descargas.body.fails" :key="index">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="primary" name="close" />
                </q-item-section>
                <q-item-section>{{ cone }}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </q-dialog>




  </q-page>
</template>

<script setup>
import { ref, computed, initCustomFormatter } from 'vue'
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
  state: false,
  body: null
})
const consec = ref({
  state: false,
  body: null
})
const hgcol = ref({
  state: false,
  body: null
})
const reporte = ref({
  reporte: [],
  filter: null
});
const sucursales = ref({
  opts: [],
  val: 'All'
});
const group = ref();


const mosconfil = computed(() => {
  if (sucursales.value.val === 'All') {
    return reporte.value.reporte
  } else {
    return reporte.value.reporte.filter((e) => {
      return e.SUCURSAL == sucursales.value.val
    })
  }
})

const download = () => {//ya esta
  console.log("Descargando Archivo");
  const fecha = new Date();
  const fechaact = fecha.getDate() + "-" + (fecha.getMonth() + 1)
  clicdow.value = true
  disabled.value = true;
  const notif = $q.notify({
    type: 'ongoing',
    message: 'Descargando Reporte...',
    position: "center"
  })
  api.get('/assist/report', { responseType: 'blob' })
    .then(r => {
      const url = window.URL.createObjectURL(new Blob([r.data]))
      const a = document.createElement('a');
      a.href = url;
      a.download = 'reporte del' + fechaact + '.xlsx';
      a.click();
      notif({
        type: 'positive',
        message: "Descarga completa",
      })
      clicdow.value = false
      disabled.value = false;
    })
    .catch(r => {
      notif({
        type: 'negative',
        message: r.data,
      })
      console.log(r);
      clicdow.value = false
      disabled.value = false;
    })
}

const sync = async () => {
  console.log("Sincronizando Checadas");
  clictuc.value = true
  disabled.value = true;
  const notif = $q.notify({
    type: 'ongoing',
    message: 'Sincronizando Ult. Checadas...',
    position: "center"
  })
  api.get('/zkt/Reportcomplete')
    .then(r => {
      notif({
        type: 'positive',
        message: "Proseso terminado",
      })
      clictuc.value = false
      disabled.value = false;
      descargas.value.body = r.data
      descargas.value.state = true
    })
    .catch(r => {
      notif({
        type: 'negative',
        message: r.data,
      })
      clictuc.value = false
      disabled.value = false;
    })

}

const justify = async () => {//yaesta
  console.log("Sincronizando Justificaciones");
  clicjus.value = true
  disabled.value = true;
  const notif = $q.notify({
    type: 'ongoing',
    message: 'Sincronizando Justificaciones...',
    position: "center"
  })
  api.get('/Monday/justification')
    .then(r => {
      notif({
        type: 'positive',
        message: r.data,
      })
      clicjus.value = false
      disabled.value = false;
    })
    .catch(r => {
      notif({
        type: 'negative',
        message: r.data,
      })
      clicjus.value = false
      disabled.value = false;
    })

}

const conec = async () => {
  console.log("Conexion a checadores");
  cliccon.value = true
  disabled.value = true;
  const notif = $q.notify({
    type: 'ongoing',
    message: 'Verificando conexiones...',
    position: "center"
  })
  api.get('/pings')
    .then(r => {
      notif({
        type: 'positive',
        message: "Mostrando coexiones",
      })
      cliccon.value = false
      disabled.value = false;
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
      disabled.value = false;
    })
}

const hgco = async () => {
  console.log("Conexion a checadores");
  clicacf.value = true
  disabled.value = true;
  const notif = $q.notify({
    type: 'ongoing',
    message: 'Dando de alta...',
    position: "center"
  })
  api.post('/syncstaff')
    .then(r => {
      notif({
        type: 'positive',
        message: "Usuarios Replicados",
      })
      clicacf.value = false
      disabled.value = false;
      console.log(r);
    })
    .catch(r => {
      notif({
        type: 'negative',
        message: r.data,
      })
      console.log(r)
      clicacf.value = false
      disabled.value = false;
    })
}

const init = async () => {
  console.log("obtenirnedo reporte");

  api.get('/getResourses')
    .then(r => {
      reporte.value.reporte = r.data.reporte
      sucursales.value.opts = r.data.sucursal
      console.log(r.data)
      sucursales.value.opts.push({ label: 'All', value: 'All' })
    })
    .catch(r => {
      console.log(r)
    })
}

init();
</script>
