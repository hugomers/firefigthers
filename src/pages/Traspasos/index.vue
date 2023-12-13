<template>
  <q-page padding>
    <q-card class="my-card row">
      <q-card-section>
        <div class="text-h4">
          Traspasos
          <q-badge v-if="select.val" align="top">{{ select.val.name }}</q-badge>
        </div>
      </q-card-section>
      <q-card-section>
        <q-select filled v-model="select.val" option-label="name" input-debounce="0" label="Sucursal"
          :options="select.opts" style="width: 250px" behavior="menu" @update:model-value="updmod">
        </q-select>
      </q-card-section>
      <q-card-section v-if="devoluciones.state">
        <q-btn color="negative" icon="archive" @click="mosig" />
      </q-card-section>
    </q-card>
    <div class="q-pa-md">
      <div v-if="devoluciones.state">
        <q-table title="Devoluciones Pendientes" :rows="sabon" row-key="name" :filter="devoluciones.filter"
          @row-click="clicked">
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="devoluciones.filter" placeholder="Buscar">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>
      </div>
    </div>
    <div class="q-pa-md">
      <div v-if="devoluciones.state">
        <q-table title="Devoluciones con Abono" :rows="cabon" row-key="name" :filter="devoluciones.filter">
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="devoluciones.filter" placeholder="Buscar">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>
      </div>
    </div>

    <q-dialog v-model="mos" persistent>
      <q-card>
        <q-card-section>
          <q-card-actions vertical align="left">
            <q-btn flat icon="arrow_back" v-close-popup />
          </q-card-actions>
        </q-card-section>

        <q-table :rows="igno" row-key="name" @row-click="clig" />

      </q-card>

    </q-dialog>

    <q-dialog v-model="menig.state" persistent>
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6"> DEVOLUCION : {{ menig.row.DEVOLUCION }}</div>
          <div class="text-subtitle2"> REF : {{ menig.row.REFERENCIA }}</div>

        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
          <q-btn flat label="Restaurar" color="primary" @click="restore" />


        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="wnd.state" persistent>
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Devolucion: ({{ wnd.row.DEVOLUCION }})</div>
          <div class="text-subtitle2">Referencia: {{ wnd.row.REFERENCIA }}</div>
        </q-card-section>
        <q-card-section>
          <q-card-actions>
            <q-btn flat label="Ignorar" @click="ignored" />
            <q-btn flat label="Generar Abono" @click="gena" :disable="bloc" />
          </q-card-actions>
        </q-card-section>
        <q-card-actions>
          <q-btn flat label="Cerrar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="bloc" :persistent="bloc">
      <q-card v-if="bloc">
        <q-card-section class="row items-center">
          <q-spinner-dots color="secondary" size="2em" />
          <q-tooltip :offset="[0, 8]">creando..</q-tooltip>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { api } from 'src/boot/axios';
import { useQuasar } from 'quasar';
const $q = useQuasar();

let select = ref({
  val: null,
  opts: []
})

let branches = ref([]);
let bloc = ref(false)


let devoluciones = ref({
  state: false,
  cols: [],
  filter: ""
});

let wnd = ref({
  state: false,
  row: null
})

let mos = ref(false);
let menig = ref({
  state: false,
  row: null
});



let cabon = computed(() => devoluciones.value.cols.filter(e => e.ABONO.includes("-")));
let sabon = computed(() => devoluciones.value.cols.filter(e => e.ABONO == '' || e.ABONO == "''"));
let igno = computed(() => devoluciones.value.cols.filter(e => e.ABONO == 'No se creara Abono'));



const index = async () => {
  console.log('Cargando Sucursales');
  const resp = await api.get('/abonos/getSuc')
    .then(r => r).catch(r => r);
  if (resp.request.status != 200) {
    console.log(resp.response.data)
  } else {
    console.log(resp);
    branches.value = resp.data;
    select.value.opts = resp.data;
  }

  // resp.data.solicitudes.map(s => s.address = JSON.parse(s.address))
}

const updmod = async (v) => {
  console.log(v.id)
  let id = v.id;
  let clise = await api.post('/abonos/gettras', { id });
  devoluciones.value.cols = clise.data;
  devoluciones.value.state = true
  console.log(clise.data);

}

const clicked = (a, row) => {
  wnd.value.state = true
  wnd.value.row = row
}

const ignored = async () => {
  bloc.value = true;
  console.log("ignorando")
  let devol = wnd.value.row.DEVOLUCION;
  let sucu = select.value.val.id;
  let msg = "No se creara Abono";
  let datimp = {
    devol: devol,
    idsuc: sucu,
    mssg: msg
  }
  let updev = await api.post('/Products/updev', datimp)
    .then(r => r).catch(r => r);
  let status = updev.request.status;
  if (status != 200) {
    console.log(updev.request);
    $q.notify({
      message: "status: " + updev.request.status + " mssg: " + updev.request.statusText,
      icon: 'close',
      color: 'negative'
    });
  } else {
    console.log(updev.data)
    let inx = devoluciones.value.cols.findIndex(e => e.DEVOLUCION == devol)
    devoluciones.value.cols[inx].ABONO = msg;
    $q.notify({
      message: "Devolucion " + devol + " Ignorada",
      icon: 'check',
      color: 'positive'
    });
    wnd.value.state = false;
    bloc.value = false;
  }

}

const gena = async () => {
  console.log("Generando Abono");
  bloc.value = true;

  let envdat = {
    idsuc: select.value.val.id,
    devolucion: wnd.value.row.DEVOLUCION,
    observacion: wnd.value.row.REFERENCIA
  }
  let data = await api.post('/Products/trapasAbo', envdat)
    .then(r => r).catch(r => r);
  let status = data.request.status;
  if (status != 200) {
    console.log(data.request);
    $q.notify({
      message: "status: " + data.request.status + " mssg: " + data.request.statusText,
      icon: 'close',
      color: 'negative'
    });
  } else {
    console.log(data.data)
    let inx = devoluciones.value.cols.findIndex(e => e.DEVOLUCION == data.data.Movimientos.Devolucion)
    devoluciones.value.cols[inx].ABONO = data.data.Movimientos.Abono;
    $q.notify({
      message: "Abono " + data.data.Movimientos.Abono + " creado",
      icon: 'check',
      color: 'positive'
    });
    wnd.value.state = false;
    bloc.value = false;
  }

}

let mosig = () => {
  console.log("Mostrando Ignorados");
  mos.value = true;
}

let clig = async (a, row) => {
  console.log(row)
  menig.value.state = true
  menig.value.row = row

}

let restore = async () => {
  console.log('se va a restaurar');
  bloc.value = true;
  let devol = menig.value.row.DEVOLUCION;
  let sucu = select.value.val.id;
  let msg = "''";
  let datimp = {
    devol: devol,
    idsuc: sucu,
    mssg: msg
  }
  let res = await api.post('/Products/updev', datimp)
    .then(r => r).catch(r => r);
  let status = res.request.status;
  if (status != 200) {
    console.log(res.request);
    $q.notify({
      message: "status: " + res.request.status + " mssg: " + res.request.statusText,
      icon: 'close',
      color: 'negative'
    });
  } else {
    console.log(res.data)
    let inx = devoluciones.value.cols.findIndex(e => e.DEVOLUCION == devol)
    devoluciones.value.cols[inx].ABONO = msg;
    $q.notify({
      message: "Devolucion " + devol + " restaurada",
      icon: 'check',
      color: 'positive'
    });
    menig.value.state = false;
    bloc.value = false;
  }

}


index()



</script>
