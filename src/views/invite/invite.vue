<template>
  <div class="invaite">  
      <div class="ewm">
        <img src="../../assets/img/invite/erweima.png" width="30%"  alt="" class="ewmimg">
        <div class="  share mx-2 my-2  p-2 flex justify-between align-center ">
          <div><div class=" share_icon"><img src="../../assets/img/invite/pyq.png" width="45" height="45"></div> <span>朋友圈</span></div>
          <div><div class=" share_icon"><img src="../../assets/img/invite/qqkj.png" width="45" height="45"></div> <span>QQ空间</span></div>
          <div><div class=" share_icon"><img src="../../assets/img/invite/wx.png" width="45" height="45"></div> <span>微信好友</span></div>
          <div><div class=" share_icon"><img src="../../assets/img/invite/qq.png" width="45" height="45"></div> <span>QQ好友</span></div>
        </div>
        <div class="  share mx-2 my-2  p-2 flex justify-between align-center ">
            <img src="../../assets/img/invite/share.png" width="80" height="80" alt="" srcset="">
            <div class="flex-1" style="display: block;color: white; 0px;margin-right:30px" @click="centerDialogVisible  = true" >
                  <span>专属链接</span>
                  <span>点击获取推广链接发给好友</span>
                  <span>今日还可以推广500人注册</span>
            </div>
        </div>
          <div class="  share mx-2 my-2  p-2 text-left">
             <h4 class=" text-white">一、直推好友奖励</h4>
             <p>
               <span>* 推广试客完成任务，奖励佣金的5%</span>
               <span>* 推广商家完成任务，奖励佣金的5%</span>
             </p>
             <h4 class=" text-white mt-2">二、下级推广奖励</h4>
             <p>
               <span>* 推广的好友再推广试客完成任务，奖励佣金的3%</span>
               <span>* 推广的好友再推广商家任务完成，奖励佣金的3%</span>
             </p>
          </div>
           <div class=" mx-2  flex justify-between align-center">
              <div class="flex-1  share mr-1  p-1 ">
                  <span>累积获得提成</span>
                  <span>454.5金币</span>
              </div>
              <div class=" flex-1  share ml-1  p-1 ">
                   <span>累计邀请好友</span>
                  <span>11(人)</span>
              </div>
           </div>
           <p style="font-size:12px;color:white;padding:20px">注意事项：推广活动说明</p>
          

      </div>
       <el-dialog title="获取推广链接" :visible.sync="centerDialogVisible" width="90%" center>
          <p class="pb-1">推广试客链接：</p> 
          <el-input v-model="href_a" size="small" ></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="copy" :plain="true">一键复制</el-button>
          </span>
        </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'category',
  data(){
    return{
      centerDialogVisible:false,
      href_a:'',
    }
  },
  methods:{
    copy(){
      // this.centerDialogVisible=false

      this.$message({
        showClose: true,
        message: '恭喜你，成功复制',
        type: 'success'
      })
        
    }
  }
  
}
</script>
<style  scoped>
  .invaite{
    background-color: #7437DD ;
  }
  .ewm{ 
    background-color: #7437DD ;
    background-image:url('../../assets/img/invite/bg.jpg')  ;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    /* height:100vh; */
    text-align:center ;
    padding-top: 57%;
    padding-bottom: 50px;
  }
  .ewmimg{

    
  }
  .share{
    border: 3px dotted #8286fe;
    border-radius: 10px;
    font-size: 14px;
  }
  .share span{
    display: block;
    color: white;
     margin-top: 5px;
  } 
  .share_icon{
   
    padding: 5px;
    background-color: #dfe2f3;
    border: 1px solid white;
    border-radius: 10px;
  }
</style>
