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
        data () {
            const validateUser = (rule, value, callback) => {
                    if (value === '') {
                            callback(new Error('用户名不能为空'));
                    }
                 callback();   
            };

            const validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空'));
                }
                    callback();
            };

            return {
                username:'',
                password:'',
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
            handleSubmit (name) {
                this.username = this.formValidate.user;
                this.password = this.formValidate.password;
                alert(this.password)
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.axios.post('http://localhost:8080/api/User', {
                            username:this.username,
                            password:this.password
                        }).then(function(res) {
                            
                        }).catch(function(error) {
                            alert(error);
                        });  
                        this.$Message.success('注册成功!');
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
