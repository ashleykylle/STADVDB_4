<template>
  <div class="mainContainer">
    <div class="buttonContainer">
      <v-btn variant="text" class="button" to="/">Create</v-btn>
      <v-btn variant="text" class="button" disabled>History</v-btn>
    </div>
    <div class="formAndTableContainer">
      <div class="input-container">
        <label for="quotationRegisterId">Quotation Register ID:</label>
        <input type="text" id="quotationRegisterId" v-model="quotationId">
      </div>
      <div class="input-container">
        <label for="salesPerson">Sales Person:</label>
        <input type="text" id="salesPerson" v-model="salesPerson">
      </div>
      <div class="input-container">
        <label for="dates">Dates:</label>
        <input type="text" id="dates" v-model="quotationDates">
      </div>
      <div class="input-container input-container4">
        <label for="client">Client:</label>
        <input type="text" id="client" v-model="client">
      </div>
      <div class="input-container input-container5">
        <label for="clientCompany">Client Company:</label>
        <input type="text" id="clientCompany" v-model="clientCompany">
      </div>
      <div class="input-container input-container6">
        <label for="clientEmail">Client Email:</label>
        <input type="email" id="clientEmail" v-model="clientEmail">  </div>
        <div class="input-container input-container7">
        <label for="clientContactNumber">Contact Number:</label>
        <input type="tel" id="clientContactNumber" v-model="clientContactNumber">  </div>
      <div class="input-container input-container8">
        <label for="clientAddress">Client Address:</label>
        <input type="text" id="clientAddress" v-model="clientAddress"></div>
        <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Item#</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
            </tr>
          </thead>
          <tbody>
            <tbody>
  <tr>
    <td>1</td>
    <td>Stapler</td>
    <td>5</td>
    <td>$10.00</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Pens</td>
    <td>12</td>
    <td>$2.50</td>
  </tr>
</tbody>
            </tbody>
        </table>
      </div>
      <div class="add-item-container">
        <input type="text" id="add-item-input" placeholder="Add item..." />
      </div>
      <div class="quantity-item-container">
        <input type="number" id="quantity-input" placeholder="Quantity" min="1" />
      </div>
      <button class="add-button" @click="addItem">Add</button>  
      <div class="user-input-container">
  <div class="user-input-item">
      <label for="subtotal">Subtotal:</label>
      <input type="text" id="subtotal" class="rounded-input">
  </div>
  <div class="user-input-item">
      <label for="taxRate">Tax Rate:</label>
      <input type="text" id="taxRate" class="rounded-input">
  </div>
  <div class="user-input-item">
      <label for="salesTax">Sales Tax:</label>
      <input type="text" id="salesTax" class="rounded-input">
  </div>
  <div class="user-input-item">
      <label for="total">Total:</label>
      <input type="text" id="total" class="rounded-input">
  </div>
</div>
      </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      quotationId: '',
      salesPerson: '',
      quotationDates: '',
      client: '',
      clientCompany: '',
      clientEmail: '',
    }   
  }
};
</script>




<style scoped>
.mainContainer {
  display: flex; 
  flex-direction: column; 
}

.buttonContainer {
  display: flex;
  justify-content: space-around;
  width: 13%;
  margin-left: 92px;
  margin-top: 20px;
}

.button {
  background-color: aliceblue;
  border: 2px solid black;
  border-radius: 7px;
  cursor: pointer;
}

.button:disabled {
  opacity: 0.5;
  cursor: default;
}

.formAndTableContainer {
  background-color: rgb(228, 226, 226); 
  border: 1px solid black; 
  padding: 10px; 
  margin-top: 20px; 
  margin-left: 100px;
  width: 1500px; 
  height: 900px; 
  border-radius: 5px; 
}

.input-container {
  margin-bottom: 10px; 
  margin-left: 10px;
  text-align: left; 
}
.input-container label {
  color: black;
  display: block;
  width: 150px; 
  margin-right: 10px; 
  
}
.input-container input {
    width: 300px;
    height: 30px;
    border: none; 
    background-color: #cbcbcb; 
    border-radius: 5px; 
}

.input-container4{
  margin-top: -190px;
  margin-left: 400px; 
}
.input-container5{
  margin-bottom: 190px;
  margin-left: 400px; 
}
.input-container6{
  margin-top: -180px;
  margin-left: 400px; 
}
.input-container7{
  margin-top: -190px;
  margin-left: 800px; 
}
.input-container8{
  margin-bottom: -100px;
  margin-left: 800px; 
 
}
.input-container8 input{
  width: 300px; 
  height: 100px; 
}
table {
  border-collapse: collapse; 
  width: 100%;
}

th, td {
  border: 2px solid black; 
  padding: 5px; 
  text-align: left; 
}
th{
  text-align: center;
}
.table-container {
  margin-top: 150px;
  margin-left: 5px; 
}
#add-item-input{
  width: 400px;
  background-color: white; 
  border: 1px solid #ccc; 
  border-radius: 10px; 
  padding: 5px; 
  margin-top: 20px;
  margin-left: -845px;
  margin-right: 210px; /
}
#quantity-input {
  background-color: white; 
  border: 1px solid #ccc; 
  border-radius: 10px; 
  padding: 5px; 
  margin-left: -1270px;
  margin-top: 10px;
}
.add-button {
  width: 100px;
  background-color: green; 
  color: white; 
  border: none; 
  padding: 5px 10px; 
  cursor: pointer; 
  border-radius: 5px; 
  margin-right: 760px;
  position: relative; 
  top: -35px;
}
.user-input-container {
    display: flex; 
    margin-top: -110px; 
    margin-left: 500px;
    text-align: left;
}

.user-input-item {
    flex: 1; 
    margin-right: 10px; 
}

.user-input-item label {
    display: block; 
    margin-bottom: 5px; 
}

.rounded-input {
    width: 80%; 
    padding: 10px;
    background-color: #c9c8c8;
    border: 1px solid #7d7d7d; 
    border-radius: 9px; 
}
</style>
