<template>
    <div class="detail">
       
         <navbar class="home-navbar">
             <div slot="left"><i class="el-icon-arrow-left" style="font-size:20px;color:white;padding-left:10px"></i></div>
             <div slot="center">试用活动</div>
             <div slot="right" style="font-size:14px;color:white">
                <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    绑定买号<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="flex align-center"><img src="@/assets/img/common/tb_ico.jpg" style="padding-right:4px" alt="" srcset="">淘宝/天猫</el-dropdown-item>
                    <el-dropdown-item class="flex align-center"><img src="@/assets/img/common/jd_ico.jpg" style="padding-right:4px" alt="" srcset="">京东</el-dropdown-item>
                    <el-dropdown-item class="flex align-center"><img src="@/assets/img/common/pdd_ico.jpg" style="padding-right:4px" alt="" srcset="">拼多多</el-dropdown-item>
                    <el-dropdown-item class="flex align-center"><img src="@/assets/img/common/dy_ico.jpg" style="padding-right:4px" alt="" srcset="">抖音小店</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
             </div>
         </navbar>
        <div class="mx-1">
            <ul>
                <li><span class=""><img src="../../assets/img/common/jd_ico.jpg" alt="" srcset=""> 活动编号</span>: {{id}} <span style="float:right;font-size:15px" ><i class="el-icon-mobile-phone" style="color:#409eff" ></i> 手机端下单</span> </li>
                <li><span>商品单价:</span><span class="pl-1 text-danger">10.00元</span></li>
                <li><span>完成奖励:</span><span  class="pl-1 text-danger">3金币</span></li>
                <li><span>返款方式:</span><span  class="pl-1 text-danger">平台返款</span></li>
                <li><span>剩下份数:</span><span  class="pl-1 text-danger">9/10</span></li>
                <li><el-tag type="success">要求好评</el-tag></li>
            </ul>
            <div>
                <p style="font-size:14px; color:#409eff;padding-top:10px">搜索货比三家，货比需要浏览1分钟以上，收藏加购，注意；不要使用优惠卷，禁止使用红包，花呗，信用卡。。。。</p>
            </div>
        </div>
        <el-card class="box-card mx-1 mt-3" shadow="hover">
            <div slot="header" class="clearfix">
                <span>选择下单买号</span>
            </div>
            <ul>
                <li class="flex align-center justify-between">
                    <span>aqweqweeqwe</span><span>女 26岁-32岁</span><span>银牌会员</span>
                    <el-button size="small" type="primary" >领取</el-button>
                </li>
            </ul>
        </el-card>
    </div>
</template>
<script>

import navbar from '@/components/common/navbar/NavBar.vue'
export default {
    data(){
        return{
            id:''
        }
    },
    created(){
            this.id =this.$route.params.id
        console.log(this.id);   
    },
    methods:{
        
    },
    components:{
        navbar
    }
}
</script>
<style >
.detail .home-navbar{
   background-color:#409eff;
}
.el-dropdown-link {
    cursor: pointer;
    color: #ffffff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
 .detail .el-card__header{
      padding: 10px 20px !important;
      background-color: #fbfbfb!important;
  }
 .detail li{
      padding: 10px 10px;
      border-bottom:2px dotted #ebebeb ;
      font-size: 14px;
  }
  .detail .el-card__body{
      padding: 10px;
  }
</style>