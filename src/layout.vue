<template>
    <div class="layout">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main">
                
                <a href="#" @click="toggleLogin" v-if="!this.username">登录</a> |
                <a href="#" v-if="!this.username" @click="toggleReg">注册</a> |
                <a href="#" @click="toggleLogout" v-if="this.username">注销</a> |
                <a href="#">帮助中心</a> ||
            </div>
        </div>
        <div class="layout-header">
                <a href="http://localhost:8080/">
                        <img src="./assets/logo.png" class="layout-logo"/>   
                </a>
                <div v-if="this.username" class="layout-user">{{username}}</div>
                <Button class="layout-cart" type="ghost" icon="android-cart" @click="toggleCart">购物车</Button>
                
          
        </div>
        <div class="content">
        <keep-alive>
                <router-view></router-view>
        </keep-alive>
        </div>
        <div class="layout-copy">
            2017-2018 &copy; Syou_yu
        </div>

<!-- the loginform -->
        <Modal v-model="showlogin" >
                <p slot="header" >
                        <span>用户登录</span>
                </p>
                        <keep-alive>
                                <login-form style="margin-right:30px" 
                                @has-log="onSuccessLog"></login-form>
                        </keep-alive>
                        
                
                <div slot="footer">
                      
                </div>
        </Modal>


<!-- the regform -->
        <Modal v-model="showreg" >
                <p slot="header" >
                        <span>用户注册</span>
                </p>

                <reg-form style="margin-right:30px" ></reg-form>

                <div slot="footer">
                      
                </div>
        </Modal>

<!-- the cart list -->
        <Modal v-model="showcart" >
                <p slot="header" >
                        <span>购物车</span>
                </p>
                <cart></cart>
                
                        
                <div slot="footer">
                      
                </div>
        </Modal>


  </div>
</template>

<script>
import LoginForm from '@/components/loginform'
import RegForm from '@/components/regform'
import Cart from '@/components/cart'
export default {
        data(){
        return{
                showlogin : false,
                showreg: false,
                showcart: false,
                username:''
        }  
        },
        components:{
                LoginForm,
                Cart,
                RegForm
        },
        methods:{
                toggleLogin(){
                        if(this.showlogin==false){
                                this.showlogin=true;
                        }else{
                                this.showlogin=false;
                        }
                        
                },
                toggleReg(){
                        this.showreg=true;
                },
                toggleLogout(){
                        sessionStorage.removeItem('username');
                        this.$Message.success('注销成功!');
                        this.username='';
                },
                toggleCart(){
                        if(this.username==""){
                                this.$Message.error('请先登陆账号！');
                                this.showlogin = true;
                        }else{
                                this.showcart=true;
                        }
                        
                },
                onSuccessLog(data){
                        sessionStorage.setItem("username",data);
                        this.username = sessionStorage.getItem("username");
                        this.showlogin = false;
                        console.log(this.username)
                }   
        }
}
</script>


<style scoped>
.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
}
.layout-logo{
        width: 30px;
        height: 30px;
        float: left;
        position: relative;
        top: 15px;
        left: 30px;
}
.layout-user{
        float: right;
        position: relative;
        top: 20px;
        margin-right: 40px;
}
.layout-cart{
        float: right;
        position: relative;
        padding:5px;
        top: 5px;
        right: 30px;
        font-size: 25px;
}

.layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
}
.layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
}
.layout-ceiling-main{
        float: right;
        margin-right: 15px;
}
.layout-ceiling-main a{
        color: #9ba7b5;
}
</style>

