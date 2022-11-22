<template>
  <v-select
          :items="items"
          v-model="StatusTask"
          :label="label"          
          outlined
        ></v-select>
</template>
<script>
    export default {
      name: 'StatusSearch',
      props: {
        label: String,      
      },
      data: () => ({
        items: ['Feito', 'Não Feito'],
        selectedFilter: ''
      }),
    };
</script>
