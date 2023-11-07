<template>
  <q-page padding>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4">
          Devoluciones
          <q-badge v-if="select.val" align="top">{{ select.val.name }}</q-badge>
        </div>
      </q-card-section>
      <q-card-section>
        <q-select filled v-model="select.val" option-label="name" input-debounce="0" label="Sucursal"
          :options="select.opts" style="width: 250px" behavior="menu" @update:model-value="updmod">
        </q-select>
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


    <q-dialog v-model="wnd.state" persistent>
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Devolucion: ({{ wnd.row.DEVOLUCION }})</div>
          <div class="text-subtitle2">Referencia: {{ wnd.row.REFERENCIA }}</div>
        </q-card-section>
        <q-card-section>
          <q-card-actions>
            <q-btn flat label="Ignorar"  @click="ignored" />
            <q-btn flat label="Generar Abono" @click="gena" />
          </q-card-actions>
        </q-card-section>
        <q-card-actions>
          <q-btn flat label="Cerrar" v-close-popup />
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


let devoluciones = ref({
  state: false,
  cols: [],
  filter: ""
});

let wnd = ref({
  state: false,
  row: null
})

let cabon = computed(() => devoluciones.value.cols.filter(e => e.ABONO != ''));
let sabon = computed(() => devoluciones.value.cols.filter(e => e.ABONO == ''));



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
  let clise = await api.post('/abonos/getDev', { id });
  devoluciones.value.cols = clise.data;
  devoluciones.value.state = true
  console.log(clise.data);

}

const clicked = (a, row) => {
  wnd.value.state = true
  wnd.value.row = row
}

const ignored = () =>{
  console.log("ignorado")
}

const gena = async() => {
  console.log("aceptado")
  console.log(wnd.value.row.DEVOLUCION);
  console.log(select.value.val.alias);
  console.log('cedis');

  let envdat = {
    idsuc:select.value.val.id,
    devolucion:wnd.value.row.DEVOLUCION,
    observacion:wnd.value.row.REFERENCIA
  }
  let clise = await api.post('/Products/trapasAbo', envdat);
  console.log(clise);


}

index()



</script>
