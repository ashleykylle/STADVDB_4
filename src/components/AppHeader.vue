<template>
     <div class="header">
          <div class="logo"> 
               <img class="logo" src="@/assets/images/img_logo_fabriquote.svg"> 
          </div>
          <div class="clickableHeader">
               <dash_item><a href="/">Dashboard</a></dash_item>
               <dash_item><a href="/quota">Quota</a></dash_item>
               <dash_item><a href="/material">Material</a></dash_item>
               <dash_item><a href="#">Settings</a></dash_item>
          </div>
     </div>
</template>
<style>
.header div.logo {
     background-color: #355E3B;
     display: flex;
     justify-content: center;
     padding: 1em;
}
.clickableHeader {
    background-color: #BCB88A;
    color: #464646;
    padding: 0.5%;
    display: flex;
    place-items: start;
    justify-content: space-evenly;
}

.clickableHeader a {
     color: #464646;
}

.clickableHeader a:hover {
     color: #014421;
     font-weight: bold;
     background: none;
}

dash_item {
     display: flex;
}
</style>