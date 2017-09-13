<template>
  <div>
    <Product-card title="所有多肉植物" :list="AllProducts"></Product-card>
  </div>
</template>

<script>
import ProductCard from '@/components/basecard1'
export default {
    mounted(){
        this.getProducts()
    },
    methods:{
        getProducts(){ 
        this.axios.get('http://localhost:8080/api/getProducts')
            .then((res)=>{
                console.log(res.data);
                this.AllProducts = res.data;
            }).catch((err)=>{
                console.log(err);
            })
        },
    },
    components:{
        ProductCard
    },
    data(){
        return{
            AllProducts:[],
        }   
    },
}
</script>

<style scoped>

</style>


