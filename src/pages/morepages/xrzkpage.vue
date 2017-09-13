<template>
  <div>
    <Product-card title="仙人掌科" :list="xrzkProducts"></Product-card>
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
        this.axios.get('http://localhost:8080/api/getProducts',{
                params:{
                    category:"仙人掌科"
                }
            }).then((res)=>{
                console.log(res.data);
                this.xrzkProducts = res.data;
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
            xrzkProducts:[],
        }   
    },
}
</script>

<style scoped>

</style>


