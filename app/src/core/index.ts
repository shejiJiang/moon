/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/19
 **/

import * as ejs from 'ejs';
import {join,resolve,parse} from 'path';
import * as fse from 'fs-extra';
let people = ['geddy', 'neil', 'alex'],
  html = ejs.render('<%= people.join(", "); %>', {people: people});


export async function generate(pageInfo) {

  //首页生成
  await handlePage('index.tsx.tpl',async (conent:string)=>{
    return conent;
  });

  await handlePage('index.less.tpl',async (conent:string)=>{
    return conent;
  });

  //reducer生成
  await handlePage('reducer.ts.tpl',async (conent:string)=>{
    return conent;
  });
  //constant生成
  await handlePage('constant.ts.tpl',async (conent:string)=>{
    return conent;
  });

  //types生成
  await handlePage('types.ts.tpl',async (conent:string)=>{
    return conent;
  });

  //action生成
  await handlePage('action.ts.tpl',async (conent:string)=>{
    return conent;
  });

  //子组件生成;
  await handlePage('components/sub-components.tsx.tpl',async (conent:string)=>{
    return conent;
  },{saveFilePath:"components/order-header.tsx"});
}

const tplBase = join(__dirname, "tpl"),outputBase=join(__dirname, "out");


interface IHandlePageParam{
  saveFilePath:string;
}
/**
 *
 * @param {string} filePath
 * @param {(tplContent: string) => Promise<string>} dealCal
 * @returns {Promise<void>}
 */
async function handlePage(filePath:string,dealCal:(tplContent:string)=>Promise<string>,param?:IHandlePageParam) {

  let _param  = {saveFilePath:filePath.replace(".tpl",""),   ...param};
  let _tplFilePath = join(tplBase, filePath);

  let _tplContent = await fse.readFile(_tplFilePath);
  let content = await dealCal(_tplContent.toString());
  await fse.ensureDir(parse(_param.saveFilePath).dir);
  await fse.writeFile(join(outputBase,_param.saveFilePath),content);
}




//
// fileTpls.forEach(async fileItem => {
//
//   let _path = join(__dirname, fileItem.dir, fileItem.name + '.tpl');
//   let fileContent = await fse.readFile(_path);
//
//   html = ejs.render(fileContent.toString(), {people: people});
//
//   await fse.writeFile(join())
//
//   console.log(_path);
// });


let pageInfo = {
  key: 'order',
  actors: [
    {
      name: 'order',
      events: [
        {
          name: 'add',
          param: '',
        },
        {
          name: 'del',
          param: '',
        },
        {
          name: 'update',
          param: '',
        },
        {
          name: 'query',
          param: '',
        },
      ],
    },
  ],
  actions: [
    {
      name: 'order',
      methods: [
        {
          name: 'add',
          param: '',
        },
        {
          name: 'update',
          param: '',
        },
        {
          name: 'del',
          param: '',
        },
      ],
    },
  ],
  subComps: [
    {
      name: 'Header',
      methods: [],
    },
  ],
};
(async()=>{
  await generate(pageInfo);
})();