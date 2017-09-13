<template>
<div>
    
    <Card :dis-hover="true" :shadow="true">
            <p slot="title">{{title}}</p>
            <Row type="flex"   align="top"  justify="start" :gutter="16">
                <Col :md="6" :sm="6" :xs="8" v-for="(item,index) in list" :key="index" @on-select="addToCart">
                    <Card :bordered="false" class="view effect" >

                        <div style=" text-align:center;" > 
                            <img :src="item.src" style="width:135px;height:135px"/>
                        </div> 

                        <div style="width:135px;margin:0 auto;">
                            <h2 style="color:red;font-weight:normal;">
                                <Icon type="social-yen" color="red" size="3"></Icon>
                                {{item.price}}
                            </h2>
                            <p>{{ item.title }}</p> 
                        </div>
                        
                        <div class="mask">
                            <Button type="primary" shape="circle" @click="addToCart(item)">加入购物车</Button>
                        </div>
                        
                    </Card>
                    
                </Col>
            </Row>
    
    </Card>

    
</div>
</template>


<script>

    export default {
        props:{
            title:{
                type:String,
                default:''
            },
            list:{
                type:Array,
                default:[]
            }
        },
        data () {
            return {
               
                
            }
        },
        methods:{
            addToCart(item){
                this.$store.dispatch('fetchCartList')
                this.axios.get('http://localhost:8080/api/cartList',{
                params:{
                    productTitle:item.title
                }
                }).then((res)=>{
                    this.$store.dispatch('fetchCartList')

                    if(res.data==''){
                        this.axios.post('http://localhost:8080/api/cartList', {
                        productTitle:item.title,
                        productSrc:item.src,
                        productPrice:item.price
                        }).then(function(res) {
                            
                        }).catch(function(error) {
                            alert(error);
                        });  
                        this.$Message.success(item.title+'-添加成功！' );
                    }else{
                    this.$Message.error('购物车已存在-'+ item.title );
                    }
                
                }).catch((err)=>{
                    console.log(err);
                    })
                
            }
        }
    }
</script>

<style>
.view { cursor: default; }
.view .mask  {  
    height:100%; 
    position: absolute; 
    bottom: 0px; 
    left: 0px; 
    right:0px; 
    text-align: center;
    padding-top: 100px;
   
}



.effect .mask {
   opacity: 0;
   -moz-box-sizing:border-box;
   -webkit-box-sizing:border-box;
   box-sizing:border-box;
   -webkit-transition: all 0.4s ease-in-out;
   -moz-transition: all 0.4s ease-in-out;
   -o-transition: all 0.4s ease-in-out;
   -ms-transition: all 0.4s ease-in-out;
   transition: all 0.4s ease-in-out;
}
.effect:hover .mask {
   opacity: 1;
   background: rgba(0,0,0,0.7);
}


</style>




