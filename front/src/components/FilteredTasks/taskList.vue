<template>
  <div> 
    <v-divider></v-divider>  
    <AddTask/>    
    <v-row>
      <v-col       
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"

        max-width='100'              
        v-for="(task, index) in taskList" 
        :key="index">
        <TaskUnit 
              :task = "taskList[index]"              
              @changeStatus = "changeTaskStatus(taskList[index]._id, index)"
              @deleteTask = "deleteTask(taskList[index]._id)"
              @editTask = "defineEditTask(index)"
              />         
      </v-col>
      <v-dialog
          v-model="editTaskModalVisible"      
        >
          <v-card class="pa-10" outlined shaped>
            <ModalTaskInfo              
              label='Editar tarefa:'
              @save="editTaskCall(editIndex)"
              @modalVisible="changeEditTaskModalVisible()"/>
          </v-card>
        </v-dialog> 
    </v-row>     
  </div>
</template>

<script>
import TaskUnit from "./Task/taskUnit.vue";
import AddTask from './AddTask/addTask.vue';
import {mapState, mapMutations} from 'vuex'
import ModalTaskInfo from '../common/modal/modalTaskInfo.vue'


export default { 

  beforeMount(){    
    this.loadTaskList()
    
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
      'editTask',
      'loadTaskList'
    ]),
    editTaskCall: function(index) {      
      this.editTaskModalVisible = false;
      this.editTask(this.$store.state.taskList[index]._id)
      this.editIndex = 0;
    },
    defineEditTask: function(index){  
      this.$parent.$options.data.taskTemp = this.$store.state.newTask;
      console.log(this.$parent.$options.data.taskTemp)
      this.editIndex = index;      
      this.editTaskModalVisible = true;      
    },
    changeEditTaskModalVisible: function () {      
      this.editTaskModalVisible = false       
    },         
  }
};


</script>
