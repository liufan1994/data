<template>
    <!-- 全部作品 -->
    <div class="wholeWork">
        <!-- tab -->
        <workTab/>
        <div class="wholeWorkContent">
            <!-- 搜索 -->
            <div class="wholeWorkSearch">
                <!-- 性别 -->
                <el-select class="el-select2" v-model="value" clearable placeholder="性别" size="small">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <!-- 地区 -->
                <el-select v-model="value2" clearable placeholder="地区" size="small">
                    <el-option v-for="item2 in options2" :key="item2.value" :label="item2.label" :value="item2.value">
                    </el-option>
                </el-select>
                <!-- 兴趣标签（多选） -->
                <el-select v-model="value3" multiple collapse-tags style="margin-left: 20px;" placeholder="兴趣标签（多选）" size="small">
                    <el-option v-for="item3 in options3" :key="item3.value" :label="item3.label" :value="item3.value">
                    </el-option>
                </el-select>
                <!-- 行为（多选） -->
                <el-select v-model="value4" multiple collapse-tags style="margin-left: 20px;" placeholder="行为（多选）" size="small">
                    <el-option v-for="item4 in options4" :key="item4.value" :label="item4.label" :value="item4.value">
                    </el-option>
                </el-select>
                <!-- 来源（多选） -->
                <el-select v-model="value5" multiple collapse-tags style="margin-left: 20px;" placeholder="来源（多选）" size="small">
                    <el-option v-for="item5 in options5" :key="item5.value" :label="item5.label" :value="item5.value">
                    </el-option>
                </el-select>
                <!-- 搜索按钮 -->
                <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
                <!-- 重置按钮 -->
                <el-button size="small" @click="resetFun">重置</el-button>
            </div>
            <!-- 表格 -->
            <el-table :data="tableData" height="calc(100% - 137px)">
                <!-- 头像 -->
                <el-table-column label="头像" min-width="70">
                    <template slot-scope="scope">
                        <div class="block">
                            <el-avatar shape="square" :src="scope.row.avatarUrl"></el-avatar>
                        </div>
                    </template>
                </el-table-column>
                <!-- 昵称 -->
                <el-table-column prop="nickName" label="昵称" min-width="120">
                </el-table-column>
                <el-table-column prop="phoneNumber" label="手机号" min-width="120">
                </el-table-column>
                <el-table-column prop="gender" label="性别" min-width="60">
                </el-table-column>
                <el-table-column label="地区" min-width="180">
                    <template slot-scope="scope">
                        <div class="block">{{scope.row.country}}{{scope.row.province}}省/{{scope.row.city}}市
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="state" label="兴趣标签" min-width="200">
                </el-table-column>
                <el-table-column prop="founder" label="互动" min-width="300">
                </el-table-column>
                <el-table-column prop="source" label="来源" min-width="160">
                </el-table-column>
                <el-table-column prop="form" label="表单" width="80">
                </el-table-column>
                <el-table-column prop="time" label="最近访问时间" width="120">
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
                // 性别下拉框选中内容
                value: '',
                // 性别下拉框
                options: [
                    {
                        value: '选项1',
                        label: '男'
                    },
                    {
                        value: '选项2',
                        label: '女'
                    }
                ],
                // 地区下拉框选中内容
                value2: '',
                // 地区下拉框内容
                options2: [
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
                // 兴趣标签（多选）下拉框选中内容
                value3: '',
                // 兴趣标签（多选）下拉框内容
                options3: [
                    {
                        value: '选项1',
                        label: '吸脂'
                    },
                    {
                        value: '选项2',
                        label: '双眼皮'
                    },
                    {
                        value: '选项3',
                        label: '隆鼻'
                    }
                ],
                // 行为（多选）下拉框选中内容
                value4: '',
                // 行为（多选）下拉框内容
                options4: [
                    {
                        value: '选项1',
                        label: '访问次数'
                    },
                    {
                        value: '选项2',
                        label: '访问H5'
                    },
                    {
                        value: '选项3',
                        label: '访问小程序'
                    }
                ],
                // 来源（多选）下拉框选中内容
                value5: '',
                // 来源（多选）下拉框内容
                options5: [
                    {
                        value: '选项1',
                        label: 'H5推广'
                    },
                    {
                        value: '选项2',
                        label: '文章'
                    }
                ],
                // 表格内容
                tableData: [],
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
                this.value2 = ''
                this.value3 = ''
                this.value4 = ''
                this.value5 = ''
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
            let user = JSON.parse(localStorage.getItem('user'))
            this.axios
                .get('/api/biz/v1/wxclue', {
                    // page: this.currentPage,
                    headers: {
                        Authorization: user.sid
                    }
                })
                .then(res => {
                    if (res.data.success) {
                        this.tableData = res.data.data.data
                        // console.log(res.data.data.data)
                    }
                })
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
                .el-select {
                    width: 200px;
                    margin-left: 0 !important;
                    margin-right: 10px;
                }
                .el-select2 {
                    width: 90px;
                }
                .el-button {
                    margin-left: 10px;
                }
            }
            &/deep/.el-table {
                width: 100%;
                min-height: 200px;
                .block {
                    height: 36px;
                    .el-avatar {
                        width: 36px;
                        height: 36px;
                        img {
                            width: 100% !important;
                        }
                    }
                }
            }
            &/deep/.el-pagination {
                text-align: right;
                margin-top: 20px;
            }
        }
    }
</style>
