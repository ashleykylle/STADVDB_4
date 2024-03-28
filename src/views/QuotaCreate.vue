<template>
    <div>
      <div class="header">
        <h1>FabriQuote</h1>
      </div>
  
      <div class="beige-layer">
        <a href="#" class="link">Dashboard</a>
        <a href="#" class="link">Quota</a>
        <a href="#" class="link">Materials</a>
        <a href="#" class="link">Settings</a>
      </div>
  
      <div class="buttons">
        <button class="button" id="createButton" @click="toggleButton($event)">Create</button>
        <button class="button" id="historyButton" @click="toggleButton($event)">History</button>
      </div>
  
      <div class="big-box" v-show="activeTab === 'create'">
        <div class="input-container">
    <label for="quotationRegisterId">Quotation Register ID:</label>
    <input type="text" id="quotationRegisterId" name="quotationRegisterId">
</div>
<div class="input-container">
    <label for="salesPerson">Sales Person:</label>
    <input type="text" id="salesPerson" name="salesPerson">
</div>
<div class="input-container">
    <label for="dates">Dates:</label>
    <input type="text" id="dates" name="dates">
</div>
<div class="input-row" id="clientInputs">
  <div class="input-container">
      <label for="client">Client:</label>
      <input type="text" id="client" name="client">
  </div>
  <div class="input-container">
      <label for="clientCompany">Client Company:</label>
      <input type="text" id="clientCompany" name="clientCompany">
  </div>
  <div class="input-container">
      <label for="clientEmail">Client Email:</label>
      <input type="email" id="clientEmail" name="clientEmail">
  </div>
</div>
<div class="input-row" id="clientContactInputs">
  <div class="input-container">
      <label for="clientContactNumber">Client Contact Number:</label>
      <input type="text" id="clientContactNumber" name="clientContactNumber">
  </div>
  <div class="input-container">
      <label for="clientAddress">Client Address:</label>
      <input type="text" id="clientAddress" name="clientAddress">
  </div>
  <div class="options">
    <button id="saveButton">Save</button>
    <button id="exportPdfButton">Export as PDF</button>
    <button id="printButton">Print</button>
  </div>
</div>
<table id="itemTable">
  <thead>
      <tr>
          <th>Item#</th>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
      </tr>
  </thead>
  <tbody>
  </tbody>
</table>
<div class="add-item-container">
  <input type="text" id="addItemInput" placeholder="Add item..." class="add-item-input">
  <button id="addItemButton" class="add-item-button">Add</button>
</div>
<div class="quantity-container">
  <input type="text" id="quantityInput" placeholder="Quantity" class="quantity-input">
</div>
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
  
      <div class="history-content" v-show="activeTab === 'history'">
        <h2>History Tab Content</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  mounted() {
    this.initializeEventListeners();
    this.addRow('001', 'Product A', 10, '$20.00');
    this.addRow('002', 'Product B', 5, '$15.00');
    this.addRow('003', 'Product C', 10, '$30.00');
    this.addRow('004', 'Product D', 5, '$5.00');
  },
  methods: {
    initializeEventListeners() {
      const links = document.querySelectorAll('.link');
      links.forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault();
          links.forEach(link => link.classList.remove('active'));
          event.target.classList.add('active');
        });
      });

      const createButton = document.getElementById('createButton');
      const historyButton = document.getElementById('historyButton');
      createButton.addEventListener('click', () => this.toggleButton(createButton));
      historyButton.addEventListener('click', () => this.toggleButton(historyButton));

      document.getElementById('addItemButton').addEventListener('click', () => {
        const itemName = document.getElementById('addItemInput').value;
        const quantity = document.getElementById('quantityInput').value;
        this.addRowToTable(itemName, quantity);
      });

      document.getElementById('printButton').addEventListener('click', () => window.print());
    },
    toggleButton(button) {
      document.querySelectorAll('.button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    },
    addRowToTable(itemName, quantity) {
      const tableBody = document.querySelector('#itemTable tbody');
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${this.currentItemId++}</td>
        <td>${itemName}</td>
        <td>${quantity}</td>
        <td></td> <!-- Empty cell for Unit Price -->
      `;
      tableBody.appendChild(newRow);
    },
    addRow(itemNumber, itemName, quantity, unitPrice) {
      const tableBody = document.querySelector('#itemTable tbody');
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${itemNumber}</td>
        <td>${itemName}</td>
        <td>${quantity}</td>
        <td>${unitPrice}</td>
      `;
      tableBody.appendChild(newRow);
    }
  },
  data() {
    return {
      currentItemId: 1
    };
  }
};
  </script>
  
  <style scoped>
  
* {
    margin: 0;
    padding: 0;
}

.header {
    background-color: green; 
    color: white; 
    text-align: center; 
    padding: 20px 0; 
    height: 50px; /
}

.header h1 {
    font-size: 52px; 
    font-weight: bold; 
}

.beige-layer {
    background-color: beige; 
    height: 70px; 
    padding-top: 40px;
    padding-left: 400px; 
    display: flex; 
    flex-direction: row; 
}
.link {
    color: black; 
    text-decoration: none; 
    font-size: 28px; 
    margin: 0 110px; 
}

.link:hover {
    text-decoration: underline; 
}
.link.active {
    color: green; 
}

.link.active::before {
    content: '\25A0'; 
    margin-right: 5px; 
}
.button {
    border: 2px solid black;
    background-color: #f0f0f0; 
    padding: 10px 20px; 
    font-size: 16px; 
    cursor: pointer; 
    border-radius: 10px; 
    margin-right: 10px; 
}

.button.active {
    background-color: green; 
    color: white; 
}
.buttons {
    margin-top: 20px; 
    margin-left: 100px;
}

.big-box {
    background-color: #f0f0f0; 
    padding: 20px; 
    border: 2px solid black; 
    border-radius: 10px; 
    margin-top: 20px; 
    margin-left: 100px;
    width: 90%; 
    min-height: 1000px; 
    overflow-y: auto; 
    margin-bottom: -100px; 
}
.input-container {
    margin-bottom: 15px; 
}

.input-container label {
    display: block; 
    margin-bottom: 5px; 
}

.input-container input {
    width: 20%; 
    padding: 10px; 
    border: none; 
    background-color: #dcdcdc; 
    border-radius: 5px; 
}
#clientInputs {
    padding-left: 470px; 
    margin-top: -220px;
}
#client, #clientCompany, #clientEmail {
    width: 25%; 
}
#clientContactInputs{
    width: 100%;
    padding-left: 970px; 
    margin-top: -220px;
}
#clientAddress{
    height: 100px;
}

#itemTable {
    width: 100%; 
    border-collapse: collapse; 
    margin-top: 120px;
}

#itemTable th {
    border: 1px solid #000; 
    padding: 8px; 
}

#itemTable td {
    border: 1px solid #000; 
    padding: 8px; 
}
#itemTable tbody tr:nth-child(even) {
    background-color: #dddddd; 
}
.add-item-container {
    display: flex; 
    align-items: center; 
}

.add-item-input {
    padding: 10px; 
    border: 1px solid #ccc; 
    border-radius: 10px; 
    margin-right: 10px; 
    margin-top: -25px;
    width: 30%;
}

.add-item-button {
    background-color: #4CAF50; 
    color: white; 
    border: none; 
    padding: 10px 20px; 
    border-radius: 10px; 
    cursor: pointer; 
    margin-left: -100px; 
    margin-top: 74px;
    width: 5%;
}

.add-item-button:hover {
    background-color: #45a049; 
}
.quantity-container {
    margin-top: -26px; 
}
.quantity-input {
    width: 20%; 
    padding: 10px; 
    border: 1px solid #ccc;
    border-radius: 10px; 
    font-size: 14px; 
    margin-top: -94px;
}

.user-input-container {
    display: flex; 
    margin-top: -70px; 
    margin-left: 900px;
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
    width: 50%; 
    padding: 10px;
    background-color: #c9c8c8;
    border: 1px solid #7d7d7d; 
    border-radius: 9px; 
}

.options {
    margin-top: -170px;
    margin-bottom: 10px; 
    margin-left: 600px;
}

.options button {
    font-size: 25px;
    display: flex; 
    flex-direction: row;
    background-color: transparent; 
    border: none; 
    color: green; 
    text-decoration: underline; 
    cursor: pointer; 
    margin-top: 10px;
}


.options button:hover {
    color: darkgreen; 
}
  </style>
  