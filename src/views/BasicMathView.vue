

<template>
<v-container fluid>
  <v-text-field label="First Input" v-model.number="fNumber"></v-text-field>
  <v-text-field label="Second Input" v-model.number="sNumber"></v-text-field>

  <v-btn @click="doSum">Result</v-btn>
  
  {{sum}}

</v-container>
 </template>

<script setup>
  import {ref} from 'vue'

  const fNumber=ref(0)
  const sNumber=ref(0)
  const sum=ref(0)

  function doSum(){
    sum.value = fNumber.value + sNumber.value
    return sum.value
  }
</script>


