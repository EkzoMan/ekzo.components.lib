<template>
    <div class="autocomplete-container">
        <div>
            <input v-model="searchValue"
                   @input="search"
                   @change="search"
                   name="autocomplete"
                   />
        </div>
        <div>
            <Results :results="suggestions"
                    @result:selected="updateValue" />
        </div>
    </div>
</template>

<script>
import AutocompleteResults from './autocomplete-results.vue';
import { getLang, translit } from '../../utils/string-utils'

export default{
    props:{
        List:{
            type: Array,
            required: true
        },
        Transliterate:{
            type: Boolean,
            default: false
        },
        TransliterateLang:{
            type: String,
            default: 'en'
        },
        MinLength:{
            type: Number,
            default: 3
        }
    },
    components:{
        'Results': AutocompleteResults
    },
    data(){
        return{
            suggestions:[],
            searchValue: '',
            showSuggestions: false
        }
    },
    methods:{
        updateValue(value){
            this.searchValue = value
            this.suggestions = []
        },
        search(){
            var newVal = this.searchValue.toLowerCase()
            if(newVal.length === 0 | newVal.lenght < this.MinLength){ 
                this.suggestions = [] 
                return
            }
            //if transliteration enabled
            //transform input value
            if(this.Transliterate &&
               getLang(newVal) == this.TransliterateLang){
                    newVal = translit(newVal)
            }
            //Search for items in list for items
            //that starts with giveen string
            this.suggestions = this.List.filter(itm=>{return itm.toLowerCase().indexOf(newVal) === 0;});
        }
    }
}
</script>

<style scoped>
    .autocomplete-container{
        display: block;
        position: relative;
    }
    .autocomplete-container input{
        display: inline-block;
        position:relative;
        width:100%;
    }
</style>