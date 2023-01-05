<template>
  <el-dialog
    :visible="ModelState"
    :title="title"
    :close-on-click-modal='false'
    :close-on-press-escape='false'
    :modal-append-to-body="false"
    @close="closeDialog">
    <div class="form">
      <el-table
        :data="areaData"
        border
        stripe
        align="center"
        style="width:100%">
        <el-table-column
          label="图书号"
          align='center'
          property="bookid">
        </el-table-column>
        <el-table-column
          property="bookname"
          label="图书名称"
          align='center'>
        </el-table-column>

        <el-table-column
          property="bookprice"
          label="图书价格"
          align='center'>
        </el-table-column>

        <el-table-column
          prop="operation"
          align='center'
          label="操作">
          <template slot-scope='scope'>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click='oppenUpdateModel(scope.row.bookid)'>修改</el-button>
            <dialog-custom :BookId="bookId" :ModelUpdateState="showUpdateModel" @closeUpdateModal="closeUpdateModal" ref="child"/>
          </template>
        </el-table-column>

      </el-table>
    </div>
  </el-dialog>
</template>

<script>
  import { getBookList } from "@/api/book"
  import BookUpdate from "./BookUpdate"

  export default {
    name:'bookDetail',
    data(){
      return {
        areaData:[], //分类下的书籍信息
        title :"图书详情",
        showModel: false ,
        bookId: 0,
        //详情弹框信息
        dialog: {
          width:'400px',
          formLabelWidth:'200px'
        }
      }
    },
    props:{
      ModelState: {
        type: Boolean,
        default: false
      },
      BookClassId:{
        type: Number,
        default: 0
      }
    },
    components:{
      'dialog-custom': BookUpdate
    },
    mounted(){
    },
    methods:{
      showBook(val){
          getBookList(val).then(res=>{
            this.areaData = res.data.books;
            console.log(res.data.books);
          })

      },
      closeDialog(){
        this.$emit('closeModal','false')//子组件调用父组件的方法
      },
      closeUpdateModal(){
        this.showModel = false;
      },

      oppenUpdateModel(id){
        this.showUpdateModel = true;
        this.bookId = id;
        this.$refs.child.showBookDetail(id);
      }

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
