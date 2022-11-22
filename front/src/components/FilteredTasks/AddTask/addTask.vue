<template>
  <div>
    <v-btn 
        class="ma-2 white--text"                
        color="blue darken-4"
        @click="() => {                  
                  addTask = true}"              
      >
        Adicionar nova tarefa
    </v-btn>
    <v-dialog
      v-model="addTask"
      
    >
      <v-card class="pa-10" outlined shaped>
        <ModalTaskInfo              
              label='Adicionar tarefa:'
              @save="save()"
              @changeAddTask="changeAddTask()"/>
      </v-card>
    </v-dialog>        
  </div>
</template>

<script>

import {mapMutations} from 'vuex'
import ModalTaskInfo from '../../common/modal/modalTaskInfo.vue'


export default {  
  
  components: {
    ModalTaskInfo
  },  

  data: () => ({        
    addTask: false,    
    menu: false,
    modal: false,
    menu2: false,
    taskDefault: {
      id: 0,       
      name: '',
      description: '',
      date: '',
      done: false
    }
  }),

  methods: {
    ...mapMutations([
      'addNewTask'
    ]),
    changeAddTask: function () {this.addTask = !this.addTask },
    save: function () {      
      this.addTask = false;               
      this.addNewTask()       
    },    
  }
  
}
</script>
