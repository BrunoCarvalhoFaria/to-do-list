<template>
<header>
  <v-toolbar dark color='blue' style="height:65px;">
    <v-toolbar-title class="">
      <div>
        <h5>Dev. Bruno</h5>
      </div>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div>
      <h2>To-Do-List</h2>
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-items>      
      <v-btn elevation='0' color ='blue'  @click="about = true">sobre</v-btn>
    </v-toolbar-items>     
  </v-toolbar> 
  <v-dialog
          v-model="about"      
        >
    <v-card class="pa-10" outlined shaped> 
      <v-row>
        <v-col>          
          <v-img
            lazy-src="https://i.ibb.co/Pc6Gszg/aboutimg.jpg"
            src='https://i.ibb.co/Pc6Gszg/aboutimg.jpg'
            height="800"            
          ></v-img>
        </v-col>
        <v-col>
          <div class="d-flex justify-end mb-6">         
            <v-icon @click="about=false" >mdi-close</v-icon>          
          </div>
          <v-card-title>Funcionalidade do Projeto:</v-card-title>
          <ul>
            <li>Filtros:</li>
              <ul>
                <li>Nome: O sistema busca no banco de dados MongoDB a tarefa que possui o texto digitado no filtro</li>
                <li>Data: O sistema busca por um intervalo de datas. </li>
                <ul>
                  <li>Caso a data final seja menor que a inicial ele não realiza a busca.</li>  
                  <li>Caso apenas a data inicial seja passada ele buscará apenas tarefas daquela data.</li>  
                </ul>
                <li>Status: O sistema busca por eventos de acordo com o status selecinado</li>
              </ul>
            <li>As tarefas sempre serão exibidas e armazenadas por ordem da data da tarefa</li>
          </ul>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
  </header>
</template>

<script> 
    export default {
      name: 'AppHeader',

      data: () => ({
        about: false
      }),

    };
    
</script>