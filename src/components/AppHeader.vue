<template>
     <div class="header">
          <div class="logo"> 
               <img class="logo" src="@/assets/images/img_logo_fabriquote.svg"> 
          </div>
          <div class="clickableHeader">
               <RouterLink to="/">Dashboard</RouterLink>
               <RouterLink to="/quota">Quota</RouterLink>
               <RouterLink to="/material">Material</RouterLink>
               <RouterLink to="#">Setting</RouterLink>
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
</style>