<template>
    <!-- 内容公共页面 -->
    <div class="contentIndex">
        <!-- 侧边导航 -->
        <el-menu :default-active="myIndex" class="el-menu-vertical-demo" :collapse="isCollapse" @select="handleSelect" background-color="#001529" text-color="#8F9FB3" active-text-color="#fff">
            <!-- 顶部 -->
            <el-radio-group :class="{homeTitle2:isCollapse===false}" class="homeTitle" v-model="isCollapse">
                <el-radio-button class="homeTitleImg" :label="false" v-if="isCollapse===true">
                    <i class="el-icon-s-unfold"></i>
                </el-radio-button>
                <div v-else>
                    <img src="../../assets/title.png">
                    <el-radio-button :label="true">
                        <i class="el-icon-s-fold"></i>
                    </el-radio-button>
                </div>
            </el-radio-group>
            <!-- 导航一 -->
            <!-- <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item> -->
            <!-- 导航三 -->
            <el-submenu v-for="(submenu,index) in marketingMenu" :key="index" :index="submenu.link">
                <template slot="title">
                    <i :class="submenu.icon"></i>
                    <span slot="title">{{submenu.name}}</span>
                </template>
                <el-menu-item v-for="(item,index2) in submenu.menu" :key="index2" :index="item.link">{{item.name}}</el-menu-item>
            </el-submenu>
        </el-menu>
        <!-- 右边 -->
        <div class="homeRight">
            <!-- 顶部 -->
            <div class="homeTop">
                <i class="el-icon-menu"></i>
                <div class="homeTopRight">
                    <el-avatar :size="30" :src="user.headImg"></el-avatar>
                    <div class="homeTopRightName">{{user.name}}</div>
                    <i class="el-icon-caret-bottom"></i>
                </div>
            </div>
            <!-- 内容 -->
            <router-view class="homeContent" />
        </div>
    </div>
</template>
<script>
    export default {
        name: 'contentIndex',
        data() {
            return {
                // 控制是否收缩
                isCollapse: false,
                // 顶部用户名称
                homeTopName: '风清扬(1002)',
                // 默认选中的侧边栏选项
                myIndex: '1',
                // 用户信息
                user: '',
                marketingMenu: []
            }
        },
        methods: {
            // 菜单激活回调
            handleSelect(index) {
                this.myIndex = index
                console.log(this.myIndex)
                this.$router.push(index)
                // if (index === '1') {
                //     this.$router.push('/content/home')
                // }
                // if (index === '3-1') {
                //     this.$router.push('/content/myWork/myWorkImg')
                // }
                // if (index === '3-2') {
                //     this.$router.push('/content/myWork/wholeWork')
                // }
            }
        },
        created() {
            this.user = JSON.parse(localStorage.getItem('user'))
            this.axios
                .get('/api/biz/v1/acl/tree', {
                    headers: { Authorization: this.user.sid }
                })
                .then(res => {
                    if (res.data.success) {
                        this.marketingMenu = res.data.data.marketingMenu
                        console.log('a')
                        console.log(this.marketingMenu)
                    }
                })
        }
    }
</script>
<style lang="scss" >
    .contentIndex {
        width: 100%;
        height: 100%;
        display: flex;
        // 侧边栏
        & /deep/ .el-menu-vertical-demo {
            width: 64px;
            height: 100%;
            .homeTitle {
                height: 64px;
                background-color: #002140;
                .el-radio-button {
                    line-height: 64px;
                    .el-radio-button__inner {
                        background-color: transparent;
                        border: none;
                    }
                    .el-icon-s-unfold,
                    .el-icon-s-fold {
                        font-size: 24px;
                        color: #8f9fb3;
                    }
                    .el-icon-s-fold {
                        font-size: 18px;
                    }
                }
                div {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-left: 22px;
                    img {
                        width: 100px;
                    }
                }
            }
            .homeTitle2 {
                width: 200px;
            }
            .el-menu-item {
                text-align: left;
            }
            .el-submenu {
                .el-submenu__title {
                    text-align: left;
                }
            }
            .is-active {
                background-color: #009cff !important;
            }
        }
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
        }
        // 右边
        .homeRight {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            // 顶部
            .homeTop {
                width: 100%;
                box-sizing: border-box;
                height: 64px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex: none;
                background-color: #fff;
                padding: 0 20px;
                .el-icon-menu {
                    font-size: 20px;
                    color: #b0c0dc;
                }
                .homeTopRight {
                    display: flex;
                    align-items: center;
                    .homeTopRightName {
                        margin-left: 8px;
                        margin-right: 10px;
                    }
                }
            }
            // 内容
            .homeContent {
                width: 100%;
                height: calc(100% - 64px);
                box-sizing: border-box;
                background-color: #fff;
                border: #f0f1f2 20px solid;
            }
        }
    }
</style>
