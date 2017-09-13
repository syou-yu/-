<template>
  <div>
    <Row>

      <!-- the left -->
      <Col :md="{span:4,offset:2}" :sm="{span:0}" :xs="{span:0}">
        <iMenu :productList="productList"></iMenu>
      </Col>

      <!-- the right -->
      <Col :md="{span:15,offset:1}" :sm="24">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </Col>

    </Row>
  </div>
</template>

<script>
import iMenu from '@/components/menu'
import Cart from '@/components/cart'
export default {
  mounted(){
    this.getMenuList()
  },
  props:{
    updateCart:{
                type:Boolean,
                default:false
            },
  },
  components:{
    iMenu
  },
  data(){
    return{
      productList:[]
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
    }
  }
}
</script>

<style scoped>

</style>


