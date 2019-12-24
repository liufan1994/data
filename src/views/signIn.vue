<template>
    <!-- 登录 -->
    <div class="signIn">
        <!-- 头部 -->
        <div class="signInHead">
            <!-- logo图片 -->
            <img class="signInHeadImg" src="../assets/logo.png">
        </div>
        <!-- 内容 -->
        <div class="signInContent">
            <!-- 左边 -->
            <div class="signInLeft">
                <div class="signInText1">尘锋营销中心</div>
                <div class="signInTetx2">自动化营销+营销工具一体的智能营销系统</div>
                <div class="signInText3">
                    <div>全渠道智能获客，统一客户信息，自动分发</div>
                    <div>定位客户画像，自定义智能营销漏斗</div>
                    <div>提升营销线索到商机的转化</div>
                </div>
            </div>
            <!-- 右边 -->
            <div class="signInRight">
                <!-- 标题 -->
                <div class="signInRightName">营销云登录</div>
                <!-- 表单 -->
                <el-form :model="ruleForm" :rules="rules">
                    <!-- 账号 -->
                    <el-form-item prop="input">
                        <el-input prefix-icon="el-icon-user" placeholder="请输入登录账号" v-model="ruleForm.input">
                        </el-input>
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item prop="input2">
                        <el-input class="signInRightInput" @keyup="passwordFun2" @change="passwordFun" prefix-icon="el-icon-lock" placeholder="请输入登录密码" v-model="ruleForm.input2" clearable>
                        </el-input>
                    </el-form-item>
                </el-form>
                <div class="signInRightFlex">
                    <!-- 记住密码 -->
                    <div class="signInRightFlex1" @click="signInRightFlex1Fun">
                        <div>
                            <div class="iconfont icon-fuxuankuang" v-if="isShowFu"></div>
                            <div class="iconfont icon-fuxuankuang1" v-else></div>
                        </div>
                        <div>记住密码</div>
                    </div>
                    <!-- 忘记密码 -->
                    <div class="signInRightFlex2">忘记密码</div>
                </div>
                <!-- 登录 -->
                <div class="signInRightButton" @click="signInButtonFun">登录</div>
                <!-- 立即注册 -->
                <div class="signInRightRegister">
                    <span>没有尘锋营销云账号？</span>
                    <span class="signInRightRegister1">立即注册</span>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <div class="signInBottom">
            <div>尘锋信息 京ICP备17028758号</div>
            <div>Copyright 2019 北京尖峰信息技术有限公司 All Rights ReserReservec</div>
            <!-- 植物图片 -->
            <img class="signInBottomImg" src="../assets/Plant.png">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'signIn',
        data() {
            return {
                ruleForm: {
                    // 账号输入框
                    input: '',
                    // 密码输入框
                    input2: ''
                },
                rules: {
                    input: [
                        {
                            required: true,
                            message: '请输入登录账号',
                            trigger: 'blur'
                        }
                    ],
                    input2: [
                        {
                            required: true,
                            message: '请输入密码',
                            trigger: 'blur'
                        },
                        {
                            min: 6,
                            max: 18,
                            message: '密码长度在 6 到 18 个字符',
                            trigger: 'blur'
                        }
                    ]
                },
                // 复选框，默认为未选中
                isShowFu: true
            }
        },
        methods: {
            // 点击记住密码
            signInRightFlex1Fun() {
                this.isShowFu = !this.isShowFu
            },
            // 密码框失去焦点或点击回车键
            passwordFun() {
                console.log(this.input2)
                if (this.input2.length < 6) {
                    this.$message.error('密码长度至少是6位数')
                }
            },
            passwordFun2(Cur) {
                Cur.value = Cur.value.replace(
                    /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/g,
                    ''
                )
            },
            signInButtonFun() {
                this.$router.push('/content/home')
            }
        }
    }
</script>
<style lang="scss" scoped>
    .signIn {
        height: 100%;
        position: relative;
        // 头部
        .signInHead {
            width: 100%;
            height: 54px;
            position: absolute;
            top: 0;
            display: flex;
            align-items: center;
            background-color: #fff;
            box-shadow: 0px 0px 10px 0px rgba(69, 154, 233, 0.3);
            .signInHeadImg {
                width: 150px;
                height: 26px;
                margin-left: 220px;
            }
        }
        // 内容
        .signInContent {
            height: 100%;
            display: flex;
            background: linear-gradient(
                250deg,
                rgba(246, 251, 255, 1) 0%,
                rgba(218, 231, 244, 1) 100%
            );
            .signInLeft {
                text-align: left;
                margin-left: 230px;
                margin-right: 150px;
                padding-top: 200px;
                .signInText1 {
                    font-size: 38px;
                    font-family: PingFangSC-Medium, PingFang SC;
                }
                .signInTetx2 {
                    font-size: 20px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    margin: 18px 0;
                }
                .signInTetx3 {
                    font-size: 18px;
                    font-family: PingFangSC-Light, PingFang SC;
                }
            }
            .signInRight {
                width: 249px;
                height: 320px;
                background-color: #fff;
                box-shadow: 0px 0px 25px 0px rgba(2, 36, 68, 0.3);
                border-radius: 8px;
                margin-top: 144px;
                padding: 45px 48px 0;
                .signInRightName {
                    font-size: 22px;
                    margin-bottom: 30px;
                }
                .signInRightFlex {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    .signInRightFlex1 {
                        display: flex;
                        .icon-fuxuankuang {
                            color: #d4d5d9;
                        }
                        .icon-fuxuankuang1 {
                            color: #009cff;
                        }
                    }
                    // 忘记密码
                    .signInRightFlex2 {
                        color: #009cff;
                    }
                }
                .signInRightButton {
                    width: 100%;
                    height: 40px;
                    background-color: #009cff;
                    color: #fff;
                    font-size: 16px;
                    border-radius: 4px;
                    line-height: 40px;
                    margin-top: 12px;
                    margin-bottom: 28px;
                }
                .signInRightRegister {
                    text-align: right;
                    font-size: 12px;
                    .signInRightRegister1 {
                        color: #009cff;
                    }
                }
            }
        }
        // 底部
        .signInBottom {
            width: 100%;
            height: 60px;
            position: absolute;
            bottom: 0;
            background-color: #d8e4f1;
            color: #595959;
            text-align: center;
            padding-top: 50px;
            .signInBottomImg {
                height: 110px;
                position: absolute;
                top: -84px;
                left: 230px;
            }
        }
    }
</style>
