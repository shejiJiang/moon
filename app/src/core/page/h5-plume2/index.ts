/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/4/12
 **/

import * as fse from 'fs-extra';
import * as ejs from 'ejs';
import {join} from 'path';
import {getHandleFile, insertContent, insertFile} from '../../util/compile-util';
import {toLCamelize} from '../../util/string-util';
import {IAction, IActorEvent, IActorItem, IPageDefined, ISubComp} from "../taro-redux/generate";
import {IFileSaveOptions} from "../taro-redux/redux-taro";
import * as stringUitl from "../../util/string-util";

let toGenePages=[
  'layout'
];

export interface IContextPlume2 {
  projectPath: string;
  pageInfo: IPageDefined;
  prettiesConfig?: object;
  beforeSave?: (options:IFileSaveOptions,context: IContextPlume2)=>Promise<IFileSaveOptions>;
  afterSave?: (options:IFileSaveOptions,context: IContextPlume2)=>Promise<void>;
}


const Util = {
  /**
   * 通过事件名称获取事件方法.
   * goods:init ==> goodsInit
   * goods::init ==> goodsInit
   *
   * @param {string} eventName
   */
  getEventFunName:(eventName:string)=>{
    return stringUitl.toUCamelize(eventName.replace(/:+/ig,"-"));
  },
  ... stringUitl,
};



(async()=>{

  let projectPath = '/Users/dong/Falcon/moon/web';
  let prettiesConfig = {};
  try {
    prettiesConfig = await fse.readJSON(join(projectPath, 'pretties.json'));
  } catch (err) {}


  let db = await fse.readJSON(join(__dirname, 'db.json'));

  for (let pagekey in db) {
    if(toGenePages.includes(pagekey)){
      let pageInfo = db[pagekey];

      await buildPage({
          prettiesConfig,
          projectPath,
          pageInfo,
      })
    }
  }

})();


async function buildPage (context:IContextPlume2) {
  let {pageInfo,projectPath,prettiesConfig} = context;
  pageInfo.pageKey = pageInfo.pagePath.replace('/',"-").replace('.',"-");

  //所有的事件..
  let events = pageInfo.actors.reduce(
    (accumulator: IActorEvent[], currentValue: IActorItem) => {
      // console.log(`accumulator:${accumulator}, currentValue:${currentValue}`);
      return accumulator.concat(currentValue.events);
    },
    [],
  );


  let handlePage = getHandleFile({prettiesConfig,outDir:join(projectPath,'/src/pages/', pageInfo.pagePath)
    ,tplBase:join(__dirname,"tpl"),
    context
  });

  let base = {
    pageInfo,
    Util,
    className: Util.toUCamelize(pageInfo.pageKey),
    instanceName: Util.toLCamelize(pageInfo.pageKey),
    events,
  };

  //首页生成
  await handlePage('index.tsx.ejs', async (tplConent: string) => {
    let conent = ejs.render(tplConent, {
      ...base,
    });
    return conent;
  });

  //store生成
  await handlePage('store.ts.ejs', async (tplConent: string) => {
    let conent = ejs.render(tplConent, {
      ...base,
    });
    return conent;
  });
  await handlePage('index.less.ejs', async (tplConent: string) => {
    let conent = ejs.render(tplConent, {
      ...base,
    });
    return conent;
  });

  for (let i = 0, iLen = pageInfo.actors.length; i < iLen; i++) {
    let actor = pageInfo.actors[i];
    await handlePage(
      'actor/main.ts.ejs',
      async (tplConent: string) => {
        let conent = ejs.render(tplConent, {
          ...base,
          actor,
          index:i,
        });
        return conent;
      },
      {saveFilePath: `actor/${actor.fileName}.ts`},
    );
  }

  //reducer index 生成
  await handlePage(
    'actor/index.ts.ejs',
    async (tplConent: string) => {
      let conent = ejs.render(tplConent, {
        ...base,
      });
      return conent;
    }
  );

  //action生成
  pageInfo.actions.forEach(async (action: IAction) => {
    await handlePage(
      'action/main.ts.ejs',
      async (tplConent: string) => {
        let conent = ejs.render(tplConent, {
          ...base,
          action,
        });
        return conent;
      },
      {saveFilePath: `action/${action.fileName}.ts`},
    );
  });

  await handlePage(
    'action/index.ts.ejs',
    async (tplConent: string) => {
      let conent = ejs.render(tplConent, {
        ...base,
      });
      return conent;
    }
  );

  //子组件生成;
  pageInfo.subComps.forEach(async (subComp: ISubComp, index: number) => {
    await handlePage(
      'components/sub-components.tsx.ejs',
      async (tplConent: string) => {
        let conent = ejs.render(tplConent, {
          ...base,
          subComp,
        });
        return conent;
      },
      {saveFilePath: 'components/' + subComp.fileName + '.tsx'},
    );

    await handlePage(
      'components/sub-components.less.ejs',
      async (tplConent: string) => {
        let conent = ejs.render(tplConent, {
          ...base,
          subComp,
        });
        return conent;
      },
      {saveFilePath: 'components/' + subComp.fileName + '.less'},
    );
  });
}