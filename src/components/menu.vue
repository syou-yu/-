<template>
<div>
    <Menu v-for="(product,index) in productList" :key="index" :open-names="['1']"  @on-select="turnUrl">
        <Submenu name="1">
            <template slot="title">
                <Icon type="navicon-round"></Icon>
                    {{ product.name}}
            </template>
            <template v-for="(item,idx) in product.submenu">
                
                    <Menu-item :name="item.path" :key="idx">
                        
                            {{ item.name }}
                        
                    </Menu-item>
            </template>
            <template v-if="showmore">
                <Menu-item name="">
                    <Icon type="more"></Icon>
                        More
                </Menu-item>
                
            </template>
        </Submenu>
    </Menu>
</div>
</template>

<script>
export default {
    props:{
        productList:{
            type:Array,
            default:[]
        },
        showmore:{
            type:Boolean,
            default:false
        }
        
    },
    data () {
    return {
       activeKey:''
    }
    },
    methods:{
        turnUrl(name){
            this.$router.push({path: '/more/' +name});
        }
    },
 }
</script>


