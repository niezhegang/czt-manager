/**
 * Created by Administrator on 2016/8/15.
 */

import SImmutable from "seamless-immutable";

let final = {

  URL: {
    //*******************************************************用户管理 users***********************************************************//
    users: "users",//查询所有用户信息
    deleteUser: "users/{id}",//删除某用户信息
    addUser: "users",//新增用户
    changeUser: "users/{id}",//修改用户
    resetUserPass:"users/{id}/resetPassword",
    //*******************************************************角色管理 roles***********************************************************//
    roles: "roles",//查询所有角色信息
    deleteRole: "roles/{id}",//删除角色信息
    addRole: "roles",//新增角色信息
    //*******************************************************菜单信息***********************************************************//
    menus: "menus/cascade",//所有菜单信息
    roleHasMenu: "roles/{id}/menus",//查询某角色下的已有菜单
    roleMenuChange: "roles/{id}",//修改菜单
    //*******************************************************高新问答***********************************************************//
    highTechQuestions: "highTechQuestions", //修改问答
    delQuestions: 'highTechQuestions/{id}',//删除问答
    addQuestion: 'highTechQuestions', //新增问答
    changeQuestion: 'highTechQuestions/{id}', //修改问答
    //*******************************************************资助管理***********************************************************//
    subsidyPolicies: "subsidyPolicies", //资助管理列表
    cascade: 'regions/cascade', //行政区划
    subsidyPolicies: 'subsidyPolicies', //新增资助政策
    deleteSubside: 'subsidyPolicies/{id}', //删除政策
    changeSubside: 'subsidyPolicies/{id}', //修改政策
    //*******************************************************实验室信息***********************************************************//

    //*******************************************************资质信息***********************************************************//

  },
  /*
   * 字典表
   */
  dictionaries: {},
  /*
   * 附件地址
   * */
  FILE: {}
};

let Final = SImmutable(final);

export default final;
