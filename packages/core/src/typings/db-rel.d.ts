/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/24
 **/



export interface Field {
  name: string;
  type: string;
  remark: string;
  chnname: string;
}

export interface Header {
  fieldName: string;
  relationNoShow: boolean;
}

export interface Table {
  title: string;
  fields: Field[];
  indexs: any[];
  headers: Header[];
  chnname: string;
}
