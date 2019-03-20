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
import {
  IAction,
  IActorEvent,
  IActorItem,
  IPageDefined,
  ISubComp,
} from './generate';

const Util = {
  /**
   * 大驼峰
   * @param {string} name
   * @returns {any}
   */
  //首字母大写.   abc-dfdsf AbcDfdsf
  toUCamelize(name: string) {
    return name
      .split('-')
      .map(item => {
        return item[0].toUpperCase() + item.substr(1);
      })
      .join('');
  },

  /**
   * 小驼峰
   * @param {string} name
   * @returns {any}
   */
  //首字母小写, abc-dfdsf abcDfdsf
  toLCamelize(name: string) {
    let camelName = this.toUCamelize(name);
    return camelName[0].toLowerCase() + camelName.substr(1);
  },
};

export async function generate(pageInfo: IPageDefined) {
  //所有的事件..
  let events = pageInfo.actors.reduce(
    (accumulator: IActorEvent[], currentValue: IActorItem) => {
      console.log(`accumulator:${accumulator}, currentValue:${currentValue}`);
      return accumulator.concat(currentValue.events);
    },
    [],
  );

  let handlePage = getHandlePage(
    join('/Users/dong/extraIn/RHourseO2O/src/pages/', pageInfo.pagePath),
  );

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
    let conent = ejs.render(tplConent, {
      ...base,
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

const tplBase = join(__dirname, 'tpl');

interface IHandlePageParam {
  saveFilePath: string;
}

/**
 * 获取处理页面内容;;
 * @param {string} outDir
 * @returns {(filePath: string, dealCal: (tplContent: string) => Promise<string>, param?: IHandlePageParam) => Promise<void>}
 */
function getHandlePage(outDir: string) {
  return async function handlePage(
    filePath: string,
    dealCal: (tplContent: string) => Promise<string>,
    param?: IHandlePageParam,
  ) {
    let _param = {saveFilePath: filePath.replace('.tpl', ''), ...param};
    let _tplFilePath = join(tplBase, filePath);

    let _tplContent = await fse.readFile(_tplFilePath);
    console.log('开始处理模板: ', _tplFilePath);
    let content = await dealCal(_tplContent.toString());
    await fse.ensureDir(join(outDir, parse(_param.saveFilePath).dir));
    await fse.writeFile(join(outDir, _param.saveFilePath), content);
  };
}
/**
 *
 * @param {string} filePath
 * @param {(tplContent: string) => Promise<string>} dealCal
 * @returns {Promise<void>}
 */

let pageInfo: IPageDefined = {
  pagePath: 'order',
  actors: [
    {
      fileName: 'reducer',
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
      fileName: 'action',
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
      fileName: 'header',
      methods: [],
    },
    {
      fileName: 'list',
      methods: [],
    },
    {
      fileName: 'foot',
      methods: [],
    },
  ],
};

(async () => {
  //在项目中生成相关文件

  let projectSrc = join('/Users/dong/extraIn/RHourseO2O/src/');

  if (pageInfo.pagePath.includes('/')) {
    let subPath = pageInfo.pagePath.split('/');
    pageInfo.pageKey = subPath[subPath.length - 1];
  } else {
    pageInfo.pageKey = pageInfo.pagePath;
  }

  await generate(pageInfo);
  //在项目配置中添加store.reducer  及 页面显示的配置. ;
  //先判断是否有, 如果有的话, 不再重新生成了.

  //redux 框架简化添加流程;;

  let pagePath = join(
    'pages',
    pageInfo.pagePath
  );
  let pageFilePath = join('@/',pagePath,'reducer',);

  await insertContent(join(projectSrc, 'reducers/index.ts'),[
    {
      mark: '//mark1//',
      isBefore: true,
      content:  `import ${Util.toLCamelize(pageInfo.pageKey)} from "${pageFilePath}";`,
      check: (content): boolean => !content.include(pageFilePath),
    },
    {
      mark: '//mark2//',
      isBefore: false,
      content: Util.toLCamelize(pageInfo.pageKey)+",",
      check: (content): boolean => !content.include(pageFilePath),
    },
  ]);

  await insertContent(join(projectSrc, 'app.tsx'),[
    {
      mark: '"pages/empty/index"',
      isBefore: true,
      content:  ``,
      check: (content): boolean => !content.include(pageFilePath),
    }
  ]);





})();

interface IInsertOption {
  mark: string;
  isBefore: boolean;
  content: string;
  check: (content) => boolean;
}

async function insertContent(filepath: string, inserts: IInsertOption[]) {
  let content = await readFile(filepath);

  for (let i = 0, ilen = inserts.length; i < ilen; i++) {
    let item: IInsertOption = inserts[i];
    let index = content.indexOf(item.mark);

    if (!item.isBefore) {
      index = index + item.mark.length;
    }

    content = `${content.substring(0, index)}
    ${item.content} 
    ${content.substring(index)}
  `;
  }

  await fse.writeFile(filepath, content);
}

async function readFile(filePath: string): Promise<string> {
  let _tplContent = await fse.readFile(filePath);
  return _tplContent.toString();
}
