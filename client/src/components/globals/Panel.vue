<!-- eslint-disable-next-line -->
<!-- eslint-disable  -->


<template>
<v-layout column>
<v-flex>
<div class="white elevation-2">
<v-toolbar dense class="cyan" dark>
    <v-toolbar-title>
        {{title}}
    </v-toolbar-title>
    <slot name="action" />
</v-toolbar>

<div class="pl-4 pr-4 pt-2 pb-2">
    <slot>
        No slot content defined
    </slot>
</div>
</div>
</v-flex>
</v-layout>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
//   data(){
//     return{
//         title: 'hello world'
//     }
//   },
  props:[
      'title'
  ]
}
</script>
<style scoped>
</style>
