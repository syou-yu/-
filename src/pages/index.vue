<template>
  <div>
    <Row>

      <!-- the left -->
      <Col :md="{span:4,offset:2}" :sm="{span:0}" :xs="{span:0}">
        <iMenu :productList="productList" :showmore="showmore"></iMenu>
      </Col>

      <!-- the right -->
      <Col :md="{span:14,offset:2}" class="carousel">
        <Carousel></Carousel>
      </Col>

    </Row>
       <!-- the hotsales -->
    <Row>
      <Col :md="{span:20,offset:2}" :sm="24" class="hotsales">
        <Hot-sales title="Hot Sales" :list="hotsales" @cartlist="getCartList"></Hot-sales>
      </Col>

      
    </Row>
    <ul v-for="(item,idx) in cartlist" :key="idx">
        <li>{{item.productTitle}}</li>
      </ul>
  </div>
</template>

<script>
import iMenu from '@/components/menu'
import Carousel from '@/components/carousel'
import HotSales from '@/components/basecard1'
export default {
  mounted(){
    this.getMenuList(),
    this.getProducts()
  },
  components:{
    iMenu,
    Carousel,
    HotSales
  },
  data(){
    return{
      showmore:true,
      productList: [],
      hotsales:[],
      cartlist:[]
    }
  },
  methods:{
    getMenuList(){
      this.axios.get('http://localhost:8080/api/getMenuList')
      .then((res)=>{
      console.log(res.data);
      this.productList = res.data;
    }).catch((err)=>{
      console.log(err);
    })
    },
    getProducts(){
      this.axios.get('http://localhost:8080/api/getProducts',{
      params:{
        hotsale:"true"
      }
    }).then((res)=>{
      console.log(res.data);
      this.hotsales = res.data;
    }).catch((err)=>{
      console.log(err);
    })
    },
    getCartList(data){
      this.cartlist = data;
    }
  }
}
</script>

<style scoped>
.hotsales{
  margin-top:50px;
}
.carousel{
  padding-top:50px
}
</style>


