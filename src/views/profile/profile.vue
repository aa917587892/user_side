<template>
  <div class="profile">  
    <div class="top_1 px-2">
      <div class="flex text-white  pt-2">
          <img src="https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg" class="rounded-circle" width="80" height="80" alt="">
          <div class="flex-1 pl-3 pt-1">
            <dir><span class="mr-2" style="font-size:20px;">18568478921</span><span  style="font-size:20px"><i class="el-icon-mobile-phone"></i> <i class="el-icon-bank-card"></i><i class="el-icon-postcard"></i></span></dir>
            <div style="font-size:14px;margin-top:12px">金牌会员</div>
          </div>
          <div>
            <span class="align-center"><el-badge is-dot class="item"><i class="el-icon-chat-dot-round" style="font-size:20px;padding:0px 5px 10px 10px" @click="to('/profile/message')"></i></el-badge> </span>
            <span class="align-center"><i class="el-icon-setting " style="font-size:20px;padding:0px 10px 10px 5px" @click="to('/profile/Info')"></i></span>
          </div>
      </div>
      <div class="flex mt-2 " style="font-size:14px;color:white">
        <span>今天到帐：12.9</span><span class="pl-2">用户积分：1730</span><span class="pl-2">差2500分升级</span>
      </div>
      <div class="flex align-center  text-white pt-2" style="width:100%;height:40px">
        <span style="font-size:15px">账户余额：</span><span style="font-size:22px;font-weight:600;flex:1;padding-left:10px">230.5金币</span> <el-button type="primary" style="float:right" size="mini" plain round  >提现</el-button>
      </div>
    </div>
    <div class="flex  border-bottom border-top py-1 pl-2" >
        <div style="color:#4499ff"><i class="el-icon-bell"></i> 公告:</div>
         <el-carousel class="flex-1 pl-2" height="100%" direction="vertical" autoplay indicator-position="none" :interval="4000" >
            <el-carousel-item v-for="item in 3" :key="item">
             <span style="color:red;font-size:14px"><span>关于打不开的原因</span><span class="ml-2">2021-03-04</span></span>
            </el-carousel-item>
          </el-carousel>
    </div>
    <div class="border-bottom ">
        <div class="flex justify-between py-1 px-2 border-bottom">
          <div class=" font-weight-bold">我的订单</div>
          <div style="color:#a3a3a3;font-size:14px">全部订单<i class="el-icon-arrow-right"></i></div>
        </div>
        <div class="flex py-2 list">
           <div class="flex-1 text-center"><i class="el-icon-s-check" style="font-size:30px;padding-bottom:5px"></i><div>待审核</div></div>
           <div class="flex-1 text-center"><i class="el-icon-s-claim" style="font-size:30px;padding-bottom:5px"></i><div>已接单</div></div>
           <div class="flex-1 text-center"><i class="el-icon-s-finance" style="font-size:30px;padding-bottom:5px"></i><div>已付款</div></div>
           <div class="flex-1 text-center"><i class="el-icon-receiving" style="font-size:30px;padding-bottom:5px"></i><div>待收货</div></div>
           <div class="flex-1 text-center"><i class="el-icon-circle-check" style="font-size:30px;padding-bottom:5px"></i><div>已完成</div></div>
        </div>
    </div>
     <div class="border-bottom ">
        <div class="flex justify-between py-1 px-2 border-bottom">
          <div class=" font-weight-bold">我的邀请</div>
          <div style="color:#a3a3a3;font-size:14px">查看邀请记录<i class="el-icon-arrow-right"></i></div>
        </div>
        <div class="flex py-2 ">
            <div class="flex-1 text-center"><span style="color:#ff791a">0人</span><p class="pt-1 " style="font-size:14px;color:#999999">累计邀请</p></div>
            <div class="flex-1 text-center"><span style="color:#ff791a">0人</span><p class="pt-1" style="font-size:14px;color:#999999">7天邀请</p></div>
        </div>
    </div>
    <div class="px-1 flex flex-wrap align-center justify-center">
      <div class="e_list text-center"><i class="el-icon-s-data" style="font-size:30px;padding-bottom:5px;color:#f56c6c"></i><div>我的订单</div></div>
      <div class="e_list text-center"><i class="el-icon-document" style="font-size:30px;padding-bottom:5px;color:#67c23a"></i><div>金币明细</div></div>
      <div class="e_list text-center"><i class="el-icon-takeaway-box" style="font-size:30px;padding-bottom:5px;color:#e6a23c"></i><div>提现明细</div></div>
      <div class="e_list text-center"><i class="el-icon-coin" style="font-size:30px;padding-bottom:5px;color:#79bbff"></i><div>积分明细</div></div>
      <div class="e_list text-center"><i class="el-icon-user" style="font-size:30px;padding-bottom:5px;color:#79bbff"></i><div>我的买号</div></div>
      <div class="e_list text-center"><i class="el-icon-s-check" style="font-size:30px;padding-bottom:5px;color:#e6a23c"></i><div>实名认证</div></div>
      <div class="e_list text-center"><i class="el-icon-bank-card" style="font-size:30px;padding-bottom:5px;color:#f56c6c"></i><div>金币提现</div></div>
      <div class="e_list text-center"><i class="el-icon-s-custom" style="font-size:30px;padding-bottom:5px;color:#79bbff"></i><div>个人信息</div></div>
      <div class="e_list text-center"><i class="el-icon-chat-line-round" style="font-size:30px;padding-bottom:5px;color:#e6a23c"></i><div>我的消息</div></div>
      <div class="e_list text-center"><i class="el-icon-guide" style="font-size:30px;padding-bottom:5px;color:#67c23a"></i><div>帮助中心</div></div>
      <div class="e_list text-center"><i class="el-icon-phone-outline" style="font-size:30px;padding-bottom:5px;color:#79bbff"></i><div>联系客服</div></div>
      <div class="e_list text-center"><i class="el-icon-first-aid-kit" style="font-size:30px;padding-bottom:5px;color:#67c23a"></i><div>安全中心</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile.vue',
  data(){
    return{}
  },
  methods:{
    to(path){     
    this.$router.push(path)
    }
  }
}
</script>
<style scoped>
  .top_1{
    background-image: url('../../assets/img/profile/bg.png');
    background-position:center center;
    background-size: cover;
    height: 200px;
    background-repeat: no-repeat;
  }
  .list i{
    color: #666;
  }
  .list{
    color: #999;
    font-size: 14px;
  }
  .e_list{
    width:25%;
    padding: 15px;
    font-size: 14px;
  }
</style>