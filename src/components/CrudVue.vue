<template>
    <div style="margin: 0 auto; width: 80%;">
        <Panel header="Lista de parques">
            <Button id="addParkBtn" label="Agregar" icon="pi pi-plus" iconPos="right"  @click="showSaveModal($event)"/>
            <br>
            <DataTable :value="parks" :paginator="true" :rows="10">
                <Column field="name" header="Nombre del parque"></Column>
                <Column field="description" header="Descripción"></Column>
                <Column field="openingDate" header="Fecha de inauguración"></Column>
                <Column field="province" header="Provincia"></Column>
                <Column field="canton" header="Cantón"></Column>
                <Column field="district" header="Distrito"></Column>
                <Column field="address" header="Dirección"></Column>
            </DataTable>
        </Panel>
        <Dialog
            header="Crear parque"
            :visible.sync="displayModal"
            :modal="true"
        >
            <br>
            <span class="p-float-label">
                 <InputText id="name" type="text" v-model="park.name" />
                 <label for="name">Nombre del parque</label>
             </span>

             <br>

             <span class="p-float-label">
                 <InputText id="description" type="text" v-model="park.description" />
                 <label for="description">Descripción</label>
             </span>

             <br>

             <span class="p-float-label">
                 <InputText id="openingDate" type="text" v-model="park.openingDate" />
                 <label for="openingDate">Fecha de inauguración</label>
             </span>

             <br>

             <span class="p-float-label">
                 <InputText id="province" type="text" v-model="park.province" />
                 <label for="province">Provincia</label>
             </span>

             <br>

             <span class="p-float-label">
                 <InputText id="canton" type="text" v-model="park.canton" />
                 <label for="canton">Cantón</label>
             </span>

             <br>

             <span class="p-float-label">
                 <InputText id="district" type="text" v-model="park.district" />
                 <label for="district">Distrito</label>
             </span>

             <br>

             <span class="p-float-label">
                 <InputText id="address" type="text" v-model="park.address" />
                 <label for="address">Dirección</label>
             </span>

             <br>

             <template #footer>
                 <Button label="Guardar" icon="pi pi-check" @click="save" />
                 <Button label="Cancelar" icon="pi pi-times" @click="closeModal" class="p-button-secondary" />
             </template>

        </Dialog>
    </div>
</template>

<script>
import ParkService from '../service/ParkService';

export default {
    name: 'CrudVue',
    data() {
        return {
            parks: null,
            park : {
                name : null,
                description : null,
                openingDate : null,
                province : null,
                canton : null,
                district : null,
                address : null
            },
            displayModal : false
        }        
    },
    parkService : null,
    created() {
        this.parkService = new ParkService();
    },
    mounted() {
        this.parkService.getAll().then(data => {
            this.parks = data.data;
            console.log(this.parks);
        });
    },
    methods : {
        showSaveModal() {
            this.displayModal = true;
        },
        save() {
            this.parkService.save(this.park).then(data => {
                if(data.status === 200) {
                    this.displayModal = false;
                    this.park = {
                        name : null,
                        description : null,
                        openingDate : null,
                        province : null,
                        canton : null,
                        district : null,
                        address : null
                    };
                    this.getAll();
                }
            })
        },
        closeModal() {
            this.displayModal = false;
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500&display=swap');
    * {
        font-family: 'Inter', sans-serif;
    }

    #addParkBtn {
        float: right;
    }
</style>