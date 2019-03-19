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
import {IAction, IActorEvent, IActorItem, IPageDefined} from './generate';

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
  await handlePage(
    'components/sub-components.tsx.tpl',
    async (conent: string) => {
      return conent;
    },
    {saveFilePath: 'components/order-header.tsx'},
  );
}

const tplBase = join(__dirname, 'tpl'),
  outputBase = join(__dirname, 'out');

interface IHandlePageParam {
  saveFilePath: string;
}
/**
 *
 * @param {string} filePath
 * @param {(tplContent: string) => Promise<string>} dealCal
 * @returns {Promise<void>}
 */
async function handlePage(
  filePath: string,
  dealCal: (tplContent: string) => Promise<string>,
  param?: IHandlePageParam,
) {
  let _param = {saveFilePath: filePath.replace('.tpl', ''), ...param};
  let _tplFilePath = join(tplBase, filePath);

  let _tplContent = await fse.readFile(_tplFilePath);
  console.log('开始处理模板: ',_tplFilePath);
  let content = await dealCal(_tplContent.toString());
  await fse.ensureDir(join(outputBase, parse(_param.saveFilePath).dir));
  await fse.writeFile(join(outputBase, _param.saveFilePath), content);
}

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
      name: 'order-header',
      methods: [],
    },
  ],
};
(async () => {
  await generate(pageInfo);
})();
