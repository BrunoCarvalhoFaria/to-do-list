<template>
  <div>
    <hr>    
    <AddTask/>    
    
    <v-row>
      <v-col       
        cols="12"
        sm="6"
        md="3"      
        v-for="(task, index) in taskList" 
        :key="index">
        <TaskUnit 
              :name = "taskList[index].name"
              :date = "taskList[index].date"
              :description = "taskList[index].description"
              :done = "taskList[index].done"
              @changeStatus = "changeTaskStatus(index)"
              @deleteTask = "deleteTask(index)"
              @editTask = "defineEditTask(index)"
              />
        <v-dialog
          v-model="editTaskModalVisible"      
        >
          <v-card class="pa-10" outlined shaped>
            <ModalTaskInfo              
              label='Editar tarefa:'
              @save="editTaskCall(editIndex)"
              @changeAddTask="changeeditTaskModalVisible()"/>
          </v-card>
        </v-dialog>  
      </v-col>
    </v-row>     
  </div>
</template>

<script>
import TaskUnit from "./Task/taskUnit.vue";
import AddTask from './AddTask/addTask.vue';
import {mapState, mapMutations} from 'vuex'
import ModalTaskInfo from '../common/modal/modalTaskInfo.vue'
// import api from "../../services/api"

// const requestTaskList = async () => {
//   await api.get("").then((res) =>{
//     console.log("resposta: ", res)
//     return res
//   }).catch ((err)  => {
//     console.log('ERRO NA REQUISIÇÃO')
//     console.log(err)
//   })
// }

export default { 

  beforeMount(){
    console.log("RODOU O MOUNTED")
    //requestTaskList();
  },

  components: {
    TaskUnit,
    AddTask,
    ModalTaskInfo
  },

  computed: {
    ...mapState({
      taskList: state => state.taskList
    })    
  },


  data: () => ({
    editTaskModalVisible: false,
    editIndex: 0
  }),

  methods:{
    ...mapMutations([
      'changeTaskStatus',
      'deleteTask',
      'editTask'
    ]),
    editTaskCall: function(index) {      
      this.editTaskModalVisible = false;
      this.editTask(index);
      this.editIndex = 0;
    },
    defineEditTask: function(index){
      console.log('entrei no edit task')
      this.$store.commit('newTaskMount',this.$store.state.taskList[index])
      this.editIndex = index
      this.editTaskModalVisible = true
    },
    changeeditTaskModalVisible: function () {this.editTaskModalVisible = !this.editTaskModalVisible },         
  }
};


</script>
