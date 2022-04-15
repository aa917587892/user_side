<template>
    <div class="info">
        <navbar class="info-navbar" >
            <div slot="center">个人信息</div>
            <div slot="left" @click="$router.back()" ><i class="el-icon-arrow-left" style="font-size:20px;color:white;padding-left:10px;margin-top:5px;font-weight:600"></i></div>
            <div slot="right" ><span  style="color:white;font-size:14px" @click="alter_click"><i class="el-icon-edit" ></i> 修改</span> </div>
        </navbar>
        <div class="mx-1 mt-2  border rounded" style="height:600px;margin-top:55px"  v-if="alter">
            <div class=" text-center pt-3 pb-2">
                <img src="https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg" width="140px" height="140px"   class="rounded-circle" alt="" srcset="">
            </div>
            <div class="mx-3">
                <label for="" >用户名</label>
                <el-input  size="small"  disabled class="mb-2" ></el-input>
                 <label for="" >手机号码</label>
                <el-input  size="small"  disabled class="mb-2" ></el-input>
                 <label for="">常用QQ</label>
                <el-input  size="small"  disabled class="mb-2" ></el-input>
                 <label for="">邮箱Email</label>
                <el-input  size="small"  disabled  class="mb-2"></el-input>
                <el-button type="danger" style="width:100%" >退出登录</el-button>
            </div>
        </div>

        <div  class="mt-4" v-else >
             <div class="p-2 border-bottom border-right border-left"><p>请注意:请如实填写信息，以免影响审核通过率</p></div>
            <div class="mx-1 mt-2  border rounded">
                
                <div class=" px-2 pt-3 pb-2">
                    <div class=" text-center">
                        <upload class="upload_image" :limit_count="limit_count" > </upload>
                    </div>
                    
                    <label for="" >用户名</label>
                    <el-input  size="small"  disabled class="mb-2" ></el-input>
                
                        <label for="" >手机号码</label>
                    <div class="flex align-center mb-2">
                        <el-input  size="small"  disabled  style="padding-right:10px" ></el-input>
                        <el-button type="primary" size="small">去修改</el-button>
                    </div>
                    <label for="">常用QQ</label>
                    <el-input  size="small"   class="mb-2" ></el-input>
                    <label for="">邮箱Email</label>
                    <el-input  size="small"    class="mb-2"></el-input>
                    <el-button type="primary" style="width:100%" >保存信息</el-button>
                </div>
        </div>
        </div>
       
    </div>
</template>
<script>
import navbar from'@/components/common/navbar/NavBar.vue'
import upload from'@/components/common/el-upload/el-upload.vue'
export default {
    data(){
        return{
            limit_count:1,
            hideUpload:false,
            alter:false
        }
    },
    methods:{
        handleRemove(file, fileList) {
            this.hideUpload =fileList.length >= this.limit_count
            },
        alter_click(){
           this.alter=this.alter?false:true
        }
    },
    components:{
        navbar,
        upload
    }
}
</script>
<style scoped>
   
    .info-navbar{
      background-color:#409eff;
        position: fixed;
        top:0;
        left: 0;
        right:0;
        z-index: 999;
    }
    .info_list p{
        font-size:14px;
        margin-top:5px;
    }
    .upload_image{
        border-radius: 50%;
    }

</style>