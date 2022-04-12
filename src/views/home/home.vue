<template>
  <div class="home">
    <div class="fixed">
      <navbar class="home-navbar"><div slot="center">试用大厅</div></navbar>
        <!-- <HomeSwiper :banner="banner"/> -->
        <!-- <discount :recommend="recommend"/> -->
        <div class="bg-white">
          <el-tabs v-model="activeName" @tab-click="handleClick" class=" top_tabs " >
          <el-tab-pane  name="1" >
            <span slot="label"  class="px-1"><i class="el-icon-menu"></i> 全部</span>
          </el-tab-pane>
          <el-tab-pane label="淘宝/天猫" name="2">
          <span class="flex align-center justify-center "  slot="label"><img src="@/assets/img/common/tb_ico.jpg" width="16" height="16" style="padding-right:2px" alt="" srcset="">淘宝</span>
          </el-tab-pane>
          <el-tab-pane label="京东" name="3">
            <span slot="label" class="flex align-center justify-center " ><img src="@/assets/img/common/jd_ico.jpg" width="16" height="16" alt="" srcset="" style="padding-right:2px" >京东</span>
          </el-tab-pane>
          <el-tab-pane label="拼多多" name="4">
            <span slot="label" class="flex align-center justify-center " ><img src="@/assets/img/common/pdd_ico.jpg" width="16" height="16" alt="" srcset="" style="padding-right:2px">拼多多</span>
          </el-tab-pane>
          <el-tab-pane label="抖音小店" name="5">
            <span slot="label" class="flex align-center justify-center " ><img src="@/assets/img/common/dy_ico.jpg" width="16" height="16" alt="" srcset="" style="padding-right:2px">抖音小店</span>
          </el-tab-pane>
        </el-tabs>
        </div>
        <div class="px-1 bg-white">
            <el-tabs v-model="activeName2" >
            <el-tab-pane label="默认排序" name="1" ></el-tab-pane>
            <el-tab-pane label="高佣金" name="2"></el-tab-pane>
            <el-tab-pane label="低单价" name="3"></el-tab-pane>
            <el-tab-pane label="多库存" name="4"></el-tab-pane>
          </el-tabs>
        </div>
      </div> 
      <div class=" " style="height:127px"></div>
      <div >
           <el-card class="box-card m-1" shadow="hover" v-for="(item,index) in card_list" :key="index">
          <div slot="header" class="clearfix flex justify-between">
            <div class="flex align-center" >
              <img src="../../assets/img/common/jd_ico.jpg" v-if="item.type =='京东活动'" alt="" srcset="">
              <img src="../../assets/img/common/tb_ico.jpg" v-if="item.type =='淘宝/天猫活动'" alt="" srcset="">
              <img src="../../assets/img/common/dy_ico.jpg" v-if="item.type =='抖音活动'" alt="" srcset="">
              <img src="../../assets/img/common/pdd_ico.jpg" v-if="item.type=='拼多多活动'" alt="" srcset="">
              <span style="padding-left:2px"> {{item.type}}</span>  
            </div>
              <span style="float: right; padding: 3px 0;font-size:14px" type="text"><i class="el-icon-time"></i> {{item.date}}</span>
            
          </div>
          <div class=" item flex" @click="ToDetail(item.id)">
            <div><img :src="item.imgUrl" width="80" height="80" alt="" srcset=""></div>
            <div class="flex-1 ml-2">
              <li><span style="color:#f76060"><h4>奖励{{item.state.money}}金币</h4> </span> </li>
              <li><span style="font-size:14px">商品{{item.state.price}}元</span> </li>
              <li><span style="font-size:14px"><i class="el-icon-water-cup"></i> 共{{item.state.deal}}份</span> <span><i class="el-icon-s-custom"></i>{{item.state.get}}人领取</span></li>
            </div>
          </div>
      </el-card>
      </div>
     
      
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar.vue'

// import {getHomeMultidata} from 'network/home.js'
// import HomeSwiper from './childComps/HomeSwiper.vue'
// import discount from './childComps/discount.vue'

export default {
  name: 'Home',
  data(){
    return{
      activeName:'1',
      activeName2:'1',
      card_list:[{
         id:13444,
         type:'京东活动',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3',
           price:192.2,
           deal:10,
           get:2
         }
      },{
         id:12545,
         type:'抖音活动',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3',
           price:192.2,
           deal:10,
           get:2
         }
      },{ 
        id:122342342354,
         type:'淘宝/天猫活动',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3',
           price:192.2,
           deal:10,
           get:2
         }
      },{
          id:1254452,
         type:'拼多多活动',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3',
           price:192.2,
           deal:10,
           get:2
         }
      },{
          id:1254,
         type:'京东活动',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3',
           price:192.2,
           deal:10,
           get:2
         }
      },{
         id:1254,
         type:'京东活动',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3',
           price:192.2,
           deal:10,
           get:2
         }
      },{
         id:1254,
         type:'抖音活动',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3',
           price:192.2,
           deal:10,
           get:2
         }
      },{
         id:1254,
         type:'淘宝/天猫活动',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3',
           price:192.2,
           deal:10,
           get:2
         }
      },{
         id:1254,
         type:'拼多多活动',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3',
           price:192.2,
           deal:10,
           get:2
         }
      }]
    }
  },
  components:{
    navbar,
  },
  created(){
  },
  methods:{
     handleClick(tab, event) {
        console.log(tab, event);
      },
    ToDetail(id){
        this.$router.push({
          path:`/home/detail/${id}`
        })
    }
  }
}
</script>
<style  >
.home{
  padding-bottom: 48px;
  background-color:#efeff4;
}
.fixed{
  position: fixed;
  width: 100%;
  top: 0;
}
.home-navbar{
   background-color:#409eff;
}

 .top_tabs .el-tabs__item{
    padding: 0px 12px;
    flex: 1;
}
 .el-tabs__header{
   margin: 0px;
 }
 li{
   line-height:27px;
 }
 .el-card__header{
    padding: 10px 20px;
    background-color: rgb(248, 248, 248);
 }
</style>