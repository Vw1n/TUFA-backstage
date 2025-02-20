import Mock from "mockjs";
import homeApi from "./mockData/home";
import userApi  from "./mockData/user";
import menuApi from "./mockData/permission"
// 1 拦截路径 2 方法 3 数据
Mock.mock(/home\/getTableData/, "get", homeApi.getTableData);
Mock.mock(/home\/getCountData/, "get", homeApi.getCountData);
Mock.mock(/home\/getChartData/, "get", homeApi.getChartData);
Mock.mock(/user\/getUserData/,"get", userApi.getUserList);
Mock.mock(/user\/deleteUserData/,"get", userApi.deleteUser);
Mock.mock(/user\/addUser/,"post", userApi.createUser);
Mock.mock(/user\/editUser/, "post",userApi.updateUser);
Mock.mock(/permission\/getMenu/, "post",menuApi.getMenu);
