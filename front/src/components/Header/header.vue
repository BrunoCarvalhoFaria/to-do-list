<template>
  <v-toolbar dark color="#162130" style="height:70px;">
    <v-toolbar-title class="white--text">
      <div>
        <h5>Dev. Bruno</h5>
      </div>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div>
      <h2>To-Do-List</h2>
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn color ='#162130'>Registrar</v-btn>
      <v-btn color ='#162130'>Login</v-btn>
      <v-btn color ='#162130'>sobre</v-btn>
    </v-toolbar-items>     
  </v-toolbar> 
</template>

<script> 
    export default {
      name: 'AppHeader'
    };
</script>