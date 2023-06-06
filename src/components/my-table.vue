  <template>
      <div>
        <el-table
        ref="myTable"
        class="my-table"
        style="width: 100%"
        border
        :data="tableData"
        @selection-change="handleSelectionChange"
        v-loading="loading"
        >
          
          <el-table-column type="selection" v-if="selectionShow" ></el-table-column> 
          <el-table-column type="index" :index="indexMethod" v-if="checkboxShow" label="序号" width="70" ></el-table-column>

          <template  v-for="item in tableHeader" >
              <el-table-column  :label="item.label" :prop="item.key" :width="item.width" >
              <template #default="scope">
                <slot name="slotName" :scope="scope"></slot>
              </template>
            </el-table-column>
          </template>


          <el-table-column label="操作">
           <template #default="scope">
          <slot name="operation" :scope="scope"></slot>

        </template>
      </el-table-column>
        </el-table>

        <div>
          <el-pagination
            :current-page.sync="currentPage"
            :page-size.sync="pageSize"
            :layout="pagination"
            :page-sizes="pageSizes"
            :total="dataTotal"
            v-bind="$attrs"
            @size-change="sizeChange"
            @current-change="currentChange"
          />
        </div>
      </div>
  </template>

  <script>
  export default {
      name: 'myTable',    
      props: {
        tableData:{
          type: Array,
          default: []
        },
        tableHeader:{
          type: Array,
          default: []
        },

        checkboxShow: {
          type: Boolean,
          default: false
        },
        selectionShow: {
          type: Boolean,
          default: false
        },
        limit:{
          type: Number,
          default: 2
        },
        pageNum:{
          type: Number,
          default:1
        },
        pagination: { 
        type: String,
        default: "total, sizes, prev, pager, next, jumper",
        },
        pageSizes: { 
        type: Array,
        default: () => [1,5,10,20,50]
        },
        dataTotal: {
          type: Number,
          default: 0
        }
      },
      data() {
          return {
            ACT_COLOR: '#61afef',
            INACT_COLOR: '#ccc',
            loading: false
          };
      },
      methods: {
        indexMethod (index) {
          return index < 10 ? `0${index + 1}` : index + 1
        },
        rowDetail(data) {
          this.$emit('rowDetail',data)
        },
        // 多选框
        handleSelectionChange(val) {
          this.$emit('selectChange',val)
        },
        // switch开关
        changeStatus(val) {
          console.log(val);
        },
        currentChange(val) {
          this.$emit('pagination')

        },
        sizeChange(val) {
          this.$emit('pagination')
        }
      },
      computed: {
        currentPage: {
          get() {
            return this.pageNum
          },
          set(val) {
            this.$emit('update:pageNum',val)
          }
        },
        pageSize: {
          get() {
            return this.limit
          },
          set(val) {
            this.$emit('update:limit',val)
          }
        }
      }
 
  }
  </script>

  <style scoped lang="">

  </style>
