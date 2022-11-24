<template>
  <div>  
    <v-btn 
        class="ma-2 white--text"                
        color="primary"
        elevation="2"          
        @click="() => {                  
                  addTask = true                  
                  this.$parent.$options.data.taskTemp = this.$store.state.taskDefault;
                  }"              
      >
        Adicionar nova tarefa
    </v-btn> 
    <br>      
    <br>       
      <v-dialog 
        v-model="addTask"      
      >    
        <v-card class="pa-10" outlined shaped> 
          <ModalTaskInfo             
                label='Adicionar tarefa:'
                @save="save()"
                @modalVisible="changeAddTask()"/>
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
    menu2: false
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
