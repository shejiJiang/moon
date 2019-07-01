import compMethod from './props-def/comp-method-props';
import checkbox from './props-def/checkbox-props';
import actor from './props-def/actor-props';
import apiMethodType from './props-def/api-method-type-props';
import action from './props-def/action-props';
import actorData from './props-def/actor-data-props';
import input from './props-def/input-props';
import radio from './props-def/radio-props';
import comp from './props-def/comp-props';
import boolean from './props-def/boolean-props';
import actorEvent from './props-def/actor-event-props';
import apiMethod from './props-def/api-method-props';
import array from './props-def/array-props';
import object from './props-def/object-props';
import actionMethod from './props-def/action-method-props';

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/7/1
 **/

let PropsRepo = {
  boolean,
  array,
  checkbox,
  object,
  action,
  actionMethod,
  input,
  actorData,
  actor,
  actorEvent,
  compMethod,
  comp,
  boolean,
  radio,
  apiMethod,
  apiMethodType,
};

export function getPropsComp(type: string) {
  return PropsRepo[type] || 'div';
}

let alls = [
  'checkbox',
  'boolean',
  'radio',
  'object',
  'array',
  'input',
  'action',
  'actionMethod',
  'actor',
  'actorEvent',
  'actorData',
  'comp',
  'compMethod',
  'apiMethod',
  'apiMethodType',
];

/**
 * 添加可选组件;
 * @returns {string[]}
 */
export function getChooseableComp(): string[] {
  return alls;
}
