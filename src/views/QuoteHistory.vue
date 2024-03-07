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
          height: 75vh;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: auto;
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

     }
     .item .left {

     }
</style>