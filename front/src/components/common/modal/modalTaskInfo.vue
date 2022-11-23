<template>
  <div>
    <p>{{label}}</p>    
    <v-row 
        align="center">      
        <v-col
          class="d-flex"
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Nome da Tarefa"
            solo
            outlined 
            v-model ="taskTemp.name"    
          ></v-text-field>
        </v-col> 
        <v-col
          class="d-flex"          
          sm="4"
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
                v-model="taskTemp.date"
                label="Data da tarefa"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"        
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="taskTemp.date"
              @input="menu2 = false"      
            ></v-date-picker>
          </v-menu>
        </v-col>  
        <v-col
          class="d-flex"          
          sm="10"
        >
          <v-text-field
            label="Descrição da Tarefa"
            solo
            outlined 
            v-model ="taskTemp.description"    
          ></v-text-field>
        </v-col>
      </v-row> 
      <v-row>
        <v-btn 
          class="ma-2 white--text"                
          color="success"                
          @click="()=>{
                    this.$store.commit('newTaskMount',taskTemp)
                    $emit('save')}"          
        >
          Salvar
        </v-btn>
        <v-btn 
          class="ma-2 white--text"                
          color="error"
          @click="$emit('changeAddTask')"               
        >
          Cancelar
        </v-btn>            
      </v-row>
    </div> 
</template>

<script>


export default{ 
  data: () => ({ 
    taskTemp: {          
      name: '',
      description: '',
      date: '',
      done: false
    },        
    addTask: false,    
    menu: false,
    modal: false,
    menu2: false
  }),
  props: {      
      label: String,      
    },

  computed: {
        
  }  
}
</script>
