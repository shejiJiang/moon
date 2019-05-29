type HashUrl=string;


export interface IUrlParam{
  [name:string]:any
}

export function getHashParam(search:HashUrl):IUrlParam{
  let entrys = search.replace("?","").split('&')

  let result :IUrlParam = {};


  entrys.forEach(item=>{

    let [key,value]=item.split('=');

    result[key]=value;

  })
  return result;
}