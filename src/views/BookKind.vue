<template>
  <div class="fillcontain">
    <div class="table_container">
      <el-table
        :data="tableData"
        border
        stripe
        align="center"
        style="width:100%">
        <el-table-column
          label="图书分类号"
          align='center'
          property="bookkindid">
        </el-table-column>
        <el-table-column
          property="bookkindname"
          label="图书分类名称"
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
              icon="el-icon-view"
              @click='oppenModel(scope.row.bookkindid)'>详情</el-button>
            <dialog-custom :BookClassId="bookClassId" :ModelState="showModel" @closeModal="closeModal" ref="child"/>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import { getBookClassList } from "@/api/bookkind";
  import BookDetail from "./BookDetail"

  export default {
    data(){
      return {
        tableData: [],    //书籍分类数据 v
        showModel: false ,  //详情弹框的显示
        bookClassId: 0    //显示哪个图书分类下的图书
      }
    },
    components:{
      'dialog-custom': BookDetail
    },
    mounted(){
      this.getData();   //v
    },
    methods: {
      getData(){    //v
        getBookClassList().then(res=>{
          this.tableData = res.data.bookClass;
          console.log(res.data.bookClass);
          // console.log(res);
        })
      },
      oppenModel(id){
        this.showModel = true;
        this.bookClassId = id;
        this.$refs.child.showBook(id);//调用子组件的的方法 用来展示图书详情
      },
      closeModal(){
        this.showModel = false;
      }

    },
  }
</script>

<style lang="less" scoped>
  .fillcontain{
    padding-bottom: 0;
  }
  .contain{
    background: #fff;
    padding: 10px;
    margin-bottom: 20px;
  }
  .pagination{
    padding: 10px 20px;
    text-align: right;
  }
</style>



