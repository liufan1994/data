<template>
    <!-- 我的作品-图片展示形式 -->
    <div class="myWorkImg">
        <!-- 顶部tab -->
        <div class="myWorkTab">
            <div :class="{myWorkTabName2:isShowMyWorkTab}" class="myWorkTabName" @click="myWorkTabH5Fun">H5</div>
            <div :class="{myWorkTabName2:!isShowMyWorkTab}" class="myWorkTabName" @click="myWorkTabBdFun">表单</div>
        </div>
        <!-- 表单内容 -->
        <div class="myWorkContent">
            <div class="myWorkContent1" v-for="(myWork,index) in myWorks" :key="index">
                <div class="myWorkContentTop">
                    <!-- 作品图片 -->
                    <img class="myWorkContentImg" :src="myWork.myWorkContentImg">
                    <!-- 蒙版 -->
                    <div class="myWorkContentMask">
                        <el-button round>分 享</el-button>
                        <div class="myWorkMaskButton1">
                            <div class="iconfont icon-bianji"></div>
                            <div class="myWorkMaskButtonText">编辑</div>
                        </div>
                        <div class="myWorkMaskButton1">
                            <div class="iconfont icon-paiming"></div>
                            <div class="myWorkMaskButtonText">编辑</div>
                        </div>
                        <div class="myWorkMaskButton1">
                            <div class="iconfont icon-shanchu1"></div>
                            <div class="myWorkMaskButtonText">编辑</div>
                        </div>
                    </div>
                </div>
                <div class="myWorkContentText">
                    <div class="myWorkTextTop">
                        <!-- 作品标题 -->
                        <div>{{myWork.myWorkTextTitle}}</div>
                        <!-- 作品二维码 -->
                        <div class="iconfont icon-erweima"></div>
                    </div>
                    <!-- 作品浏览数据 -->
                    <div class="myWorkTextBottom">
                        <!-- 浏览量 -->
                        <div class="myWorkTextBrowse">
                            <div class="iconfont icon-yanjing"></div>
                            <div class="myWorkTextBrowseText">{{myWork.myWorkTextBrowse}}</div>
                        </div>
                        <!-- 人数 -->
                        <div class="myWorkTextBrowse myWorkTextBrowse2">
                            <div class="iconfont icon-renyuanguanli"></div>
                            <div class="myWorkTextBrowseText">{{myWork.myWorkTextNumber}}</div>
                        </div>
                        <!-- 留言 -->
                        <div class="myWorkTextBrowse">
                            <div class="iconfont icon-pinglun"></div>
                            <div class="myWorkTextBrowseText">{{myWork.myWorkTextMessage}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'myWorkImg',
        data() {
            return {
                // 顶部tab是否选中
                isShowMyWorkTab: false,
                myWorks: [
                    {
                        // 内容-图片路径
                        myWorkContentImg:
                            'https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                        // 作品标题
                        myWorkTextTitle: '我是标题',
                        // 浏览量
                        myWorkTextBrowse: '2',
                        // 人数
                        myWorkTextNumber: '1',
                        // 留言
                        myWorkTextMessage: '0'
                    },
                    {
                        // 内容-图片路径
                        myWorkContentImg:
                            'https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                        // 作品标题
                        myWorkTextTitle: '我是标题',
                        // 浏览量
                        myWorkTextBrowse: '2',
                        // 人数
                        myWorkTextNumber: '1',
                        // 留言
                        myWorkTextMessage: '0'
                    },
                    {
                        // 内容-图片路径
                        myWorkContentImg:
                            'https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                        // 作品标题
                        myWorkTextTitle: '我是标题',
                        // 浏览量
                        myWorkTextBrowse: '2',
                        // 人数
                        myWorkTextNumber: '1',
                        // 留言
                        myWorkTextMessage: '0'
                    },
                    {
                        // 内容-图片路径
                        myWorkContentImg:
                            'https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                        // 作品标题
                        myWorkTextTitle: '我是标题',
                        // 浏览量
                        myWorkTextBrowse: '2',
                        // 人数
                        myWorkTextNumber: '1',
                        // 留言
                        myWorkTextMessage: '0'
                    }
                ]
            }
        },
        methods: {
            // 点击H5tab
            myWorkTabH5Fun() {
                this.isShowMyWorkTab = true
            },
            // 点击表单tab
            myWorkTabBdFun() {
                this.isShowMyWorkTab = false
            }
        }
    }
</script>
<style lang="scss" scoped>
    .myWorkImg {
        height: 100%;
        .myWorkTab {
            height: 60px;
            display: flex;
            border-bottom: #e8e8e8 1px solid;
            .myWorkTabName {
                width: 62px;
                text-align: center;
                line-height: 60px;
                font-size: 16px;
            }
            .myWorkTabName2 {
                color: #009cff;
                border-bottom: #009cff 2px solid;
            }
        }
        .myWorkContent {
            height: calc(100% - 60px);
            display: flex;
            flex-wrap: wrap;
            overflow-y: auto;
            padding-bottom: 30px;
            box-sizing: border-box;
            .myWorkContent1 {
                width: 262px;
                height: 346px;
                position: relative;
                margin-top: 30px;
                margin-left: 28px;
                border: #e8e8e8 1px solid;
                .myWorkContentTop {
                    width: 262px;
                    height: 262px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-bottom: #e8e8e8 1px solid;
                    .myWorkContentImg {
                        width: 262px;
                        height: 262px;
                    }
                    .myWorkContentMask {
                        width: 262px;
                        height: 262px;
                        box-sizing: border-box;
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: none;
                        color: #fefefe;
                        font-size: 12px;
                        background-color: rgba(0, 0, 0, 0.6);
                        padding: 36px 27px;
                        &/deep/.el-button {
                            width: 110px;
                            height: 32px;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            padding: 0;
                            color: #fff;
                            background-color: rgba(255, 255, 255, 0.2);
                            font-family: PingFangSC-Regular, PingFang SC;
                        }
                        &/deep/.el-button:hover {
                            border: #009cff 1px solid;
                            background: #009cff;
                        }
                        .myWorkMaskButton1 {
                            display: flex;
                            align-items: center;
                            .myWorkMaskButtonText {
                                margin-left: 3px;
                            }
                            &:hover {
                                color: #009cff;
                            }
                        }
                    }
                }
                .myWorkContentTop:hover {
                    .myWorkContentMask {
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                    }
                }
                .myWorkContentText {
                    width: 100%;
                    box-sizing: border-box;
                    height: 84px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding: 0 10px;
                    .myWorkTextTop {
                        height: 44px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        border-bottom: #e8e8e8 1px solid;
                        .icon-erweima {
                            color: #8c8c8c;
                        }
                    }
                    .myWorkTextBottom {
                        height: 40px;
                        display: flex;
                        align-items: center;
                        color: #bfbfbf;
                        .myWorkTextBrowse {
                            height: 16px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex: 1;
                            .myWorkTextBrowseText {
                                margin-left: 8px;
                            }
                        }
                        .myWorkTextBrowse2 {
                            border-right: #e8e8e8 1px solid;
                            border-left: #e8e8e8 1px solid;
                        }
                    }
                }
            }
            .myWorkContent1:hover {
                box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.1);
            }
        }
    }
</style>
