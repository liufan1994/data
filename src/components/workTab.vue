<template>
    <!-- 作品tab -->
    <div class="workTab">
        <div :class="{myWorkTabName2:isShowMyWorkTab}" class="myWorkTabName" @click="myWorkTabH5Fun">H5</div>
        <div :class="{myWorkTabName2:!isShowMyWorkTab}" class="myWorkTabName" @click="myWorkTabBdFun">表单</div>
    </div>
</template>
<script>
    export default {
        name: 'workTab',
        data() {
            return {
                // tab是否选中
                isShowMyWorkTab: false
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
    .workTab {
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
</style>
