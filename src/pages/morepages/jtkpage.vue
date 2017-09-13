<template>
  <div>
    <Product-card title="景天科" :list="jtkProducts"></Product-card>
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
                    category:"景天科"
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
            jtkProducts:[],
        }   
    },
}
</script>

<style scoped>

</style>


