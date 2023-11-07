<template>
  <q-page padding>
    <q-card class="my-card">

        <q-card-section class="col">
          <q-table title="Salidas" :rows="salsent" row-key="name" :columns="table.cols" :filter="table.filter"
            @row-click="clicked">
            <template v-slot:top>
              <div class=" full-width row justify-between item-center">
                <div class="text-h5">salidas s/ entrada</div>
                <q-input v-model="table.filter" type="text" label="Buscar" />
              </div>
            </template>
          </q-table>
        </q-card-section>


        <q-card-section class="col">
          <q-table title="Salidas c/ entradas" :rows="salcent" row-key="name" :columns="table2.cols"
            :filter="table2.filter">
          </q-table>
        </q-card-section>

    </q-card>
    <q-dialog v-model="wnd.state" persistent>
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6"> SALIDA : {{ wnd.row.SALIDA }}</div>
          <div class="text-subtitle2">{{ wnd.row.CLIENTE }}</div>
        </q-card-section>
        <q-card-section>
          REFERENCIA : {{ wnd.row.REFERENCIA }}
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat v-close-popup>Cancelar</q-btn>
          <q-btn flat @click="createEnt" :disable="bloc">Crear Entrada</q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div v-if="bloc">
        <q-spinner-dots
          color="secondary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">creando..</q-tooltip>
      </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { api } from 'src/boot/axios';
import { useQuasar } from 'quasar';
const $q = useQuasar();


let wnd = ref({ state: false, row: null, pts: false });
let salidas = ref([])
let bloc = ref(false)

let table = ref({
  // vcolumns: ['client', 'celphone', 'price', 'status'],
  cols: [
    { name: 'Salida', label: 'Salida', field: 'SALIDA' },
    { name: 'Sucursal', label: 'Sucursal', field: 'CLIENTE' },
    { name: 'Referencia', label: 'Referencia', field: 'REFERENCIA' },
  ],
  filter: "",
});

let table2 = ref({
  // vcolumns: ['client', 'celphone', 'price', 'status'],
  cols: [
    { name: 'Salida', label: 'Salida', field: 'SALIDA' },
    { name: 'Sucursal', label: 'Sucursal', field: 'CLIENTE' },
    { name: 'Referencia', label: 'Referencia', field: 'REFERENCIA' },
    { name: 'Entrada', label: 'Entrada', field: 'ENTRADA' },
  ],
  filter: "",
});

let salcent = computed(() => salidas.value.filter(e => e.ENTRADA != ''))
let salsent = computed(() => salidas.value.filter(e => e.ENTRADA == ''))


const index = async () => {
  console.log('Cargando Salidas creadas');
  const resp = await api.get('/salidas');
  console.log(resp);
  salidas.value = resp.data;
  // resp.data.solicitudes.map(s => s.address = JSON.parse(s.address))
}

const clicked = (a, row) => {
  console.log(row.SALIDA);
  wnd.value.row = row
  wnd.value.state = true;

}

const createEnt = async () => {
  console.log("se creara la entrada");
  let factura = wnd.value.row.SALIDA;
  bloc.value = true
  let resp = await api.post('/Products/invoiceReceived', { factura }).then(r => r).catch(r => r);
  let status = resp.request.status
  if (status != 200) {
    console.log(resp.request.data);
    $q.notify({
      message: "No se pudo generar la entrada",
      icon: 'close',
      color: 'negative'
    });
  } else {
    let entrada = resp.data.Movimientos.FacturaEntrada;
    let inx = salidas.value.findIndex(e => e.SALIDA == factura)
    console.log(inx);
    salidas.value[inx].ENTRADA = entrada
    wnd.value.state = false;
    $q.notify({
      message: "Entrada " + entrada + " realizada",
      icon: 'check_circle',
      color: 'positive'
    });
    bloc.value = false

  }
  console.log(resp);


}
index();

</script>
