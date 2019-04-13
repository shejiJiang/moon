/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/4/13
 **/


interface IStyle {
  //布局框架相关
  flexDirection:string;
  justifyContent:string;
  height:string;
  width:string;
  padding:string;
  margin:string;
  order:string;

  backgroundColor:string;
  flexGrow:string;
  flexShrink:string;
  position:string;
  [name:string]:string|number;
}

interface IProps {
  [name:string]:string|number;
}

/**
 * 组件的定义
 */
export interface ICompDef{
  key:string
  style:IStyle;
  props:IProps;
  children?:ICompDef[]
}