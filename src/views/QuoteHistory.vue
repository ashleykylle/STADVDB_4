<script>
import QuoteItemBar from '@/components/QuoteItemBar.vue'
import { ref } from 'vue'
import { API_URL } from '@/api/api_url'

export default {
     components: {
          QuoteItemBar
     },
     setup() {
          const quoteList = ref([
               {
                    _id: 1,
                    createdDate: "01/01/2024",
                    client: "Client",
                    company: "Company",
                    salesPerson: "Sales Person",
                    total: 2132,
                    registerID: "RegisterID"
               }
          ])

          const getQuoteList = async() => {
               const response = fetch(`${API_URL}/quote`, {
                    method: "GET",
                    headers: {
                         "Content-Type": "application/json"
                    }
               }).then()
          }
          const calculatedTax = 500 * 0.12
          return {
               quoteList,
               calculatedTax
          }
     }
     
}
</script>
<template>
     <div class="mainPage">
          <div class="pageHeader">
               <v-btn variant="outlined" class="button">Create</v-btn>
               <v-btn variant="outlined" class="button" disabled="true">History</v-btn>
          </div>
          <div class="frame">
               <QuoteItemBar v-if="quoteList" v-for="quote in quoteList" :key=quote._id
                                   :_id="quote._id"
                                   :createdDate="quote.createdDate"
                                   :client="quote.client" :total="quote.total"
                                   :company="quote.company" 
                                   :salesPerson="quote.salesPerson" :registerID="quote.registerID">
               </QuoteItemBar>
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

     
</style>