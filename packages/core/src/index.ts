/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/5/31
 **/

import * as ReduxGen  from  './page/redux/redux';
import * as JsonUtil from  './util/json-util';
import * as StringUtil from './util/string-util';
import * as CompileUtil from './util/compile-util';
import * as WebApiGen from './web-api/client';
import * as fakeGen from './web-api/client/fake-gen';
import * as TsIndex from './web-api/client/ts-index';


// export  ReduxGen;

export default {
  ReduxGen,
  JsonUtil,
  StringUtil,
  CompileUtil,
  fakeGen,
  WebApiGen,
  TsIndex
}