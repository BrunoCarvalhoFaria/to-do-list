<template>
  <v-container fluid>
    <v-row align="center">      
      <v-col
        class="d-flex"
        cols="12"
        sm="4"
      >
        <v-select
          :items="items"
          v-model="selectedFilter"
          label="Filtro"          
          outlined
          prepend-inner-icon="mdi-filter-variant"
        ></v-select>
      </v-col>    
      <!-- Filtro por Nome -->
      <v-col
        cols="12"
        sm="6"
        md="8"
        v-if = "selectedFilter == 'Nome'"
      >      
        <NameSearch
          label="Nome da Tarefa"/>
      </v-col>
      <!-- Filtro por data -->
      <v-row v-if = "selectedFilter == 'Data'">
        <v-col
          cols="12"
          sm="6"
          md="4"          
        >
          <DataSearch
            label="De:"/>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"          
        >        
          <DataSearch
            label="Até:"/>
        </v-col>
      </v-row>
      <!-- Filtro por Status -->
      <v-col
        cols="12"
        sm="6"
        md="8"
        v-if = "selectedFilter == 'Status'"
      >      
        <StatusSearch
          labe="Status da Tarefa"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import NameSearch from '../common/Input/NameInput/nameInput.vue';
  import DataSearch from '../common/Input/DataInput/dataInput.vue';
  import StatusSearch from '../common/Input/StatusInput/statusInput.vue';

    export default {
      name: 'SearchBar',

      components: {
        NameSearch,
        DataSearch,
        StatusSearch 
      },
      data: () => ({
        items: ['Nome', 'Data', 'Status'],
        selectedFilter: 'Nome'
      }),
    };
</script>