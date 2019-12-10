<template>
  <div id="app">
    <router-view class="one" name="a"/>
    <router-view class="two" ></router-view>
  </div>
</template>
<style>
  .one{
    width:20%;
    height:100%;
    float: left;
  }
  .two{
    width:80%;
    height:100%
  }
</style>
