/**
 * 整个项目api统一管理
 */

import request from "./request";

// 请求首页左侧的表格

export default {
    getTableData() {
        return request({
            url: '/home/getTableData',
            method: "get",
            mock: true,
        });
    },
    getCountData() {
        return request({
            url: "/home/getCountData",
            method: "get"
        })
    },
    getChartData() {
        return request({
            url: '/home/getChartData',
            method: 'get',
        })
    },
    getUserData(data) {
        return request({
            url: '/user/getUserData',
            method: 'get',
            data
        })
    },
    deleteUserData(data) {
        return request({
            url: '/user/deleteUserData',
            method: 'get',
            data
        })
    },
    addUser(params) {
        return request({
            url: '/user/addUser',
            method: 'post',
            data: params
        })
    },
    editUser(data) {
        return request({
            url: '/user/editUser',
            method: 'post',
            data
        })
    },
    getMenu(params) {
        return request({
            url: '/permission/getMenu',
            method: 'post',
            data: params
        })
    }
}