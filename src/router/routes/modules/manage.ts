import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/manage',
  name: 'Manage',
  component: DEFAULT_LAYOUT,
  redirect: '/manage-goods',
  meta: {
    locale: 'menu.goods',
    requiresAuth: true,
    hideChildrenInMenu: true,
    icon: 'icon-user',
  },
  children: [
    {
      path: '/manage-goods',
      name: 'ManageGoods',
      component: () => import('@/views/manage-goods/index.vue'),
      meta: {
        locale: 'menu.goods',
        requiresAuth: true,
        roles: ['*'],
        activeMenu: 'ManageGoods',
      },
    },
    {
      path: '/manage-goods/details',
      name: 'ManageGoodsDetails',
      component: () => import('@/views/manage-goods/details/index.vue'),
      meta: {
        locale: 'menu.goods.details',
        requiresAuth: true,
        roles: ['*'],
        activeMenu: 'ManageGoodsDetails',
      },
    },
  ],
};

export default DASHBOARD;
