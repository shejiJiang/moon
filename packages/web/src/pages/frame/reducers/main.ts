import {Command} from '../constant';
import _ from 'lodash';
import {IMainReducer} from '../types';
import {Action} from 'typings/index';
import produce from 'immer';

const INITIAL_STATE: IMainReducer = {
  isReady: false,
  menuList: [
    {menuName: '概况', image: '', url: '/survey'},
    {
      menuName: 'reduxd',
      image: '',
      url: '',
      sub: [
        {
          menuName: '服务管理',
          url: '',
          sub: [
            {menuName: '服务列表', url: '/goods/services'},
            {menuName: '服务分类', url: '/goods/service-cate'},
          ],
        }, {
          menuName: '商品管理',
          url: '',
          sub: [
            {menuName: '商品列表', url: '/goods/list'},
            {menuName: '商品分类', url: '/goods/cates'},
          ],
        },{
          menuName: '合同模板',
          url: '',
          sub: [
            {menuName: '寄养合同', url: ''},
            {menuName: '活体合同', url: ''},
          ],
        },
      ],
    },
    {menuName: '订单', image: '', url: '',
      sub: [
        {
          menuName: '订单管理',
          url: '',
          sub: [
            {menuName: '订单列表', url: '/trade/list'},
          ],
        }
      ],
    },
    {menuName: '会员', image: '', url: '',
      sub: [
        {
          menuName: '会员管理',
          url: '',
          sub: [
            {menuName: '会员列表', url: '/customer/list'},
            {menuName: '宠物列表', url: ''},
            {menuName: '会员导入', url: ''},
          ],
        }
      ],},
    {menuName: '数据', image: '', url: '',
      sub: [
        {
          menuName: '数据概况',
          url: ''
        },
        {
          menuName: '员工业绩',
          url: ''
        },
        {
          menuName: '订单数据',
          url: ''
        },
        {
          menuName: '会员数据',
          url: ''
        }
      ]},
    {menuName: '资产', image: '', url: '',
      sub: [
        {
          menuName: '店铺资金',
          url: ''
        },
        {
          menuName: '收支明细',
          url: ''
        },
        {
          menuName: '提现记录',
          url: ''
        }
      ]},
    {menuName: '设置', image: '', url: '',
      sub: [
        {
          menuName: '店铺信息',
          url: '',
          sub: [
            {
              menuName: '店铺信息',
              url: '/set/shop-info'
            }
          ]
        },
        {
          menuName: '收银设置',
          url: ''
        },
        {
          menuName: '小票打印',
          url: ''
        },
        {
          menuName: '员工管理',
          url: '',
          sub: [
            {
              menuName: '员工管理',
              url: '/set/employees'
            },
            {
              menuName: '添加角色',
              url: '/set/add-role'
            }
          ]
        },
        {
          menuName: '提成设置',
          url: '',
          sub: [
            {
              menuName: '提成设置',
              url: '/set/withdraw'
            }
          ]
        }
      ]},
  ],

  componyInfo: {logo: '', time: '', tag1: '', tag2: ''},

  personalInfo: {headPoint: '', adminName: ''},
};
console.log("load");

export default function main(
  state = INITIAL_STATE,
  action: Action
): IMainReducer {
  const {type, payload} = action;

  let newState= produce<IMainReducer>(state, draftState => {
    switch (type) {
      //初始化
      case Command.init:
        draftState.isReady = true;
        for (let propKey in payload.main) {
          //@ts-ignore 这里处理的不够好.
          draftState[propKey] = payload.main[propKey];
        }
        return draftState;

      //重置
      case Command.clean:
        for (let propKey in INITIAL_STATE) {
          //@ts-ignore 这里处理的不够好.
          draftState[propKey] = INITIAL_STATE[propKey];
        }
        return draftState;
    }
  });
  return {... newState}
}
