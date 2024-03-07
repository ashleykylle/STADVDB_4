<script>
     import { ref } from 'vue';
</script>

<template>
     <div class="mainPage">
          <div class="pageHeader">
               <v-btn variant="outlined" class="button">Create</v-btn>
               <v-btn variant="outlined" class="button" disabled="true">History</v-btn>
          </div>
          <div class="frame">
               <div class="item">
                    <div class="right">
                         <span class="date">01/01/24</span>
                    </div>
                    <div class="center">
                         <div class="top"><span class="start">Client</span><span class="end">Total</span></div>
                         <div class="mid"><span class="start">Company</span><span class="end">Sales Tax</span></div>
                         <div class="bot"><span class="start">Sales Person</span><span class="end">Register ID</span></div>
                    </div>
                    <div class="left">
                         <span class="link edit">Edit</span>
                         <span class="link export">Export as PDF</span>
                         <span class="link print">Print</span>
                         <spand class="link delete">Delete</spand>
                    </div>
               </div>
               <div class="item">
                    <div class="right">
                         <span class="date">01/01/24</span>
                    </div>
                    <div class="center">
                         <div class="top"><span class="start">Client</span><span class="end">Total</span></div>
                         <div class="mid"><span class="start">Company</span><span class="end">Sales Tax</span></div>
                         <div class="bot"><span class="start">Sales Person</span><span class="end">Register ID</span></div>
                    </div>
                    <div class="left">
                         <span class="link edit">Edit</span>
                         <span class="link export">Export as PDF</span>
                         <span class="link print">Print</span>
                         <spand class="link delete">Delete</spand>
                    </div>
               </div>
               <div class="item">
                    <div class="right">
                         <span class="date">01/01/24</span>
                    </div>
                    <div class="center">
                         <div class="top"><span class="start">Client</span><span class="end">Total</span></div>
                         <div class="mid"><span class="start">Company</span><span class="end">Sales Tax</span></div>
                         <div class="bot"><span class="start">Sales Person</span><span class="end">Register ID</span></div>
                    </div>
                    <div class="left">
                         <span class="link edit">Edit</span>
                         <span class="link export">Export as PDF</span>
                         <span class="link print">Print</span>
                         <spand class="link delete">Delete</spand>
                    </div>
               </div>
               <div class="item">
                    <div class="right">
                         <span class="date">01/01/24</span>
                    </div>
                    <div class="center">
                         <div class="top"><span class="start">Client</span><span class="end">Total</span></div>
                         <div class="mid"><span class="start">Company</span><span class="end">Sales Tax</span></div>
                         <div class="bot"><span class="start">Sales Person</span><span class="end">Register ID</span></div>
                    </div>
                    <div class="left">
                         <span class="link edit">Edit</span>
                         <span class="link export">Export as PDF</span>
                         <span class="link print">Print</span>
                         <spand class="link delete">Delete</spand>
                    </div>
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
          flex-direction: row;
          margin-left: auto;
          margin-right: auto;
          margin-top: auto;
          margin-bottom: .5em; 
          width: 90%;
     }

     .button:disabled {
          opacity: 100;
          background-color: #355E3B;
          color: #E9E9E9;
     }

     .button {
          background-color: #E9E9E9;
          margin: 10px;
          border-radius: 10px;
          border-width: 2px;
          border-color: #355E3B;
     }

     .index {
          display: flex;
          flex-direction: row;
          background-color: #355E3B;
          color: #f2f2f2;
     }
     .frame {
          display: flex;
          flex-direction: column;
          background-color: #D9D9D9;
          min-height: 75vh;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: .5em;
          width: 90%;
          padding: 1.5em;
          border-radius: 25px;
     }

     .item {
          display: flex;
          flex-direction: row;
          min-height: 12em;
          border-radius: 25px;
          background-color: #E9E9E9;
          background-clip: border-box;
          margin-bottom: 2em;
     }

     .item:last-child {
          margin-bottom: 0;
     }

     .item .right {
          display: flex;
          background-color: #B6B6B6;
          width: 12%;
          height: inherit;
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;
          justify-content: center;
          align-items: center;
     }

     .item .date
     {
          font-size: 1.5em;
          font-weight: bold;
     }

     .item .center {
          display: flex;
          width: 75%;
          height: inherit;
          padding: 0 2em;
          margin: 1em 0;
          border-right: 2px solid #D9D9D9;
          justify-content: space-between;
          flex-direction: column;
     }

     .item .center div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: large;
     }

     .item .center .top span{
          font-size: x-large;
          font-weight: bold;
     }

     .item .left {
          display: flex;
          flex-direction: column;
          width: 13%;
          height: inherit;
          align-items: center;
          justify-content: center;
     }

     .item .left .link {
          color:#355E3B;
          font-size: 1.1em;
          text-decoration: underline;
          cursor: pointer;
     }
     .item .left .link.delete {
          color:#DA2B2B;
     }
</style>