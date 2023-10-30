<template>
  <div class=" row justify-end">
    <q-btn flat round icon="search" color="teal" @click="sar.state = true" title="Restaurar" size="2em" />
  </div>
  <q-dialog v-model="sar.state">
    <q-card class="my-card">
      <q-card-section>


        <div class="text-h4">
          <q-icon name="search" class="q-mr-xs" />
          Buscador de Clientes
        </div>
        <q-card-section>
          <q-form @submit="searching">
            <div class="row justify-between">
              <q-input v-model="cl_finder.val" type="text" label="Buscar" />
              <!-- <pre>{{ cl_finder }}</pre> -->
              <q-btn icon="search" type="submit" color="primary" />
            </div>
            <div>
              <q-table :rows="cl_finder.table.rows" :columns="cl_finder.table.cols" row-key="name" :no-data-label="cl_finder.table.noresults"/>
            </div>
          </q-form>

        </q-card-section>


      </q-card-section>
    </q-card>
  </q-dialog>
  <q-page padding class="flex flex-center">

    <q-card bordered flat class="my-card">
      <q-card-section class="my-card bg-secondary text-white">


        <div class="text-h4">
          <q-icon name="person_add" class="q-mr-xs" />
          Solicitud para alta de cliente
        </div>

      </q-card-section>
      <q-card-section>
        <q-form @submit="saveQuote" class="q-gutter-md text-grey-10">
          <div>
            <q-card-section class="">
              <div class="text-h5 text-center subrayado">Datos cliente</div>
            </q-card-section>
            <q-input rounded outlined v-model="form.name" label="Nombre del Cliente" class="q-my-sm"> </q-input>
            <q-input rounded outlined v-model="form.address.street" label="Calle" class="q-my-sm"> </q-input>
            <div class="row  q-my-sm">
              <q-input rounded outlined v-model="form.address.numint" label="Num INT" class="col"> </q-input>
              <q-input rounded outlined v-model="form.address.numext" label="Num EXT" class="col"> </q-input>
            </div>
            <div class="row q-my-sm">
              <q-input rounded outlined v-model="form.address.cp" label="Codigo Postal" mask="#####" class="col">
              </q-input>
              <q-input rounded outlined v-model="form.address.state" label="Estado" class="col"> </q-input>
            </div>
            <q-input rounded outlined v-model="form.address.colinia" label="Colonia" class="q-my-sm"> </q-input>
            <q-input rounded outlined v-model="form.address.mun" label="Municipio" class="q-my-sm"> </q-input>

            <q-input rounded outlined v-model="form.phone" label="Telefono" mask="##-####-####" class="q-my-sm">
            </q-input>
            <q-input rounded outlined v-model="form.email" label="Correo Electronico" class="q-my-sm"> </q-input>

            <q-card-section class="">
              <div class="text-h5 text-center subrayado">Datos Sucursal</div>
            </q-card-section>
            <q-input rounded outlined v-model="form.ticket" label="Ticket" mask="#-######" class="q-my-sm"> </q-input>
            <q-select rounded outlined option-label="name" v-model="form.branch.val" :options="form.branch.opts"
              @input="getStaff(form.branch.val.id)" label="Selecciona Sucursal" @update:model-value="fillAgents"
              class="q-my-sm" />
            <q-select rounded outlined v-if="form.branch.val" option-label="complete_name" v-model="form.agent.val"
              :options="form.agent.opts" label="Quien atendio" class="q-my-sm" />
            <q-select rounded outlined v-model="form.priceList.val" :options="form.priceList.opts" label="Precio Otorgado"
              class="q-my-sm" />

            <q-input rounded outlined v-model="form.notes" label="Notas" class="q-my-sm"> </q-input>
          </div>
          <div v-if="isFormValid">
            <q-btn label="Submit" type="submit" color="primary" :loading="form.state" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
/*
declaracion de propiedades reactivas, variables y contantes*/
import { ref, computed } from 'vue';
import { api } from 'src/boot/axios';
import { useQuasar } from 'quasar';
const $q = useQuasar();

let sar = ref({ state: false });
let cl_finder = ref({
  val:"",
  table:{
    cols:[
      {name:'Fs_id', label:'Codigo', field:'CODCLI'},
      {name:'Nombre', label:'Nombre', field:'NOFCLI'},
      {name:'Email', label:'Correo', field:'EMACLI'},
      {name:'Telefono', label:'Telefono', field:'TELCLI'},
      {name:'Tarifa', label:'Precio', field:'TARCLI'},
    ],
    rows:[],
    noresults:"><"
  }
});

let client = ref([]);

let form = ref({
  branch: {
    val: null, opts: []
  },
  name: null,
  ticket: null,
  address: {
    street: null,
    numint: null,
    numext: null,
    cp: null,
    colinia: null,
    mun: null,
    state: null
  },
  phone: "",
  email: null,
  priceList: {
    val: null, opts: [
      { id: 1, label: "Menudeo" },
      { id: 2, label: "Mayoreo" },
      { id: 3, label: "Docena" },
      { id: 4, label: "Caja" },
      { id: 5, label: "Especial" },
      { id: 6, label: "Centro" }]
  },
  agent: {
    db: [], val: null, opts: []
  },
  notes: null,
  state: false
});

/*decalracion de propiedades computadas*/

let isFormValid = computed(() => (form.value.branch.val && form.value.priceList.val && (form.value.name && form.value.name.length > 4) && ((form.value.phone && form.value.phone.length == 12) || (form.value.email)) && form.value.agent && form.value.ticket && form.value.address.street && form.value.address.state && form.value.address.mun))

let dataToSave = computed(() => {
  return {
    branch: form.value.branch.val,
    name: form.value.name,
    ticket: form.value.ticket,
    address: form.value.address,
    phone: form.value.phone ? form.value.phone.split("-").join("") : null,
    email: form.value.email ? form.value.email : null,
    priceList: form.value.priceList.val,
    agent: form.value.agent.val,
    notes: form.value.notes,
  }
})

/*declaracion de metodos y funciones*/

const index = async () => {
  const resp = await api.get('/admincli')
  console.log(resp.data);
  form.value.branch.opts = resp.data.branches
  form.value.agent.db = resp.data.agents
}
index();

const saveQuote = async () => {
  form.value.state = true;
  let cli = [];
  let clise = await api.get('/admincli/getclient');
  cli = clise.data
  let inx = cli.findIndex((e) => (e.TELCLI == dataToSave.value.phone || e.EMACLI == dataToSave.value.email))
  console.log(inx);
  if (inx < 0) {
    let resp = await api.post('/admincli', dataToSave.value);
    clearForm();
    console.log(dataToSave.value)
    form.value.state = false;
    $q.notify({
      message: "ESTA COSA SE CREO WE",
      icon: 'check_circle',
      color: 'positive'
    });
    console.log(resp)
  } else {
    form.value.state = false;
    console.log(cli[inx]);
    let exiscli = cli[inx].CODCLI + " - " + cli[inx].NOFCLI;
    $q.notify({
      message: "El cliente existe ID " + exiscli,
      icon: 'close',
      color: 'negative'
    });
  }


}
const clearForm = () => {
  form.value.ticket = null
  form.value.branch.val = null
  form.value.priceList.val = null
  form.value.name = null
  form.value.agent.val = null
  form.value.address = {
    street: null,
    numint: null,
    numext: null,
    cp: null,
    colinia: null,
    mun: null,
    state: null
  }
  form.value.phone = ""
  form.value.email = null
  form.value.notes = null
}

const fillAgents = v => {
  form.value.agent.opts = form.value.agent.db.filter(e => e._store == v.id);
}

let searching = async () => {
  let sico = cl_finder.value.val;
  // console.log(`'/admincli/getclient?q=${sico}'`)
  const resp = await api.get(`/admincli/getclient?q=${sico}`);
  // sar.value.state = true;
  cl_finder.value.table.rows = resp.data;
  console.log(resp);

}


</script>

<style scope>
.subrayado {
  text-decoration: underline;
}
</style>

