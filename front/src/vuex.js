
import Vue from "vue";
import Vuex from "vuex";
import api from "./services/api";


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    newTask: {
      name: '',
      date: '',
      description: '',
      done: false
    },
    taskDefault: {
      name: '',
      date: '',
      description: '',
      done: false
    },
    taskList: [
      ]
  },

  mutations: {
    loadTaskList: async (state) => {
      await api.get("").then((res) =>{
        state.taskList = res.data;                
      }).catch ((err)  => {
        console.log('ERRO NA REQUISIÇÃO DAS TASKS')
        console.log(err)
      })
    },

    filterTaskList: async (state, filter) => {
      let filterElement = '';
      console.log(filter)

      switch (filter.selectedFilter) {
      case "Nome":
        filterElement = `?name=${filter.filterName.toUpperCase()}`;
      break
      case "Data":
        (filter.filterDate.ate < filter.filterDate.de) ? filterElement='':
        filterElement = `?startDate=${filter.filterDate.de}&finishDate=${filter.filterDate.ate}`;
      break
      case "Status":
        (filter.filterStatus == 'Feito')? filter.filterStatus = 'true': filter.filterStatus = 'false';
        filterElement = `?done=${filter.filterStatus}`;
      break      
      }
      

      console.log(filterElement)
      await api.get(`/${filterElement}`).then((res) =>{
        state.taskList = res.data;                
      }).catch ((err)  => {
        console.log('ERRO NA REQUISIÇÃO DAS TASKS')
        console.log(err)
      })
    },

    changeTaskStatus: async (state, id) => {
      const idIndex = state.taskList.map((task) => task._id);
      const index = idIndex.indexOf(id);
      state.taskList[index].done = !state.taskList[index].done
      await api.post(`/updateTask/${id}`, JSON.parse(JSON.stringify(state.taskList[index]))).then((res) => {
        state.taskList = res.data;            
        state.newTask = state.taskDefault;
      }).catch((err) => {
        console.log(err)
      })
      },
    
    addNewTask: async (state) => { 
      state.newTask.name = state.newTask.name.toUpperCase(); 
      await api.post("/create", JSON.parse(JSON.stringify(state.newTask))).then((res) => {
        state.taskList = res.data
        
        state.newTask = state.taskDefault;
      }).catch((err) => {
        console.log(err)
      })                    
    },

    newTaskMount: (state, taskTemp) => {
      state.newTask = taskTemp;               
    },

    deleteTask: async (state, id) => {      
      await api.get(`/deleteTask/${id}`).then((res) => {
        state.taskList = res.data        
      }).catch((err) => {
        console.log(err)
      })
    },
    editTask: async (state, id) => {  
      state.newTask.name = state.newTask.name.toUpperCase(); 
      await api.post(`/updateTask/${id}`, JSON.parse(JSON.stringify(state.newTask))).then((res) => {
        state.taskList = res.data        
        state.newTask = state.taskDefault;
      }).catch((err) => {
        console.log(err)
      }) 
    },


  },
  getters: {

  },  
})

export  {store}