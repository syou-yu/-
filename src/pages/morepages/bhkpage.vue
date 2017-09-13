<template>
  <div>
    <Product-card title="百合科" :list="bhkProducts"></Product-card>
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
                    category:"百合科"
                }
            }).then((res)=>{
                console.log(res.data);
                this.jtkProducts = res.data;
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
            bhkProducts:[],
        }   
    },
}
</script>

<style scoped>

</style>


