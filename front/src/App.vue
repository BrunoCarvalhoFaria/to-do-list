<template>
  <v-app>      
    <v-main>
      <Header/>      
      <SeachBar/>      
      <TaskList/>      
    </v-main>
  </v-app>
</template>

<script>
import SeachBar from './components/Search/searchBar.vue';
import Header from './components/Header/header.vue';
import TaskList from './components/FilteredTasks/taskList.vue';

export default {
  name: 'App',

  components: {
    SeachBar,
    Header,
    TaskList
  },

  data: () => ({
    //
  }),
};
</script>