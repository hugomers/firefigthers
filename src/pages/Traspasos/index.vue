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
    </q-card>

    <q-separator spaced inset vertical dark />
    {{ devoluciones }}

    <div v-if="traspasos.state">
      <q-table title="Traspasos Pendientes" :rows="sinini" @row-click="inicio" />
    </div>

    <q-separator spaced inset vertical dark />

    <div v-if="traspasos.state">
      <q-table title="Traspasos Solo Abono" :rows="abonos" @row-click="conabono" />

    </div>


    <q-separator spaced inset vertical dark />


    <div v-if="traspasos.state">
      <q-table title="Traspasos Solo Salida" :rows="salidas" @row-click="consalida"/>
    </div>

    <q-separator spaced inset vertical dark />

    <div v-if="traspasos.state">
      <q-table title="Traspasos Completados" :rows="completo" @row-click="termino" />
    </div>

    <q-dialog v-model="selector.state" persistent>
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Devolucion : {{ selector.body.DEVOLUCION }}</div>
          <div class="text-subtitle2">Referencia: {{ selector.body.REFERENCIA }}</div>
          <div class="text-subtitle2">Fecha: {{ selector.body.FECHA }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat icon="close" color="negative" v-close-popup title="cancelar"/>
          <q-btn flat icon="arrow_forward" color="positive" title="Traspasar" @click="init" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="selector.promp" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Seleccione Destino</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-select filled v-model="workpoints.val" option-label="name" label="Sucursal Destino"
          :options="workpoints.opts">
        </q-select>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat icon="close" v-close-popup color="negative" />
          <q-btn flat icon="arrow_forward" color="positive" title="Traspasar" :disable="workpoints.val == null ? true : false " @click="procedimiento" />
        </q-card-actions>
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

let traspasos = ref({
  state: false,
  cols: [],
  filter: ""
});

let selector = ref({
  state:false,
  body:null,
  promp:false,
})

let workpoints = ref({
  val:null,
  opts:null
})

let devoluciones = ref([]);

const abonos = computed(() => traspasos.value.cols.filter((e) => e.TRAZABILIDAD.includes('abono')));
const salidas = computed(() => traspasos.value.cols.filter((e) => e.TRAZABILIDAD.includes('salida')));
const completo = computed(() => traspasos.value.cols.filter((e) => e.TRAZABILIDAD.includes('entrada')));
const sinini = computed(() => traspasos.value.cols.filter((e) => e.TRAZABILIDAD == ''))


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
    workpoints.value.opts = resp.data
  }
}

const updmod = async (v) => {
  console.log(v.id)
  let id = v.id;
  let clise = await api.post('/abonos/gettras', { id });
  console.log(clise.data)
  let devi = clise.data.devoluciones;
  let devidb = clise.data.movimientos;
  let exist = devidb.map(e => e.refund);
  traspasos.value.cols = devi.filter(e => !exist.includes(e.DEVOLUCION))

  traspasos.value.state = true
}

const inicio = (a,b) => {
  console.log(b);
  selector.value.state = true;
  selector.value.body = b

};

const init = () => {
  selector.value.promp = true;
}

const procedimiento = async() => {
  console.log('iniciar');
  let evin = {
    from:select.value.val,
    to:workpoints.value.val,
    devolucion:selector.value.body.DEVOLUCION
  }
  let envbd = await api.post('/abonos/iniproces',evin);
  console.log(envbd);
  devoluciones.value = envbd.data;
}
const conabono = () => console.log('ahoritacontinuo');
const consalida = () => console.log('ahoritasigo');
const termino = () => console.log('ahoritatermino');


index()
</script>
