<template>
  <el-dialog
    :visible="ModelUpdateState"
    :title="title"
    :close-on-click-modal='false'
    :close-on-press-escape='false'
    :modal-append-to-body="false"
    @close="closeUpdateDialog">
    <div class="form">
      <el-form
        ref="form"
        :model="form"
        :label-width="dialog.formLabelWidth"
        style="margin:10px;width:auto;">

        <el-form-item prop='bookname' label="图书名:">
          <el-input type="text" v-model="form.bookname"></el-input>
        </el-form-item>

        <el-form-item prop='bookprice' label="图书价格:">
          <el-input type="text" v-model="form.bookprice"></el-input>
        </el-form-item>

        <el-form-item  class="text_right">
          <el-button icon="el-icon-close" @click="closeUpdateDialog">取 消</el-button>
          <el-button type="primary" icon="el-icon-check" @click='onSubmit("form")'>提  交</el-button>
        </el-form-item>

      </el-form>
    </div>
  </el-dialog>
</template>

<script>
  import { getBookbyBookId,updateBookById } from "@/api/book";
  export default {
    inject:['reload'],
    name:'bookUpdate',
    data(){
      return {
        bookData:[],
        title :"图书修改详情",
        isVisible: this.ModelUpdateState,
        form:{
          bookid:'',
          bookname:'',
          bookprice: ''
        },
        //详情弹框信息
        dialog: {
          width:'400px',
          formLabelWidth:'120px'
        }
      }
    },
    props:{
      ModelUpdateState: {
        type: Boolean,
        default: false
      },
      BookId:{
        type: Number,
        default: 0
      }
    },
    mounted(){
    },
    methods:{
      showBookDetail(val){
          getBookbyBookId(val).then(res=>{
            this.bookData = res.data.book;
            this.form.bookid = res.data.book.bookid;
            this.form.bookprice = res.data.book.bookprice;
            this.form.bookname = res.data.book.bookname;
            console.log(res.data.book);
          })

      },

      onSubmit(form){
        let formData = this[form];
        const para = Object.assign({}, formData)
        console.log(para);
        let paras = "?bookid="+para.bookid+"&bookname="+para.bookname+"&bookprice="+para.bookprice;
        updateBookById(paras).then(res=>{
          // this.reload();
          console.log(res.msg);
          this.reload();
        })
      },
      closeUpdateDialog(){
        this.$emit('closeUpdateModal','false')
        this.reload();

      },
    }
  }
</script>

<style lang="less" scoped>
  .search_container{
    margin-bottom: 20px;
  }
  .btnRight{
    float: right;
    margin-right: 0px !important;
  }
  .searchArea{
    background:rgba(255,255,255,1);
    border-radius:2px;
    padding: 18px 18px 0;
  }
</style>
