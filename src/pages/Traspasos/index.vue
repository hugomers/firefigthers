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

    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 text-center">Sin Movimiento
          <q-btn color="grey" round flat dense :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded" />
        </div>
      </q-card-section>
      <q-slide-transition>
        <div v-show="expanded">
          <div v-for="(devolucion, index) in traspasos.cols" :key="index">
            <q-list bordered>
              <q-item>
                <q-item-section class="text-center">
                  <q-item-label caption> DEVOLUCION</q-item-label>
                  <q-item-label>{{ devolucion.DEVOLUCION }}</q-item-label>
                </q-item-section>
                <q-item-section class="text-center">
                  <q-item-label caption> REFERENCIA</q-item-label>
                  <q-item-label>{{ devolucion.REFERENCIA }}</q-item-label>
                </q-item-section>
                <q-item-section class="text-center">
                  <q-item-label caption> PROVEEDOR</q-item-label>
                  <q-item-label>{{ devolucion.PROVEEDOR }}</q-item-label>
                </q-item-section>
                <q-item-section class="text-center">
                  <q-item-label caption> FECHA</q-item-label>
                  <q-item-label>{{ devolucion.FECHA }}</q-item-label>
                </q-item-section>
                <q-item-section class="text-center">
                  <q-item-label>
                    <q-btn color="primary" flat label="Iniciar" icon="send" @click="init(devolucion)" />
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-separator spaced inset vertical dark />
          </div>
        </div>
      </q-slide-transition>
    </q-card>


    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 text-center">Con Movimiento
          <q-btn color="grey" round flat dense :icon="expanded2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded2 = !expanded2" />
        </div>
      </q-card-section>
      <q-slide-transition />
      <div v-show="expanded2">
        <div v-for="(devolucion, index) in snmov.cols" :key="index">
          <q-list bordered>
            <q-item>
              <q-item-section class="text-center">
                <q-item-label caption> DEVOLUCION</q-item-label>
                <q-item-label>{{ devolucion.refund }}</q-item-label>
              </q-item-section>
              <q-item-section class="text-center">
                <q-item-label caption> REFERENCIA</q-item-label>
                <q-item-label>{{ devolucion.reference }}</q-item-label>
              </q-item-section>
              <q-item-section class="text-center">
                <q-item-label caption> PROVEEDOR</q-item-label>
                <q-item-label>{{ devolucion.provider }}</q-item-label>
              </q-item-section>
              <q-item-section class="text-center">
                <q-item-label caption> FECHA</q-item-label>
                <q-item-label>{{ devolucion.created_at }}</q-item-label>
              </q-item-section>
              <q-item-section class="text-center">
                <q-item-label caption> ABONOS </q-item-label>
                <q-item-label v-if="devolucion.season_ticket == null">
                  <q-btn color="primary" flat label="Abono" @click="abono(devolucion)" />
                </q-item-label>
                <q-item-label v-else>
                  <q-input dense filled :item-aligned="true" v-model="devolucion.season_ticket" type="text"
                      :disable="true" />
                </q-item-label>
              </q-item-section>
              <q-item-section class="text-center">
                <q-item-label caption> Salida </q-item-label>
                <q-item-label v-if="devolucion.invoice == null">
                  <q-btn color="primary" flat label="Salida"  @click="invoice(devolucion)"/>
                </q-item-label>
                <q-item-label v-else>
                  <q-input dense filled :item-aligned="true" v-model="devolucion.invoice" type="text"
                      :disable="true" />
                </q-item-label>
              </q-item-section>
              <q-item-section class="text-center">
                <q-item-label caption> Entrada </q-item-label>
                <q-item-label  v-if="devolucion.entry == null">
                  <q-btn color="primary" flat label="Entrada"  @click="entry(devolucion)"/>
                </q-item-label>
                <q-item-label v-else>
                  <q-input dense filled :item-aligned="true" v-model="devolucion.entry" type="text"
                      :disable="true" />
                </q-item-label>
              </q-item-section>

            </q-item>
          </q-list>
          <q-separator spaced inset vertical dark />
        </div>
      </div>

    </q-card>


    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 text-center">Terminadas
          <q-btn color="grey" round flat dense :icon="expanded3 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded3 = !expanded3" />
        </div>
      </q-card-section>
      <q-slide-transition>
        <div v-show="expanded3">
          <div v-for="(devolucion, index) in terminados.cols" :key="index">
            <q-list bordered>
              <q-item>
                <q-item-section class="text-center">
                  <q-item-label caption> DEVOLUCION</q-item-label>
                  <q-item-label>{{ devolucion.refund }}</q-item-label>
                </q-item-section>
                <q-item-section class="text-center">
                  <q-item-label caption> REFERENCIA</q-item-label>
                  <q-item-label>{{ devolucion.reference }}</q-item-label>
                </q-item-section>
                <q-item-section class="text-center">
                  <q-item-label caption> PROVEEDOR</q-item-label>
                  <q-item-label>{{ devolucion.provider }}</q-item-label>
                </q-item-section>
                <q-item-section class="text-center">
                  <q-item-label caption> FECHA</q-item-label>
                  <q-item-label>{{ devolucion.created_at }}</q-item-label>
                </q-item-section>
                <q-item-section class="text-center">
                  <q-item-label caption> ABONOS </q-item-label>
                  <q-item-label>
                    <q-input dense filled :item-aligned="true" v-model="devolucion.season_ticket" type="text"
                      :disable="true" />
                  </q-item-label>
                </q-item-section>
                <q-item-section class="text-center">
                  <q-item-label caption> Salida </q-item-label>
                  <q-item-label>
                    <q-input dense filled :item-aligned="true" v-model="devolucion.invoice" type="text" :disable="true" />
                  </q-item-label>
                </q-item-section>
                <q-item-section class="text-center">
                  <q-item-label caption> Entrada </q-item-label>
                  <q-item-label>
                    <q-input dense filled :item-aligned="true" v-model="devolucion.entry" type="text" :disable="true" />
                  </q-item-label>
                </q-item-section>

              </q-item>
            </q-list>
            <q-separator spaced inset vertical dark />
          </div>
        </div>
      </q-slide-transition>
    </q-card>

    <q-dialog v-model="selctor.promp" persistent>
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

const expanded = ref(true);
const expanded2 = ref(true);
const expanded3 = ref(true);

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

let snmov = ref({
  state: false,
  cols: [],
  filter: ""
});

const terminados = ref({
  state: false,
  cols: [],
  filter: ""
})

let workpoints = ref({
  val: null,
  opts: null
})

const selctor = ref({
  promp:false,
  body:null
})


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
  snmov.value.cols = clise.data.movimientos.filter((e) => {
    return e.season_ticket == null || e.invoice == null || e.entry == null
  });
  terminados.value.cols = clise.data.movimientos.filter((e) => {
    return e.season_ticket != null && e.invoice != null && e.entry != null
  });

}


const init = (dev) => {
  console.log(dev)
  selctor.value.promp = true;
  selctor.value.body = dev;
}

const procedimiento = async() => {
  console.log('iniciar');
  let evin = {
    from:select.value.val,
    to:workpoints.value.val,
    devolucion:selctor.value.body
  }
  console.log(evin)
  let envbd = await api.post('/abonos/iniproces',evin);
  console.log(envbd)
  let status = envbd.request.status
  if(status != 200){
    console.log("error brou")
    console.log(envbd)
    let msg = envbd.response.data.error.msg;
    $q.notify({
      message: msg,
      icon: 'close',
      color: 'negative'
    });
  }else{

    $q.notify({
      message: "Se Inicio",
      icon: 'check_circle',
      color: 'positive',
      position:'center'
    });
    if(envbd.data.season_ticket != null && envbd.data.invoice != null && envbd.data.entry != null){
      terminados.value.cols.push(envbd.data)
    }else if(envbd.data.season_ticket == null || envbd.data.invoice == null || envbd.data.entry == null){
      snmov.value.cols.push(envbd.data)
    }
    let inx = traspasos.value.cols.findIndex((e) => e.DEVOLUCION == envbd.data.refund)
    traspasos.value.cols.splice(inx,1);
  }
}

const abono = async(dev) => {
  let evin = dev
  let envbd = await api.post('/abonos/nabo',evin);
  console.log(envbd)
  let status = envbd.request.status
  if(status != 200){
    console.log("error brou")
    console.log(envbd)
    let msg = envbd.response.data.error.msg;
    $q.notify({
      message: msg,
      icon: 'close',
      color: 'negative'
    });
  }else{
    let ab = envbd.data.season_ticket;
    $q.notify({
      message: `Abono Creado ${ab}`,
      icon: 'check_circle',
      color: 'positive',
      position:'center'
    });
    let inx = snmov.value.cols.findIndex((e) => e.id == envbd.data.id)
    if(envbd.data.season_ticket != null && envbd.data.invoice != null && envbd.data.entry != null){
      terminados.value.cols.push(envbd.data)
      snmov.value.cols.splice(inx,1);
    }else if(envbd.data.season_ticket != null || envbd.data.invoice == null || envbd.data.entry == null){
      snmov.value.cols[inx].season_ticket = envbd.data.season_ticket
      console.log(snmov.value.cols[inx].season_ticket);
    }
  }
}

const invoice = async(dev) => {
  console.log(dev);
  let evin = dev
  console.log(evin)
  let envbd = await api.post('/abonos/ninv',evin);
  console.log(envbd)
  let status = envbd.request.status
  if(status != 200){
    console.log("error brou")
    console.log(envbd)
    let msg = envbd.response.data.error.msg;
    $q.notify({
      message: msg,
      icon: 'close',
      color: 'negative'
    });
  }else{
    let ab = envbd.data.invoice;
    $q.notify({
      message: `Salida Creada ${ab}`,
      icon: 'check_circle',
      color: 'positive',
      position:'center'
    });
    let inx = snmov.value.cols.findIndex((e) => e.id == envbd.data.id)
    if(envbd.data.season_ticket != null && envbd.data.invoice != null && envbd.data.entry != null){
      terminados.value.cols.push(envbd.data)
      snmov.value.cols.splice(inx,1);
    }else if(envbd.data.invoice != null || envbd.data.season_ticket == null || envbd.data.entry == null){
      snmov.value.cols[inx].invoice = envbd.data.invoice
      console.log(snmov.value.cols[inx].invoice);
    }
  }

}

const entry = async(dev) => {
  console.log(dev);
  let evin = dev
  console.log(evin)
  let envbd = await api.post('/abonos/nent',evin);
  console.log(envbd)
  let status = envbd.request.status
  if(status != 200){
    console.log("error brou")
    console.log(envbd)
    let msg = envbd.response.data.error.msg;
    $q.notify({
      message: msg,
      icon: 'close',
      color: 'negative'
    });
  }else{
    let ab = envbd.data.entry;
    $q.notify({
      message: `Entrada Creada ${ab}`,
      icon: 'check_circle',
      color: 'positive',
      position:'center'
    });
    let inx = snmov.value.cols.findIndex((e) => e.id == envbd.data.id)
    if(envbd.data.season_ticket != null && envbd.data.invoice != null && envbd.data.entry != null){
      terminados.value.cols.push(envbd.data)
      snmov.value.cols.splice(inx,1);
    }else if(envbd.data.entry != null || envbd.data.invoice == null || envbd.data.season_ticket == null){
      snmov.value.cols[inx].entry = envbd.data.entry
      console.log(snmov.value.cols[inx].entry);
    }
  }

}

index()
</script>
