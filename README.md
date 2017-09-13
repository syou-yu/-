# 多肉商城

> 一个Vue+Vuex+axios的商城demo

## 说明
> 练习用商城项目，存在bug
> 持续更新中

## 项目运行（nodejs 6.0+）
``` bash
# 克隆到本地
git clone https://github.com/syou-yu/duorou_mall.git

# 进入文件夹
cd vue2-happyfri

# 安装依赖
npm install

# 开启本地服务器localhost:8080
npm run dev

# 发布环境
npm run build
```

## 技术栈

vue2 + vuex + vue-router + webpack + ES6 + iview + axios

## 已实现功能
- [x] 用户登陆 -- 完成
- [x] 用户注册 -- 完成
- [x] 购物车功能 -- 完成
- [x] 商品分类 -- 完成

## 待实现功能
- [ ] 商品搜索
- [ ] 生成订单
- [ ] 订单查询
- [ ] 用户修改密码
- [ ] 用户上传、修改头像
- [ ] 后台增加商品类别
- [ ] 后台增加商品
- [ ] 后台下架商品
- [ ] 后台修改商品信息

## 存在bug

- 2017-9-13 待解决
<br>
```
用户注册已存在于db.json中，但用户登陆时输入db.json中存在的用户名时，表单验证显示用户不存在。
```
