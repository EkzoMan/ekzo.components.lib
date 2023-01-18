<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { Ekzo.componentsSample } from '@/entry.esm';
import {autocomplete} from '@/entry.esm'

export default defineComponent({
  name: 'ServeDev',
  data(){
    return{
      acList:['Test','Taxy','Tost','Ticket','Тест','Another word','Иван']
    }
  },
  components: {
    autocomplete
  //  Ekzo.componentsSample,
  }
});
</script>

<template>
  <div id="app">
    <autocomplete 
      :List="acList"
      :Transliterate="true"
      :MinLength="1"/>
  </div>
</template>
