<template>
  <div>
    <div class="site-nav-bg">
      <div class="site-nav w1200">
        <p class="sn-back-home">
          <i class="layui-icon layui-icon-home"></i>
          <a href="#">首页</a>
        </p>
        <div class="sn-quick-menu">
          <div class="login">
            <a href="login.html">登录</a>
          </div>
          <div class="sp-cart">
            <a href="shopcart.html">购物车</a>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>

    <div class="header">
      <div class="headerLayout w1200">
        <div class="headerCon">
          <h1 class="mallLogo">
            <a href="#" title="母婴商城">
              <img src="../assets/res/static/img/logo.png" />
            </a>
          </h1>
          <div class="mallSearch">
            <form action class="layui-form" novalidate>
              <input
                type="text"
                name="title"
                required
                lay-verify="required"
                autocomplete="off"
                class="layui-input"
                placeholder="请输入需要的商品"
              />
              <button class="layui-btn" lay-submit lay-filter="formDemo">
                <i class="layui-icon layui-icon-search"></i>
              </button>
              <input type="hidden" name value />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
<style lang="">
@import '../assets/res/layui/css/layui.css';
@import '../assets/res/static/css/main.css';
</style>
