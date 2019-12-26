<template>
    <!-- 全部作品 -->
    <div class="wholeWork">
        <!-- tab -->
        <workTab/>
        <div class="wholeWorkContent">
            <!-- 搜索 -->
            <div class="wholeWorkSearch">
                <el-input v-model="input" placeholder="请输入标题" size="small"></el-input>
                <el-input v-model="input2" placeholder="请输入创建人" size="small"></el-input>
                <el-select v-model="value" clearable placeholder="状态" size="small">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
                <el-button size="small" @click="resetFun">重置</el-button>
            </div>
            <!-- 表格 -->
            <el-table :data="tableData2" height="calc(100% - 137px)">
                <el-table-column prop="title" label="标题" min-width="90">
                </el-table-column>
                <el-table-column prop="img" label="封面" min-width="100">
                </el-table-column>
                <el-table-column prop="text" label="描述" min-width="240">
                </el-table-column>
                <el-table-column prop="see" label="浏览数" min-width="100">
                </el-table-column>
                <el-table-column prop="number" label="表单数" min-width="100">
                </el-table-column>
                <el-table-column prop="state" label="状态" min-width="100">
                </el-table-column>
                <el-table-column prop="founder" label="创建人" min-width="100">
                </el-table-column>
                <el-table-column prop="time" label="创建时间" min-width="160">
                </el-table-column>
                <el-table-column label="操作" width="120" fixed="right">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="releaseRow(scope.$index, tableData)" type="text" size="small">
                            发布
                        </el-button>
                        <el-button @click.native.prevent="editRow(scope.$index, tableData)" type="text" size="small">
                            编辑
                        </el-button>
                        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[6, 12, 20, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    // tab
    import workTab from '../../../components/workTab'

    export default {
        name: 'wholeWork',
        components: {
            workTab
        },
        data() {
            return {
                // 标题输入框输入内容
                input: '',
                // 创建人输入框输入内容
                input2: '',
                // 下拉框选中内容
                value: '',
                // 下拉框内容
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    },
                    {
                        value: '选项2',
                        label: '双皮奶'
                    },
                    {
                        value: '选项3',
                        label: '蚵仔煎'
                    }
                ],
                // 表格内容
                tableData: [
                    {
                        title: '作品名称',
                        img: '王小虎',
                        text: '上海市普陀区金沙江路 1518 弄',
                        see: '699',
                        number: '41',
                        state: '未发布',
                        founder: '王芳',
                        time: '2019/01/01 12:56'
                    },
                    {
                        title: '作品名称',
                        img: '王小虎',
                        text: '上海市普陀区金沙江路 1518 弄',
                        see: '699',
                        number: '41',
                        state: '未发布',
                        founder: '王芳',
                        time: '2019/01/01 12:56'
                    },
                    {
                        title: '作品名称',
                        img: '王小虎',
                        text: '上海市普陀区金沙江路 1518 弄',
                        see: '699',
                        number: '41',
                        state: '未发布',
                        founder: '王芳',
                        time: '2019/01/01 12:56'
                    },
                    {
                        title: '作品名称',
                        img: '王小虎',
                        text: '上海市普陀区金沙江路 1518 弄',
                        see: '699',
                        number: '41',
                        state: '未发布',
                        founder: '王芳',
                        time: '2019/01/01 12:56'
                    },
                    {
                        title: '作品名称',
                        img: '王小虎',
                        text: '上海市普陀区金沙江路 1518 弄',
                        see: '699',
                        number: '41',
                        state: '未发布',
                        founder: '王芳',
                        time: '2019/01/01 12:56'
                    },
                    {
                        title: '作品名称',
                        img: '王小虎',
                        text: '上海市普陀区金沙江路 1518 弄',
                        see: '699',
                        number: '41',
                        state: '未发布',
                        founder: '王芳',
                        time: '2019/01/01 12:56'
                    },
                    {
                        title: '作品名称2',
                        img: '王小虎',
                        text: '上海市普陀区金沙江路 1518 弄',
                        see: '699',
                        number: '41',
                        state: '未发布',
                        founder: '王芳',
                        time: '2019/01/01 12:56'
                    },
                    {
                        title: '作品名称2',
                        img: '王小虎',
                        text: '上海市普陀区金沙江路 1518 弄',
                        see: '699',
                        number: '41',
                        state: '未发布',
                        founder: '王芳',
                        time: '2019/01/01 12:56'
                    }
                ],
                tableData2: [],
                // 分页-默认当前页
                currentPage: 1,
                // 每页条数-默认6条
                pageSize: 6
            }
        },
        methods: {
            // 点击重置
            resetFun() {
                this.value = ''
                this.input = ''
                this.input2 = ''
            },
            // 点击每夜多少条
            handleSizeChange(val) {
                this.pageSize = val
                this.tableData2 = this.tableData.slice(0, val)
            },
            // 点击分页
            handleCurrentChange(val) {
                this.tableData2 = this.tableData.slice(
                    this.pageSize * (val - 1),
                    this.pageSize * val
                )
            }
        },
        created() {
            this.tableData2 = this.tableData.slice(0, this.pageSize)
        }
    }
</script>
<style lang="scss" scoped>
    .wholeWork {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        .wholeWorkContent {
            width: 100%;
            height: calc(100% - 61px);
            box-sizing: border-box;
            padding: 20px 20px 0;
            &/deep/.wholeWorkSearch {
                display: flex;
                margin-bottom: 20px;
                .el-input {
                    margin-right: 10px;
                    width: 240px;
                }
                .el-select {
                    width: 240px;
                    margin-right: 10px;
                }
                .el-button {
                    margin-left: 10px;
                }
            }
            &/deep/.el-table {
                width: 100%;
                min-height: 200px;
            }
            &/deep/.el-pagination {
                text-align: right;
                margin-top: 20px;
            }
        }
    }
</style>
