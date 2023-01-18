<template>
    <div v-if="this.results.length > 0">
        <ul class="results-list">
            <li v-for="(item,index) in results"
                :key="index"
                @click="selectItem(item)"
                >
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    props:{
        results:{
            type: Array,
            required: true
        }
    },
    emits:['result:selected'],
    methods:{
        selectItem(result){
            this.$emit('result:selected', result)
        }
    }
}
</script>

<style lang="css" scoped>
.results-list{
    position: relative;
    padding: 0;
    margin: 0;
    border: 1px solid #ddd;
    width: 100%;
    display: inline-block;
}
.results-list li{
    padding: 5px;
    list-style: none;
}

.results-list li:hover{
    background-color: #f1f1f1;
    cursor: pointer;
}
</style>