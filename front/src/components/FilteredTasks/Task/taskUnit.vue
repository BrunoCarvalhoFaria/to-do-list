<template>
  <v-card     
    color='blue lighten-5'
    class="rounded-xl mx-auto transition-swing"
    elevation="12"       
  >
    <v-app-bar
      dark
      color="blue"
    >
      <v-toolbar-title class="text-uppercase">{{task.name}}</v-toolbar-title>
      <v-spacer></v-spacer>      
    </v-app-bar>
    <v-container >
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-card-subtitle class='pt-2 pb-0'>data:</v-card-subtitle>
            <v-card-text class="text-h5 font-weight-regular text--primary pt-0">
              {{task.date}}
            </v-card-text>
            <v-card-text class='pt-0 pb-0'>Descrição:</v-card-text>
            <v-card-text  class="text-h5 font-weight-regular text--primary pt-0 text-justify">
              {{task.description}}
            </v-card-text>            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions >
      <v-col
          cols="12"
          sm="6"
          md="8">
        <v-btn 
          class= "ma-2"                
          color= "success"
          v-if = "task.done === true"
          @click="$emit('changeStatus')"        
        >
          FEITO
        </v-btn>
        <v-btn 
          class="ma-2"                
          color="error"
          @click="$emit('changeStatus')"
          v-if = "task.done === false"
        >
          NÃO FEITO
        </v-btn>
      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4">
          <v-btn
            outlined
            x-small
            fab
            color="indigo"
            @click="() => {
              this.$store.commit('newTaskMount', task)                                          
              $emit('editTask')                        
              }"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>  
          <v-btn
            outlined
            x-small
            fab
            color="indigo"
            @click="$emit('deleteTask')"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>         
      </v-col>
    </v-card-actions>    
  </v-card>
</template>

<script>
  export default {
    name: 'TaskUnit',
    props: {
      task: {
        _id:String,
        name: String,
        date: String,
        description: String,
        done: Boolean      
      }
    },
    
    data: () => ({
      
    }),
  };


</script>
