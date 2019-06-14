import {Command} from '../constant';
import {Dispatch} from '@/typings';
import {IAllReducerProps} from '../types';
import {getReducerData} from '@/redux/store';

export default (dispatch: Dispatch) => {
  let subAction = {};
  return subAction;
};

function getData(): IAllReducerProps {
  return {
    main: getReducerData('frameMain'),
  };
}
