
import Vue from "vue";
import Vuex from "vuex";
import api from "./services/api";


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    newTask: {
      id: 0,
      name: '',
      date: '',
      description: '',
      done: false
    },
    taskDefault: {
      id: 0,
      name: '',
      date: '',
      description: '',
      done: false
    },
    taskList: [
      ]
  },

  mutations: {
    changeTaskStatus: async (state, index) => {
      try{
        state.taskList[index].done = !state.taskList[index].done      
      } catch {
        console.log("ERRO AO ALTERAR STATUS DA TAREFA")
      }        

      },
    
    addNewTask: async (state) => {
      (state.taskList.length === 0) ? state.newTask.id = 0 : state.newTask.id =  state.taskList[state.taskList.length - 1].id + 1;
      try {
        console.log('dado a ser salvo', state.newTask)
        console.log('lista de dados', state.taskList)
        console.log('dado default', state.newTask)
        console.log('lista de dados apos salvar', state.taskList)

        //state.taskList.push(state.newTask);
        await api.post("/create", state.newTask)
        state.newTask = state.taskDefault;
        
      } catch {
        console.log('ERRO AO ADICIONAR TAREFA')
      }      
    },

    newTaskMount: (state, taskTemp) => {
      state.newTask = taskTemp;               
    },

    deleteTask: async (state, index) => {      
      try {
        state.taskList.splice(index, 1)
      } catch{
        console.log('ERRO AO DELETAR TAREFA')
      }
    },
    editTask: async (state, index) => {   
      try{
        state.taskList.splice(index, 1, (state.newTask));  
        state.newTask = state.taskDefault;
      } catch{
        console.log('ERRO AO EDITAR TAREFA')
      }
    },


  },
  getters: {

  },  
})

export  {store}