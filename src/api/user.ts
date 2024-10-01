import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return new Promise((res, req) => {
    res({
      data: {
        token: '12345',
      },
      status: 'ok',
      msg: '请求成功',
      code: 20000,
    });
    // 失败
    //  else {
    //   req({
    //     data: null,
    //     status: 'fail',
    //     msg: '账号或者密码错误',
    //     code: 50000,
    //   });
    // }
  });
}

export async function logout() {
  // let res = await axios.post<LoginRes>('/api/user/logout');
  // console.log('logout+++++', res);

  return {
    data: null,
    status: 'ok',
    msg: '请求成功',
    code: 200,
  };
}

export function getUserInfo() {
  return {
    data: {
      name: '游客',
      avatar:
        'https://img1.baidu.com/it/u=2172391230,2457261248&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1727888400&t=ac5cabc2bf6beef646c9f2e0521cc29f',
      email: '1961782297@email.com',
      job: 'frontend',
      jobName: '前端艺术家',
      organization: 'Frontend',
      organizationName: '前端',
      location: 'shenzheng',
      locationName: '深圳',
      introduction: '人潇洒，性温存',
      personalWebsite: '',
      phone: '130****0000',
      registrationDate: '2013-05-10 12:10:00',
      accountId: '13005683936',
      certification: 1,
      role: 'admin',
    },
    status: 'ok',
    msg: '请求成功',
    code: 200,
  };
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}

export interface UserRecord {
  nickname: string;
  cellphone?: string;
  portrait?: string;
  money?: number;
  id?: number;
}

export function userList(params: { keyword: string; page: number }) {
  return axios.get<UserRecord[]>('/api/user/list', { params });
}

export function userInfo(params: { id: number }) {
  return axios.get<UserRecord>('/api/user/infos', { params });
}
