<template>
    <div>
        <el-menu :router="true" mode="horizontal" default-active="/vue-app1">
            <el-menu-item index="/vue-app1">
                vue微应用
            </el-menu-item>
            <el-menu-item index="/react-app1">
                react微应用
            </el-menu-item>
        </el-menu>
        <div id="vue"></div>
        <div id="react"></div>
    </div>

</template>