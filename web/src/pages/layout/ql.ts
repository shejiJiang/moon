/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/4/13
 **/
import {QL} from 'plume2';
import {ICompDef} from './types';

//获取选中的节点属性:
export const choosedCompProps = QL('choosedCompProps', [
  'compInfo',
  ['uiInfo', 'choosedCompPath'],
  (compInfo: any, choosedCompPath: string[] | null): ICompDef | null => {
    console.log('compInfo', compInfo);

    if (choosedCompPath) {
      return compInfo.getIn(choosedCompPath.slice(1)).toJS();
    } else {
      return null;
    }
  },
]);

export const choosedPathStr = QL('choosedPathStr', [
  ['uiInfo', 'choosedCompPath'],
  (choosedCompPath: string[] | null) => (choosedCompPath || []).join('-'),
]);
