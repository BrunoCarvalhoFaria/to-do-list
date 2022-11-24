<template >
  <div>
    <p class="text-h5">{{label}}</p>    
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
            background-color='blue lighten-5'
            v-model ="taskTemp.name"  
            :rules="nameRules"                       
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
                background-color='blue lighten-5'
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
            background-color='blue lighten-5'            
            v-model ="taskTemp.description"    
          ></v-text-field>
        </v-col>
      </v-row> 
      <v-row>
        <v-btn 
          class="ma-2 white--text"                
          color="success"                
          @click="()=> {
                    this.$store.commit('newTaskMount',taskTemp)
                    $emit('save')}"          
        >
          Salvar
        </v-btn>
        <v-btn 
          class="ma-2 white--text"                
          color="error"
          @click="() => {
            this.$store.commit('newTaskMount',this.$store.taskDefault)
            $emit('modalVisible')}"
        >
          Cancelar
        </v-btn>            
      </v-row>
    </div> 
</template>

<script>

export default{
  mounted(){
    // console.log('entrei no mounted')
    // this.taskTemp = this.$store.state.newTask    
  },
  data: () => ({ 
    nameRules: [
        v => !!v || 'Name is required'        
      ],
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
