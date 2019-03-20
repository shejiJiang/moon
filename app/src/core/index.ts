/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/19
 **/

import * as ejs from 'ejs';
import {join, resolve, parse} from 'path';
import * as fse from 'fs-extra';
import {IAction, IActorEvent, IActorItem, IPageDefined, ISubComp} from './generate';

const Util = {
  /**
   * 大驼峰
   * @param {string} name
   * @returns {any}
   */
  //首字母大写.   abc-dfdsf AbcDfdsf
  toUCamelize(name: string) {
   return name.split("-").map(item=>{
      return item[0].toUpperCase()+item.substr(1)
    }).join("");
  },

  /**
   * 小驼峰
   * @param {string} name
   * @returns {any}
   */
  //首字母小写, abc-dfdsf abcDfdsf
  toLCamelize(name: string) {
    let camelName =this.toUCamelize(name);
    return camelName[0].toLowerCase()+camelName.substr(1);
  },
};

export async function generate(pageInfo: IPageDefined) {

  //所有的事件..
  let events  = pageInfo.actors.reduce((accumulator:IActorEvent[],currentValue:IActorItem ) => {
    console.log(`accumulator:${accumulator}, currentValue:${currentValue}`);
    return accumulator.concat( currentValue.events)
  },[]);

  let handlePage = getHandlePage(join("/Users/dong/extraIn/RHourseO2O/src/pages/",pageInfo.key));

  let base = {
    pageInfo,
    Util,
    className: Util.toUCamelize(pageInfo.key),
    instanceName: Util.toLCamelize(pageInfo.key),
    events
  };
  //首页生成
  await handlePage('index.tsx.tpl', async (tplConent: string) => {
    let conent = ejs.render(tplConent, {
      ...base ,
    });
    return conent;
  });

  await handlePage('index.less.tpl', async (tplConent: string) => {
    let conent = ejs.render(tplConent, {
      ...base ,
    });
    return conent;
  });

  pageInfo.actors.forEach(async (actor:IActorItem, index:number) => {
    //reducer生成
    await handlePage('reducer.ts.tpl', async (tplConent: string) => {
      let conent = ejs.render(tplConent, {
        ...base ,actor,index
      });
      return conent;
    },{saveFilePath: actor.name+".ts"});
  });

  //constant生成
  await handlePage('constant.ts.tpl', async (tplConent: string) => {

    let conent = ejs.render(tplConent, {
      ...base,events
    });
    return conent;
  });

  //types生成
  await handlePage('types.ts.tpl', async (tplConent: string) => {
    let conent = ejs.render(tplConent, {
      ...base ,
    });
    return conent;
  });

  //action生成
  pageInfo.actions.forEach(async (action:IAction)=>{

    await handlePage('action.ts.tpl', async (tplConent: string) => {
      let conent = ejs.render(tplConent, {
        ...base ,action
      });
      return conent;
    },{saveFilePath:action.name+".ts"});
  });

  //子组件生成;

  pageInfo.subComps.forEach(async (subComp:ISubComp,index:number)=>{
    await handlePage(
      'components/sub-components.tsx.tpl',
      async (tplConent: string) => {

        let conent = ejs.render(tplConent, {
          ...base ,subComp
        });
        return conent;
      },
      {saveFilePath: 'components/'+subComp.name+'.tsx'},
    );

    await handlePage(
      'components/sub-components.less.tpl',
      async (tplConent: string) => {
        let conent = ejs.render(tplConent, {
          ...base ,subComp
        });
        return conent;
      },
      {saveFilePath: 'components/'+subComp.name+'.less'},
    );



  })

}

const tplBase = join(__dirname, 'tpl');

interface IHandlePageParam {
  saveFilePath: string;
}

/**
 * 获取处理页面内容;;
 * @param {string} outDir
 * @returns {(filePath: string, dealCal: (tplContent: string) => Promise<string>, param?: IHandlePageParam) => Promise<void>}
 */
function getHandlePage(outDir:string){

  return (async function handlePage(
    filePath: string,
    dealCal: (tplContent: string) => Promise<string>,
    param?: IHandlePageParam,
  ) {
    let _param = {saveFilePath: filePath.replace('.tpl', ''), ...param};
    let _tplFilePath = join(tplBase, filePath);

    let _tplContent = await fse.readFile(_tplFilePath);
    console.log('开始处理模板: ',_tplFilePath);
    let content = await dealCal(_tplContent.toString());
    await fse.ensureDir(join(outDir, parse(_param.saveFilePath).dir));
    await fse.writeFile(join(outDir, _param.saveFilePath), content);
  })
}
/**
 *
 * @param {string} filePath
 * @param {(tplContent: string) => Promise<string>} dealCal
 * @returns {Promise<void>}
 */


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
      name: 'action',
      methods: [
        {
          name: 'init',
          param: '',
        },
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
      name: 'header',
      methods: [],
    },
    {
      name: 'list',
      methods: [],
    },
    {
      name: 'foot',
      methods: [],
    },
  ],
};
(async () => {
  await generate(pageInfo);
})();
