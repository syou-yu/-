<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">

        <Form-item label="用户名" prop="user">
            <Input v-model="formValidate.user" placeholder="请输入用户名"></Input>
        </Form-item>

        <Form-item label="密码" prop="password">
            <Input v-model="formValidate.password"
            placeholder="请输入密码"
            type="password"></Input>
        </Form-item>

        <Form-item style="margin:0">
        <Row>
            <Col span="8" offset="6">
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </Col>
        </Row>
        </Form-item>

    </Form>
</template>


<script>
    export default {
        mounted(){
            this.getUser()
        },
        data () {
            const validateUser = (rule, value, callback) => {
                for(var i=0;i<this.userlist.length;i++){
                    if (value === '') {
                            callback(new Error('用户名不能为空'));
                    }else {
                        if (this.formValidate.user == this.userlist[i].username){
                            this.apiusername = this.userlist[i].username;
                            this.apipassword = this.userlist[i].password;
                            console.log("ok")
                            console.log(this.apiusername)
                            callback();
                        }
                        else{
                            callback(new Error('用户名不存在'));
                        }
                    }
                callback();   
                }
            };

            const validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空'));
                } else {
                    if (this.formValidate.password == this.apipassword) {
                        callback()

                    }else{
                            callback( Error('密码错误'))
                    }
                    callback();
                }
            };
            return {
                userlist:[],
                apiusername:[],
                apipassword:'',
                formValidate: {
                    user: '',
                    password: ''
                },
                ruleValidate: {
                    user: [
                        { validator: validateUser ,trigger: 'blur'}
                    ],
                    password: [
                        { validator: validatePassword ,trigger: 'blur'},
                    ]
                }
            }
        },
        methods: {
            getUser(){
                this.axios.get('http://localhost:8080/api/User')
                .then((res)=>{
                    this.userlist=res.data;
                    
                
                }).catch((err)=>{
                console.log(err);
                })
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('欢迎回来  '+this.apiusername);
                        console.log(this.userlist[0].password);
                        this.$emit('has-log',this.apiusername)
                        
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
