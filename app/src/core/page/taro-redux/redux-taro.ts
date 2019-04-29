/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/19
 **/
import * as ejs from 'ejs';
import {join} from 'path';
import * as fse from 'fs-extra';
import {DataType, IAction, IActorEvent, IActorItem, IPageDefined, ISubComp, IType,} from '../generate';
import {insertFile, getHandleFile, IFileSaveOpt} from "../../util/compile-util";
import * as stringUitl from  '../../util/string-util';
import {genTsFromJSON} from "../../util/json-util";

const Util = {
  ... stringUitl,

  getDefaultByType(type: DataType) {
    switch (type) {
      case 'any':
        return "{}";
        break;
      case 'string':
        return "''";
        break;
      case 'object':
        break;
        return "{}"
      case 'string[]':
        break;
      case 'number':
        break;
        return "0";
      default:
        return "any";
    }
  },

  getReducerTsName(pageKey:string) {
    return `I${Util.toUCamelize(pageKey)}Reducer`;
  },

  getPropsTsName(actorName:string,propsName:string,data:IType):string{
    let name  = `I-${actorName}-${propsName}`;
    return  stringUitl.toUCamelize(name);
  }
};


export async function generate(context: IContext) {
  let {pageInfo,projectPath,prettiesConfig} = context;
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
  await handlePage('index.tsx.tpl', async (tplConent: string) => {
    let conent = ejs.render(tplConent, {
      ...base,
    });
    return conent;
  });

  await handlePage('index.less.tpl', async (tplConent: string) => {
    let conent = ejs.render(tplConent, {
      ...base,
    });
    return conent;
  });

  pageInfo.actors.forEach(async (actor: IActorItem, index: number) => {
    //reducer生成
    await handlePage(
      'reducer.ts.tpl',
      async (tplConent: string) => {
        let conent = ejs.render(tplConent, {
          ...base,
          actor,
          index,
        });
        return conent;
      },
      {saveFilePath: actor.fileName + '.ts'},
    );
  });

  //constant生成
  await handlePage('constant.ts.tpl', async (tplConent: string) => {
    let conent = ejs.render(tplConent, {
      ...base,
      events,
    });
    return conent;
  });



  //types生成
  await handlePage('types.ts.tpl', async (tplConent: string) => {

    let valueTsDefinds  =[];

    for (let i = 0, ilen = pageInfo.actors.length; i < ilen; i++) {
      let actor = pageInfo.actors[i];

      for (let j = 0, jlen = actor.datas.length; j < jlen; j++) {
        let dataItem = actor.datas[j];
        //TODO 也可以外部指定 schema
        let jsonDefied  =  await genTsFromJSON(Util.getPropsTsName(actor.fileName,dataItem.name,dataItem),dataItem.value);
        dataItem.schema=jsonDefied.schema;
        dataItem.typeName=jsonDefied.typeName;
        valueTsDefinds.push(jsonDefied.tsContent)
      }
    }

    let conent = ejs.render(tplConent, {
      ...base,
      valueTsDefinds: valueTsDefinds.join(""),
    });
    return conent;
  });

  //action生成
  pageInfo.actions.forEach(async (action: IAction) => {
    await handlePage(
      'action.ts.tpl',
      async (tplConent: string) => {
        let conent = ejs.render(tplConent, {
          ...base,
          action,
        });
        return conent;
      },
      {saveFilePath: action.fileName + '.ts'},
    );
  });

  //子组件生成;

  pageInfo.subComps.forEach(async (subComp: ISubComp, index: number) => {
    await handlePage(
      'components/sub-components.tsx.tpl',
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
      'components/sub-components.less.tpl',
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


export interface IFileSaveOptions{
  projectOutDir:string;
  toSaveFilePath:string;
  content:string;
}


/**
 *
 * @param {string} filePath
 * @param {(tplContent: string) => Promise<string>} dealCal
 * @returns {Promise<void>}
 */
export interface IContext extends IFileSaveOpt{
  projectPath: string;
  pageInfo: IPageDefined;
  prettiesConfig?: object;
}

export async function buildPage(context: IContext) {
  //在项目中生成相关文件
  // let projectSrc = join(context.projectPath, 'src');
  let pageInfo = context.pageInfo;
  pageInfo.pageKey = pageInfo.pagePath.replace('/',"-").replace('.',"-");

  await generate(context);
  //在项目配置中添加store.reducer  及 页面显示的配置. ;
  //先判断是否有, 如果有的话, 不再重新生成了.

}

