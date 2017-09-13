<template>
  <div>
      <Row>
          <Col span="10">商品详情</Col>
          <Col span="3">单价</Col>
          <Col span="4">数量</Col>
          <Col span="3">合计</Col>
          <Col span="4">1</Col>
      </Row>
      <ul v-for="(item,idx) in cartData" :key="idx">
        <Row >
            <Col span="10">
                <img :src="item.productSrc" style="width:50px;height:50px"/>
                {{item.productTitle}}
            </Col>
            <Col span="3">￥{{item.productPrice}}</Col>
            <Col span="4">
                1
            </InputNumber></Col>
            <Col span="3">￥{{item.productPrice*1}}</Col>
            <Col span="4">
                <Button type="primary" shape="circle" size="small" style="margin:0;" @click="cartRemove(item)">移出购物车</Button>
            </Col>
        </Row>
      </ul>
  </div>
</template>

<script>
export default{
    data(){
        return{
            productQty:[]
        }
    },
    mounted(){
        this.$store.dispatch('fetchCartList')
    },
    computed:{
        cartData(){
            
            return this.$store.getters.getCartList
        }
    },
    methods:{
        cartRemove(item){
                  this.axios.delete('http://localhost:8080/api/cartList/'+item.id)
                    .then((res)=>{
                    this.$Message.success(item.productTitle+'-移除成功！' );
                    this.$store.dispatch('fetchCartList')
                    }).catch((err)=>{
                    console.log(err);
                    })
        }
        
    }
    
}
    
</script>
<style scoped>


</style>
