<template>
  <q-page padding>

    <div class="q-pa-sm q-gutter-sm flex justify-center">
      <q-btn @click="justify" color="primary" icon="warning" label="Replicar Justificaciones" style="width: 300px" />
      <q-btn @click="sync" color="primary" icon="sync" label="Replicar Ultimas Checadas" style="width: 300px" />
    </div>

    <div><!-- tabla de datos reporte -->
      <q-option-group v-model="sucursales.val" inline class="q-mb-md" :options="sucursales.opts" />


      <q-table title="Asistencias" :rows="mosconfil" row-key="ID" flat bordered :separator="'cell'" dense
        :filter="reporte.filter" no-data-label="No hay nada Aun">
        <template v-slot:top>

          <q-separator spaced inset vertical dark />
          <div class="row items-center">
            <q-btn @click="exportTable" color="primary" icon="cloud_download" :disable="mosconfil.length == 0" flat />
            <div class="col">Reporte de Asistencias</div>
          </div>
          <q-space />

          <q-input borderless dense debounce="300" color="primary" v-model="reporte.filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
    <q-dialog v-model="justifications.state" >
      <q-card class="my-card"  style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Replicacion de justificaciones</div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Correcto</div>
          <div class=" text-bold text-h6">Justificaciones Replicadas: {{ justifications.val.goals }}</div>

        </q-card-section>
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Errores</div>
          </q-card-section>
          <q-card-section class="row">
            <div class="col">
              <div class="text-center text-bold text-h6">Faltantes Tipo</div>
              <q-separator spaced inset vertical dark />
              <div>
                <q-list bordered>
                  <q-item clickable v-ripple v-for="(types, index) in justifications.val.fails.type">
                    <q-item-section>
                      <q-item-label>ID: {{ types.id_monday }}</q-item-label>
                      <q-item-label caption>Menssaje: {{ types.Message }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
            <q-separator spaced inset vertical dark />
            <div class="col">
              <div class="text-center text-bold text-h6">Faltantes Usuario</div>
              <q-separator spaced inset vertical dark />
              <div>
                <q-list bordered>
                  <q-item clickable v-ripple v-for="(types, index) in justifications.val.fails.user">
                    <q-item-section>
                      <q-item-label>ID: {{ types.id_monday }}</q-item-label>
                      <q-item-label caption>Menssaje: {{ types.Message }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
            <q-separator spaced inset vertical dark />
            <div class="col">
              <div class="text-center text-bold text-h6">Faltantes Autorizacion</div>
              <q-separator spaced inset vertical dark />
              <div>
                <q-list bordered>
                  <q-item clickable v-ripple v-for="(types, index) in justifications.val.fails.autorized">
                    <q-item-section>
                      <q-item-label>ID: {{ types.id_monday }}</q-item-label>
                      <q-item-label caption>Menssaje: {{ types.Message }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
            <q-separator spaced inset vertical dark />
            <div class="col">
              <div class="text-center text-bold text-h6">Faltantes Insercion</div>
              <q-separator spaced inset vertical dark />
              <div>
                <q-list bordered>
                  <q-item clickable v-ripple v-for="(types, index) in justifications.val.fails.inserted">
                    <q-item-section>
                      <q-item-label>ID: {{ types.id_monday }}</q-item-label>
                      <q-item-label caption>Menssaje: {{ types.Message }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-card>
    </q-dialog>

    <q-dialog v-model="checadas.state"  >
      <q-card  style="width: 700px; max-width: 80vw;">
        <q-card-section >
          <div class=" text-center text-bold text-h5">Replicacion de Checadas</div>
        </q-card-section>
        <q-card-section>
          <q-list bordered v-for="(checad, index) in checadas.goals">
            <q-item clickable v-ripple >
              <q-item-section>
                <q-item-label> {{ checad.name }}</q-item-label>
                <q-item-label caption> {{ checad.message.goals ? checad.message.goals : checad.message }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, computed, initCustomFormatter, vModelCheckbox } from 'vue'
import { api } from 'src/boot/axios';
import { useQuasar } from 'quasar';
import ExcelJS from 'exceljs';
const $q = useQuasar();


const descargas = ref({
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
const justifications = ref({
  state: false,
  val: null
});
const checadas = ref({
  state: false,
  goals: [],
  fails:[]
})


const mosconfil = computed(() => {
  if (sucursales.value.val === 'All') {
    return reporte.value.reporte
  } else {
    return reporte.value.reporte.filter((e) => {
      return e.SUCURSAL == sucursales.value.val
    })
  }
})


const sync = async () => {
  console.log("Sincronizando Checadas");
  // $q.loading.show({message:'Sincronizando Checadas'})
  sucursales.value.opts.forEach((e, index) => {
    setTimeout(() => {
      if (e.label != 'All') {
        $q.loading.show({ message: `Replicando Checadas de ${e.name}` })
        api.get(`/zkt/getRegisDevice/${e.id}`)
          .then(i => {
            console.log(i.data)
            $q.loading.hide();
            let data = {name: e.name, message:i.data}
            checadas.value.goals.push(data);
            $q.notify({message:`${e.name} OK :):`,type:'positive',position:'center'})
          })
          .catch(error => {
            console.error(`Error pinging ${e.ip_address}:`, error);
            $q.loading.hide();
            $q.notify({message:`Error checador ${e.name}:`,type:'negative',position:'center'})
          });
      }

    }, index * 1000)
  })
  checadas.value.state = true;
  // $q.loading.hide();

  // const id = device.value.id
  // console.log(id)
  // $q.loading.show({ message: 'Impotando Registros :P' });
  // const resp = await api.get(`/zkt/getRegisDevice/${id}`)
  // if (resp.status != 200) {
  //   console.log(resp)
  // } else {
  //   console.log(resp.data)
  //   $q.notify({message:resp.data.goals, type:'positive', position:'center'})
  //   $q.loading.hide();
  // }




  // const notif = $q.notify({
  //   type: 'ongoing',
  //   message: 'Sincronizando Ult. Checadas...',
  //   position: "center"
  // })
  // api.get('/zkt/Reportcomplete')
  //   .then(r => {
  //     notif({
  //       type: 'positive',
  //       message: "Proseso terminado",
  //     })
  //     descargas.value.body = r.data
  //     descargas.value.state = true
  //     $q.loading.hide();
  //   })
  //   .catch(r => {
  //     notif({
  //       type: 'negative',
  //       message: r.data,
  //     })
  //   })

}

const justify = async () => {
  console.log("Sincronizando Justificaciones");
  $q.loading.show({ message: 'Sincronizando Justificaciones' })
  api.get('/Monday/justification')
    .then(r => {
      $q.notify({ message: 'Justificaciones Terminadas', type: 'positive', position: 'center' })
      justifications.value.state = true
      justifications.value.val = r.data
      $q.loading.hide()
    })
    .catch(r => {
      $q.notify({ message: r.data, type: 'negative', position: 'center' })
    })
}
const init = async () => {
  console.log("obtenirnedo reporte");

  api.get('/getResourses')
    .then(r => {
      console.log(r);
      reporte.value.reporte = r.data.reporte
      sucursales.value.opts = r.data.sucursal
      sucursales.value.opts.forEach(e => { e.label = e.name; e.value = e.name })
      console.log(r.data)
      sucursales.value.opts.push({ label: 'All', value: 'All' })
    })
    .catch(r => {
      console.log(r)
    })
}

const exportTable = async () => {
  const workbook = new ExcelJS.Workbook();
  const targetColumns = ['G', 'H', 'I', 'J', 'K', 'L', 'M'];

  const worksheet = workbook.addWorksheet(`Reporte`);
  worksheet.addRow(Object.keys(mosconfil.value[0]).map(i => i));
  mosconfil.value.forEach((row) => {
    worksheet.addRow([
      row.ANIO,
      row.semana,
      row.ID,
      row.NOMBRE,
      row.SUCURSAL,
      row.TURNO,
      row.SABADO,
      row.DOMINGO,
      row.LUNES,
      row.MARTES,
      row.MIERCOLES,
      row.JUEVES,
      row.VIERNES,
      Number(row.FALTAS),
      Number(row.RETARDOS),
      Number(row.VACACIONES)
    ])
  })


  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      const colLetter = worksheet.getColumn(colNumber).letter;
      if (targetColumns.includes(colLetter)) {
        if (cell.value == 'FALTA' || cell.value == 'string' && cell.value.includes('-0%')) {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFCCCC' } };
          cell.font = { color: { argb: 'FF990000' } };
        } else if (typeof cell.value == 'string' && cell.value.includes('-50%')) {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFFCC' } };
          cell.font = { color: { argb: 'FF999900' } };
        } else if (typeof cell.value == 'string' && cell.value.includes(' R')) {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFF00' } };
          cell.font = { color: { argb: 'FFCC0000' } };
        } else if (typeof cell.value == 'string' && cell.value.includes('-100%')) {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFCCCCFF' } };
          cell.font = { color: { argb: 'FF000099' } };
        } else if (cell.value == 'DESCANSO') {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFFCC' } };
          cell.font = { color: { argb: 'FF999900' } };
        }

        const regex = /\(([^)]+)\)/; // Expresión regular para encontrar texto entre paréntesis
        const match = typeof cell.value === 'string' ? cell.value.match(regex) : null;

        if (match) {
          // Añadir el texto entre paréntesis como comentario de la celda
          cell.note = match[1].trim(); // Usa trim() para eliminar espacios alrededor
          // Eliminar el texto entre paréntesis del valor de la celda
          cell.value = cell.value.replace(regex, '').trim() // trim() también aquí para limpiar
        }
      }
    });

  });
  worksheet.columns.forEach(column => {
    let maxLength = 0;
    column.eachCell({ includeEmpty: true }, (cell) => {
      const columnLength = cell.value ? cell.value.toString().length : 10;
      if (columnLength > maxLength) {
        maxLength = columnLength;
      }
    });
    column.width = maxLength < 10 ? 10 : maxLength; // Ajusta el ancho mínimo y máximo
  });





  const downloadExcel = async () => {
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `Reporte.xlsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  downloadExcel();
}

init();
</script>
