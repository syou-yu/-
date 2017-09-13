<template>
  <div>
    <Product-card title="番杏科" :list="fxkProducts"></Product-card>
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
                    category:"番杏科"
                }
            }).then((res)=>{
                console.log(res.data);
                this.fxkProducts = res.data;
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
            fxkProducts:[],
        }   
    },
}
</script>

<style scoped>

</style>


