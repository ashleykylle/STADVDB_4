<script setup>
import MaterialBar from '@/components/MaterialBar.vue';
import NewMaterialForm from '@/components/NewMaterialForm.vue';
import EditMaterialForm from '@/components/EditMaterialForm.vue';
import { ref, computed, watch } from 'vue';

const addingShowForm = ref(false);
const editingShowForm = ref(false);
const allMaterials = ref([
  {
    material: 'LEADED STEEL',
    source: 'ALLOYS INC.',
    amount: '20',
    price: '10 ₱'
  }
]);

const searchQuery = ref('');
const selectedMaterial = ref(null);

const filteredMaterials = computed(() => {
  return allMaterials.value.filter(material => {
    return material.material.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

const addMaterial = (newMaterial) => {
  allMaterials.value.push(newMaterial);
  addingShowForm.value = false;
  editingShowForm.value = false;
};

const selectEditMaterial = (material) => {
  selectedMaterial.value = material;
  addingShowForm.value = false;
  editingShowForm.value = true;
};

const editMaterial = (editedMaterial) => {
  const index = allMaterials.value.findIndex(material => material === selectedMaterial.value);
  if (index !== -1) {
    allMaterials.value.splice(index, 1, editedMaterial);
    selectedMaterial.value = null;
    editingShowForm.value = false;
  }
};

const cancelForm = () => {
  selectedMaterial.value = null;
  addingShowForm.value = false;
  editingShowForm.value = false;
};

//For debug
watch(searchQuery, () => {
  console.log('Search query changed:', searchQuery.value);
});
</script>
<template>
  <div class="mainPage">
    <div class="pageHeader">
      <v-btn @click="addingShowForm = !addingShowForm" variant="outlined" class="button"> Adding </v-btn>
      <v-text-field v-model="searchQuery" clearable class="searchbar" variant="outlined" density="compact" placeholder="Search Material..."></v-text-field>
    </div>
    <div class="frame">
      <div class="itemDisplay">
        <MaterialBar class="index" material="Material" source="Source" price="Price / Unit" amount="Amount"></MaterialBar>
        <MaterialBar class="item" v-for="material in filteredMaterials" :key="material.material"
                      :material="material.material" :source="material.source" 
                      :amount="material.amount" :price="material.price"
                      @click="selectEditMaterial(material)"
                      :class="{ 'highlighted': selectedMaterial === material }">
        </MaterialBar>
      </div>
      <div v-if="addingShowForm || editingShowForm">
        <NewMaterialForm v-if="addingShowForm" @submitMaterialForm="addMaterial" @cancelForm="cancelForm"></NewMaterialForm>
        <EditMaterialForm v-else-if="editingShowForm" :materialData="selectedMaterial" @submitMaterialForm="editMaterial" @cancelForm="cancelForm"></EditMaterialForm>
      </div>
    </div>
  </div>
</template>
<style scoped>
     .mainPage {
          display: flex;
          flex-direction: column;
          background-color: #f2f2f2;
          min-height: 90vh;
          color: black;
     }
     .pageHeader{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: auto auto -10px auto;
          width: 80%;
     }
     .button {
         background-color: #D9D9D9;
         margin-right: 10px;
         width: 7%;
     }
     .searchbar {
          margin-top: 20px;
          background-color: #f2f2f2;
     }
     .index {
          display: flex;
          flex-direction: row;
          background-color: #355E3B;
          color: #f2f2f2;
     }
     .item {
          display: flex;
          flex-direction: row;
          background-color: #b6b6b6;
          color: #000000;
          cursor: pointer;
     }
     .frame {
          display: flex;
          flex-direction: row;
          background-color: #D9D9D9;
          height: 75vh;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: auto;
          width: 90%;
          padding: 10px;
          border-radius: 25px;
          overflow: hidden;
     }
     .itemDisplay {
          width: 100%;
          display: flex;
          flex-direction: column;
     }
     .highlighted {
          outline: 2px solid #355E3B;
     }
</style>