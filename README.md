### 猪猪小店，开源微信商城（服务端）

- 基于开源项目 NideShop 和海风小店重建，参考的这两个项目的时间都有点久，有一些小问题，因此我精简了一些功能，同时完善修复
  了一些 bug，并重新设计了 UI，目前已发布上线，使用中～
- 服务端 api 基于 Node.js+ThinkJS+MySQL
- 后台管理端 基于 VUE.js+element-ui、
- 小程序端 基于原生小程序开发
- 目前微信登录、支付，快递查询均正常使用

### 目前猪猪小店已经上线，可以扫码测试看看

<img width="300" src="./gitImg/xzzshop.jpeg"/>

#### 本项目需要配合

小程序： https://github.com/zxb1655/xzzshop-miniprogram  
后台管理：https://github.com/zxb1655/xzzshop-admin

### 本地开发环境配置

- 克隆项目到本地

```
git clone https://github.com/zxb1655/xzzshop-server
```

- 创建数据库 xzzshop 并导入项目根目录下的 xzzshop.sql  
  推荐使用软件 Navicat 创建和管理数据库，也可以用以下命令创建：

```
CREATE SCHEMA `xzzshop` DEFAULT CHARACTER SET utf8mb4 ;
```

> 注意数据库字符编码为 utf8mb4

- 更改数据库配置
  src/common/config/database.js

```
const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'xzzshop',
    prefix: 'xzzshop_',
    encoding: 'utf8mb4',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'xzzshop', //你的密码
    dateStrings: true
};
```

- 填写微信登录和微信支付配置和其他设置，比如七牛，阿里云快递等等

src/common/config/config.js

```
// default config
module.exports = {
  default_module: 'api',
  weixin: {
    appid: '', // 小程序 appid
    secret: '', // 小程序密钥
    mch_id: '', // 商户帐号ID
    partner_key: '', // 微信支付密钥
    notify_url: '' // 微信异步通知，例：https://shopserver.zxb66.top/api/pay/notify
  }
};
```

- 安装依赖并启动

```
yarn
yarn start
```

启动后，本地访问 http://127.0.0.1:8360/

### 上线需要以下准备工作：

- 一个认证微信服务公众号
- 阿里云服务器
- 注册小程序
- 完成认证的七牛
- 完成 API 安全设置的微信商户，并绑定好小程序 id（支付）
- 阿里云物流 api
- 备案后的域名
- 如果卖食品，还需要《食品经营许可证》

客服使用微信小程序官方提供的客服功能即可

### 项目截图

请参考微信小程序项目：https://github.com/zxb1655/xzzshop-miniprogram

### 功能列表

- 首页：搜索、Banner、公告、分类 Icons、分类商品列表
- 详情页：加入购物车、立即购买、选择规格、查看评价、生成分享图
- 搜索页：排序、历史记录、热门搜索
- 分类页：分页加载商品
- 我的页面：订单（待付款，待发货，待收货），足迹，收货地址
- 完整的购物流程，商品加入购物车 --> 收货地址的选择 --> 下单支付 --> 确认收货

### 最后说明

- 项目地址

  后台管理：https://github.com/zxb1655/xzzshop-admin  
  服务端： https://github.com/zxb1655/xzzshop-server  
  微信小程序：https://github.com/zxb1655/xzzshop-miniprogram

- 本项目会持续更新和维护，有问题可通过微信联系我，喜欢别忘了 Star 一下哦，谢谢您的关注。
  <img width="300" src="./gitImg/weixin.jpeg"/>
