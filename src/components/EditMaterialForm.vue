<script>
export default {
  props: {
    materialData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      material: this.materialData.material,
      materialRules: [
        value => !!value || 'Material is required',
        value => (value && value.length > 3) || 'Material must be at least 3 characters.'
      ],
      source: this.materialData.source,
      sourceRules: [
        value => !!value || 'Source is required',
        value => (value && value.length > 3) || 'Source must be at least 3 characters.'
      ],
      amount: this.materialData.amount,
      amountRules: [
        value => !!value || 'Amount is required',
        value => (/^[0-9]/.test(value)) || 'Amount must be a number.'
      ],
      price: this.materialData.price.replace(' ₱', ''),
      priceRules: [
        value => !!value || 'Price is required',
        value => (/^\d+(\.\d{1,2})?$/).test(value) || 'Price must be a number.'
      ],
      editing: false
    };
  },
  computed: {
    formattedPrice() {
      if (this.editing) {
        return this.price;
      } else {
        return `${this.price} ₱`;
      }
    }
  },
  methods: {
    submitMaterialForm() {
      const inputMaterialForm = {
        material: this.material,
        source: this.source,
        amount: this.amount,
        price: this.formattedPrice
      };
      this.$emit('submitMaterialForm', inputMaterialForm);
    },
    isFormValid() {
      return (
        this.materialRules.every(rule => rule(this.material) === true) &&
        this.sourceRules.every(rule => rule(this.source) === true) &&
        this.amountRules.every(rule => rule(this.amount) === true) &&
        this.priceRules.every(rule => rule(this.price) === true)
      );
    },
    cancelForm() {
      this.$emit('cancelForm');
    }
  }
};
</script>

<template>
  <div class="inputForm">
    <v-form fast-fail @submit.prevent="submitMaterialForm">
      <div>EDITING Materials</div>

      <v-text-field v-model="material" :rules="materialRules" placeholder="Material"></v-text-field>

      <v-text-field v-model="source" :rules="sourceRules" placeholder="Source"></v-text-field>

      <v-text-field v-model="amount" :rules="amountRules" placeholder="Amount"></v-text-field>

      <v-text-field v-model="price" :rules="priceRules" placeholder="Price per pc"></v-text-field>

      <div class="buttonFormat">
        <v-btn type="submit" :disabled="!isFormValid()" class="adjustButton">Apply</v-btn>
        <v-btn @click="cancelForm" class="adjustButton">Cancel</v-btn>
      </div>
    </v-form>
  </div>
</template>
<style scoped>
.inputForm {
  width: 300px;
  margin: auto;
  margin-left: 10px;
  padding: 2.5%;
  border: 1px solid;
}

.buttonFormat {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}

.adjustButton {
  width: 10%;
  height: 10vh;
}
</style>
