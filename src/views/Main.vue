<script setup>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue';
import CommonTab from '../components/CommonTab.vue';
import router from '@/router';
</script>

<template>
    <div class="common-layout">
        <el-container class="lay-container">
            <!-- 自定义左侧的组件 -->
            <common-aside />
            <el-container>
                <el-header>
                    <common-header />
                </el-header>
                <common-tab />
                <el-main class="right-main">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="less" scoped >
.common-layout,
.lay-container {
    height: 100%;
}
.el-header{
    background-color: #333;
}
</style>
