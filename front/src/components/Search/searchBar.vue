<template>
  <v-container fluid>
    <v-row class="d-flex align-center" >      
      <v-col
        class="d-flex"
        cols="12"
        sm="4"
      >
        <v-select
          :items="items"
          v-model="filter.selectedFilter"
          label="Filtro"          
          outlined
          background-color='blue lighten-5'
          prepend-inner-icon="mdi-filter-variant"
        ></v-select>
      </v-col>    
      <!-- Filtro por Nome -->
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="7"
        v-if = "filter.selectedFilter == 'Nome'"
      >      
        <v-text-field
            label="Nome da Tarefa:"
            solo            
            outlined 
            v-model = 'filter.filterName'
            prepend-inner-icon="mdi-magnify"
            background-color='blue lighten-5'
          ></v-text-field>
      </v-col>
      <!-- Filtro por data -->
      <v-row v-if = "filter.selectedFilter == 'Data'">
        <v-col
          cols="12"
          sm="6"
          md="4"          
        >
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="filter.filterDate.de"
                label="De:"
                prepend-icon="mdi-calendar"
                readonly
                background-color='blue lighten-5'
                v-bind="attrs"
                v-on="on"        
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="filter.filterDate.de"
              @input="menu = false"      
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"          
        >        
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="filter.filterDate.ate"
                label="Até:"
                prepend-icon="mdi-calendar"
                readonly
                background-color='blue lighten-5'
                v-bind="attrs"
                v-on="on"        
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="filter.filterDate.ate"
              @input="menu2 = false"      
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <!-- Filtro por Status -->
      <v-col
        cols="12"
        sm="6"
        md="6"
        v-if = "filter.selectedFilter == 'Status'"
      >      
        <v-select
          :items="itemsStatus"
          v-model="filter.filterStatus"
          label="Status"          
          outlined
          background-color='blue lighten-5'
        ></v-select>
      </v-col>
      <v-spacer></v-spacer>
      
        <v-btn
            class="mr-2 mb-5"                
            color="primary"
            elevation="10"
            fab
            dark    
            small                   
            @click="() => {                  
                      this.$store.commit('filterTaskList',filter)
                      }"              
          >
            <v-icon dark>mdi-magnify</v-icon>
        </v-btn> 
        <v-btn
            class="mr-10 mb-5"                
            color="error"
            elevation="10"
            fab
            dark    
            small  
            @click="() => {                  
                      this.$store.commit('loadTaskList')
                      }"              
          >
            <v-icon dark>mdi-cancel</v-icon>
        </v-btn>
    
    </v-row>
  </v-container>
</template>

<script>
  
  
  

    export default {
      name: 'SearchBar',

      data: () => ({
        items: ['Nome', 'Data', 'Status'],
        filter: {  
          selectedFilter: 'Nome',
          filterName: '',
          filterDate: {
            de:'',
            ate:''
            },
          filterStatus: 'Feito'
        },
        itemsStatus: ['Feito', 'Não Feito'],
        menu2: false,
        menu: false   
      }),
    };
</script>