<template>
  <v-text-field
    :label="label"
    solo
    outlined 
    :v-model = "$emit('nameTask')"
    prepend-inner-icon="mdi-magnify"
  ></v-text-field>
</template>

<script>

  export default {
    props: {
      label: String,            
    },
  }
</script>