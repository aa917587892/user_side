<template>
  <div class="order">  
       <div class="fixed">
      <navbar class="home-navbar"><div slot="center">试用大厅</div></navbar>
        <!-- <HomeSwiper :banner="banner"/> -->
        <!-- <discount :recommend="recommend"/> -->
        <div class="bg-white">
          <el-tabs v-model="activeName" class=" top_tabs " >
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
            <el-tab-pane label="全部"   name="1" ></el-tab-pane>
            <el-tab-pane label="待审核" name="2"></el-tab-pane>
            <el-tab-pane label="已接单" name="3"></el-tab-pane>
            <el-tab-pane label="已找到" name="4"></el-tab-pane>
            <el-tab-pane label="已付款" name="5"></el-tab-pane>
            <el-tab-pane label="已发货" name="6"></el-tab-pane>
            <el-tab-pane label="已收货" name="7"></el-tab-pane>
            <el-tab-pane label="已完成" name="8"></el-tab-pane>
            <el-tab-pane label="已取消" name="9"></el-tab-pane>
            <el-tab-pane label="投诉中" name="10"></el-tab-pane>
          </el-tabs>
        </div>
      </div> 
       <div class="mb-1" style="height:127px"></div>

      <div class="pb-5 " style="background-color:#f4f4f5" >
           <el-card class="box-card my-1" shadow="hover" v-for="(item,index) in card_list" :key="index">
              <div slot="header" class="clearfix flex justify-between">
                <div class="flex align-center" >
                  <span style="padding-left:2px;font-size:14px">订单编号:{{item.id}}</span>  
                </div>
                  <span style="float: right; padding: 3px 0;font-size:14px;color:#409eff" type="text"> {{item.state.state}}</span>
                
              </div>
              <div class=" item">
                <div class="flex border-bottom">
                  <div><img :src="item.imgUrl" width="80" height="80" alt="" srcset=""></div>
                  <div class="flex-1 ml-2 ">
                  <li><span>
                    <img src="../../assets/img/common/jd_ico.jpg" v-if="item.type =='京东活动'" alt="" srcset="">
                    <img src="../../assets/img/common/tb_ico.jpg" v-if="item.type =='淘宝/天猫活动'" alt="" srcset="">
                    <img src="../../assets/img/common/dy_ico.jpg" v-if="item.type =='抖音活动'" alt="" srcset="">
                    <img src="../../assets/img/common/pdd_ico.jpg" v-if="item.type=='拼多多活动'" alt="" srcset="">
                    {{item.shop_name}}</span> <span style="float:right;color:#ff5c5c;font-weight:600" >￥{{item.state.price}}</span> </li>
                  <li><span style="font-size:14px">买号:{{item.buyer_name}}</span> <span style="float:right;color:#ff5c5c;font-weight:600" ><i class="el-icon-coin"></i> {{item.state.money}}金币</span> </li>
                  <li><span style="font-size:14px"><i class="el-icon-time"></i> {{item.date}}</span></li>
                </div>
                </div>
                <div  class=" text-right pt-1">
                    <el-button size="mini" type="warning" plain v-if="item.state.state == '已发货' " @click="complaint_form_show = true" >任务投诉</el-button>
                    <el-button size="mini" type="primary" plain @click="ToLineItem(item.id)" >详情</el-button>
                </div>
              </div>
          </el-card>
      </div>
      <!-- //投诉弹框 -->
      <el-dialog title="收货地址" :visible.sync="complaint_form_show" width="95%">
        <el-form :model="complaint_form">
          <el-form-item label="投诉截图" label-width="70px">
            <div class="flex">
             <el-upload
             	  :class="{hideShow:hideUpload}"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :limit="limit_count"
                :on-change="handleRemove"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="Visible">
                <img width="100%" :src="imageUrl" alt="">
              </el-dialog>
            </div>
          </el-form-item>
          <el-form-item label="投诉原因" label-width="70px">
           <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="complaint_form.complaint_input">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="complaint_form_show = false">取 消</el-button>
          <el-button type="primary" @click="complaint_form_show = false">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>

import navbar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'cart',
  data(){
    return{
      imageUrl:'',
      activeName:'1',
      activeName2:'1',
        card_list:[{
         id:13444,
         type:'京东活动',
         shop_name:'阿大声项链',
         buyer_name:'asdas412312',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3.00',
           price:192.2,
           deal:10,
           get:2,
           state:'已发货'
         }
      },{
         id:2,
         type:'淘宝/天猫活动',
         shop_name:'2是声项链',
         buyer_name:'asdas412312',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3.00',
           price:192.2,
           deal:10,
           get:2,
           state:'已完成'
         }
      },{
         id:342,
         type:'抖音活动',
         shop_name:'阿大222声项链',
         buyer_name:'asdas412312',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3.00',
           price:192.2,
           deal:10,
           get:2,
           state:'已发货'
         }
      },{
         id:13444,
         type:'京东活动',
         shop_name:'阿大声项链',
         buyer_name:'asdas412312',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3.00',
           price:192.2,
           deal:10,
           get:2,
           state:'待审核'
         }
      },{
         id:13444,
         type:'京东活动',
         shop_name:'阿大声项链',
         buyer_name:'asdas412312',
         date:'2022-04-11 16:11:28',
         imgUrl:require('../../assets/img/home/2a22444a40883d38.jpg'),
         state:{
           money:'3.00',
           price:192.2,
           deal:10,
           get:2,
           state:'已发货'
         }
      }],
        complaint_form_show:false,
        Visible: false,
        hideUpload:false,
        limit_count:3,
       complaint_form:{
         complaint_input:''
       }
    }
    
  },
  methods:{
     handleRemove(file, fileList) {
       this.hideUpload =fileList.length >=this.limit_count
        console.log( fileList.length);
      },
     ToLineItem(id){
        this.$router.push({
          path:`/order/lineItem/${id}`
        })
    
     }
  },
  components:{
    navbar
  }
}
</script>
<style >
.fixed{
  position: fixed;
  width: 100%;
  top: 0;
}
.home-navbar{
   background-color:#409eff;
}
.home .el-tabs__header{
   margin: 0px;
 }
.order .fixed .el-tabs__header{
   margin: 0px;
 }
.order .el-card__header{
    padding: 10px 20px;
    background-color: rgb(248, 248, 248);
 }
.order .el-card__body{
  padding:15px 20px ;
}
 .order li{line-height: 26px;}

 .order .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
 .order .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
 .order .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
 .order .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
  .hideShow  .el-upload--picture-card {
    display: none;
  }
  .order .el-upload--picture-card{
    width:80px;
    height: 80px;
    line-height: 90px;
  }
  .order .el-upload-list--picture-card .el-upload-list__item{
    width: 80px;
    height: 80px;
  }
</style>
