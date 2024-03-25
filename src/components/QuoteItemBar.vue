<script>
export default {
     props: ['_id','createdDate', 'client', 'company', 'salesPerson','total', 'registerID'],
     setup(props) {
          const salesTax = props.total * 0.12
          return {
               salesTax
          }
     }

}
</script>
<template>
     <div class="item">
          <div class="right">
               <span class="date">{{ createdDate }}</span>
          </div>
          <div class="center">
               <div class="top"><span class="start">{{ client }}</span><span class="end"> ₱ {{  total  }}</span></div>
               <div class="mid"><span class="start">{{ company }}</span><span class="end"> ₱ {{ salesTax }}</span></div>
               <div class="bot"><span class="start">{{ salesPerson }}</span><span class="end">{{ registerID }}</span></div>
          </div>
          <div class="left">
               <span class="link edit">Edit</span>
               <span class="link export">Export as PDF</span>
               <span class="link print">Print</span>
               <span class="link delete">Delete</span>
          </div>
     </div>
</template>
<style scoped>
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