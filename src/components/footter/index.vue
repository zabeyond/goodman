<template>
  <div>
    <div id="footter">
      <main>
        <ul class="main_left">
          <p>快速链接</p>
          <span />
          <li>首页</li>
          <li>产品市场</li>
          <li>创新研发</li>
          <li>精益生产</li>
          <li>增值服务</li>
          <li>可持续发展</li>
          <li>关于我们</li>
        </ul>
        <ul class="main_center">
          <p>公司地址</p>
          <span />
          <li>
            <img src="../../assets/img/address.png" alt />一号大楼第688双Bai Road，上海2011108
          </li>
          <li>
            <img src="../../assets/img/phone.png" alt />13615645070
          </li>
          <li>
            <img src="../../assets/img/flex.png" alt />+6221 546 1177
          </li>
          <li>
            <img src="../../assets/img/emile.png" alt />376345028@qq.com
          </li>
        </ul>
        <ul class="mian_right">
          <li><input type="text" placeholder="姓名"></li>
          <li><input type="text" placeholder="邮箱"></li>
          <li><input type="text" placeholder="电话"></li>
          <li class="text"><textarea placeholder="内容"></textarea></li>
          <li class="upBtn">提交</li>
        </ul>
      </main>
    </div>
    <div id="bottom">
      <main>
        <span class="bottom_left">沪ICP备15000479号-1</span>
        <span class="bottom_right">Copyright © 2019 - 2024 良源有限公司</span>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang='scss'>
#footter {
  width: 100%;
  height: 450px;
  background-image: url("../../assets/img/footbg.png");
  background-size: 100% 100%;
  overflow: hidden;
  main {
    width: 1200px;
    margin: 79px auto 0;
    overflow: hidden;
    ul {
      float: left;
    }
    .main_left {
      p {
        height: 34px;
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
      }
      span {
        display: block;
        width: 21px;
        height: 1px;
        background-color: #fe9c03;
        margin-bottom: 10px;
      }
      li {
        height: 35px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 35px;
      }
    }
    .main_center {
      margin-left: 101px;
      p {
        height: 34px;
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
      }
      span {
        display: block;
        width: 21px;
        height: 1px;
        background-color: #fe9c03;
        margin-bottom: 10px;
      }
      li {
        height: 35px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 35px;
        img {
          width: 14px;
          height: 16px;
          margin-right: 10px;
        }
      }
    }
    .mian_right {
      float: right;
      li {
        height: 35px;
        line-height: 35px;
        margin-bottom: 12px;
        overflow: hidden;
        input {
          height: 100%;
          margin: 0;
          line-height: 35px;
          background-color: #fff;
          width: 300px;
          color: #666666;
          font-size: 14px;
          padding-left: 28px;
          float: left;
        }
        input::-webkit-input-placeholder { /* WebKit browsers 适配谷歌 */
            color: #666666;
        }
        input:-moz-placeholder { /* Mozilla Firefox 4 to 18 适配火狐 */
            color: #666666;
        }
        input::-moz-placeholder { /* Mozilla Firefox 19+ 适配火狐 */
            color: #666666;
        }
        input:-ms-input-placeholder { /* Internet Explorer 10+  适配ie*/
            color: #666666;
        }
        textarea {
          resize: none;
          width: 300px;
          height: 80px;
          line-height: 35px;
          outline: none;
          padding-left: 28px;
          color: #666666;
        }
      }
      .text {
        height: 80px;
        line-height: 80px;
      }
      .upBtn {
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:35px;
        background-color: #FE9C03;
        text-align: center;
      }
    }
  }
}
#bottom {
  width: 100%;
  height: 60px;
  background-color: #fe9c03;
  main {
    width: 1200px;
    height: 60px;
    margin: 0 auto 0;
    overflow: hidden;
    .bottom_left {
      float: left;
      height: 17px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 60px;
    }
    .bottom_right {
      float: right;
      height: 17px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 60px;
    }
  }
}
</style>