<template>
  <v-card
    class="mx-auto"     
  >
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="7">
          <div>Nome:</div>
          <p class="text-h4 text--primary">
            {{name}}
          </p>  
        </v-col>
        <v-spacer/>               
        <v-col
          cols="12"
          sm="6"
          md="2">
          <v-btn
            outlined
            x-small
            fab
            color="indigo"
            @click="$emit('editTask')"
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
      </v-row>
      <div>data:</div>
      <p class="text-h5 text--primary">
        {{date}}
      </p>
      <div>Descrição:</div>
      <p class="text-h6 text--primary">
        {{description}}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn 
        class= "ma-2"                
        color= "success"
        v-if = "done === true"
        @click="$emit('changeStatus')"        
      >
        FEITO
      </v-btn>
      <v-btn 
        class="ma-2"                
        color="error"
        @click="$emit('changeStatus')"
        v-if = "done === false"
      >
        NÃO FEITO
      </v-btn>
    </v-card-actions>    
  </v-card>
</template>

<script>
  export default {
    name: 'TaskUnit',

    props: {
      name: String,
      date: String,
      description: String,
      done: Boolean
    },
    
    data: () => ({
      
    }),
  };


</script>
