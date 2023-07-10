<template>
  <div class="layout-container">
    <div style="margin:100px;width:50%;border:1px solid red">
      <my-table 
        :tableData="tableData" 
        :tableHeader="tableHeader" 
        :selectionShow="selectionShow" 
        :checkboxShow="checkboxShow"
        :detailShow="detailShow"
        :pageNum.sync="currentPage"
        :limit.sync="pageSize"
        :pageSizes="[1,2,3,4]"
        :dataTotal="tableData.length"
        @selectChange="selectChange"
        @pagination="getList"
      >

        <template #slotName="{scope}">
        {{scope.row[scope.column.property]}}
        <p v-if="scope.column.property === 'name'" style="color:blueviolet">自定义列插槽</p>

        </template>

        <template #operation="{scope}">
          <el-link :underline="false" type="primary" style="padding-right: 20px;"  @click="rowInfo(scope.row,$event)">详情</el-link>
          <el-link :underline="false" type="danger"  @click="rowInfo(scope.row,$event)">删除</el-link>

        </template>

      </my-table>
    </div>
    <el-button 
      @click="showDialog" 
      >
      弹出框
    </el-button>
    <el-button 
      @click="$router.push('layout')"
      >
      goLayout
    </el-button>
    <el-button @click="useVuex">
      vuex
    </el-button>
    <el-button @click="login">
      login
    </el-button>

  </div>
</template>

<script>
import router from '@/router'
import MyButton from '@/components/my-button.vue'
import store from '@/store'
export default {
  name: 'x',    
  props: {    
          
  },
  data() {
    return {
      dialogShow: false,
      selectionShow: true,
      checkboxShow: true,   
      detailShow: true,
      currentPage: 1,
      pageSize: 2,
      tableHeader: [
        {
          label: '编号',
          key: 'id',
          width: '80px'
      
        },
        {
          label: '姓名',
          key: 'name',
      
        },
        {
          label: '权限描述',
          key: 'description',
        
        }
      ],
      tableData: [
        {
          "id":221,
          "code": "01",
          "name": "西药开立权限",
          "description": "医生对西药处方权限",
          "ifUse":"0"
        },
        {
          "id":222,
          "code": "02",
          "name": "草药开立权限",
          "description": "医生对草药处方权限",
          "ifUse":"0"
        },
        {
          "id":223,
          "code": "03",
          "name": "成药开立权限",
          "description": "医生对成药处方权限",
          "ifUse":"0"
        }, 
        {
          "id":224,
          "code": "04",
          "name": "麻醉开立权限",
          "description": "医生对麻醉处方权限",
          "ifUse":"0"
        },
        {
          "id":225,
          "code": "05",
          "name": "精一开立权限",
          "description": "医生对精一处方权限",
          "ifUse":"0"
        }
      ],
    }
  },
    methods: {
      // login() {
      //   store.commit('stateUserInfo',{name:'ls',age:18,permission:['a','b','c']})
      // },
        useVuex() {
        store.dispatch('stateNum',10)
        // store.commit('stateUser','ls')
        store.commit({
          type:'stateUser',
          isName:'ww'
        })

        setTimeout(() => {
          console.log(store.state.num,'outnum--');
        }, 2000);

      },
      goPage(pageName) {
          router.push(pageName)
      },
      showDialog() {
          this.dialogShow = true
      },
      // 多选框
      selectChange(val) {

      },
      // 拿到最新的页码和每页条数，获取最新页码的数据，更新tableData
      getList() {

      },
      rowInfo(data,e) {
        e.currentTarget.blur()
        console.log(data,'rowInfo');
  }
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    components: {
      MyButton

    }
}
</script>

<style scoped lang="scss">
  .layout-container {
    width: 100%;
    height: 100%;
  }
</style>
