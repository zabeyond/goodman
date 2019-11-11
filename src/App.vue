<template>
  <div id="app">
    <keep-alive>
      <router-view class="allview" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view class="allview" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
input{
  background: transparent;
}

html img{
  max-width: fit-content;
}

ul{
  padding: 0;
  margin: 0;
}

li{
  list-style: none;
}

.clear::after {
  content: "";
  clear: both;
  display: block;
  overflow: hidden;
}
input{
  border: none;
  outline: none;
}

input::-webkit-input-placeholder { /* WebKit browsers */
  color: #ccc;
}
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color: #ccc;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #ccc;
}
input:-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #ccc;
}
  .showdiv{
    display: block;
  }
  .hidediv{
    display: none;
  }

  #app{
    min-width: 23rem;
  }
</style>
