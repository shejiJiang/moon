import {IPageDefined} from '../generate';
import {buildPage} from './redux';
import * as fse from 'fs-extra';
import {join} from 'path';
import {insertContent, insertFile} from '../../util/compile-util';
import {toLCamelize} from '../../util/string-util';

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/20
 **/

import toGenMainPage from  '/Users/dong/wanmi/athena-frontend/page-def/to-gen-page';

let toGenSub1Page = [
  // 'balance/bankcardsTest',
];

//
// let toGenMainPage = [
//   // 'balance/bankcard-info',
//   'trade/info'
// ];
(async () => {
  // let db = await fse.readJSON(join(__dirname, 'db.json'));
  let db = await fse.readJSON(join('/Users/dong/wanmi/athena-frontend/page-def', 'db.json'));
  //TODO action 关联dispatch 界面化比较好处理些.. 伪代码 是不是可以添加起来了?
  //TODO 命名冲突 的问题 ..  actor名字, props名字会冲突;
  //TODO input 关键字处理..
  //TODO 参数关联一个ts定义的集合..
  //TODO 命令考虑增加一个数据呀.

  let projectPath = '/Users/dong/wanmi/athena-frontend';
  let prettiesConfig = {};
  try {
    prettiesConfig = await fse.readJSON(join(projectPath, 'pretties.json'));
  } catch (err) {}

  for (let _key in db) {
    let pageInfo: IPageDefined = db[_key];
     if(!pageInfo.pagePath) {
       pageInfo.pagePath=_key;
     }

    if (toGenMainPage.includes(_key)) {
      await buildPage({
        afterSave: async (options, context) => {
          if(options.toSaveFilePath.includes("index.tsx")) {

            console.log('应该只打印一遍的. ');
            let projectSrc  = projectPath;
            let pageKey = context.pageInfo.pageKey;
            let pageFilePath =join('pages', context.pageInfo.pagePath);

            await insertFile(join(projectSrc, 'src/redux/reducers/index.ts'), [
              {
                mark: '//mark1//',
                isBefore: true,
                content: `import ${toLCamelize(pageKey)} from "@/${pageFilePath}";`,
                check: (content): boolean => !content.includes(pageFilePath),
              },
              {
                mark: '//mark2//',
                isBefore: false,
                content: toLCamelize(pageKey) + ',',
                check: (content, rawContent): boolean =>
                  !rawContent.includes(pageFilePath),
              },
            ]);

            //TODO 路由添加下呢.
            await insertFile(join(projectSrc, 'src/pages/App.tsx'), [
              {
                mark: 'const',
                isBefore: true,
                content: `import ${toLCamelize(pageKey)} from "@/${pageFilePath}";`,
                check: (content): boolean => !content.includes(pageFilePath),
              },
              {
                mark: '{/*auto*/}',
                isBefore: false,
                content: `<Route path="/${context.pageInfo.pagePath}" component={${toLCamelize(pageKey)}} />`,
                check: (content, rawContent): boolean =>
                  !rawContent.includes(pageFilePath),
              },
            ]);
          }
        },
        prettiesConfig,
        projectPath,
        pageInfo,
      });
    } else if (toGenSub1Page.includes(_key)) {
      // <% pageInfo.actors.forEach(actor=>{ %>
      //   // import <%=Util.getReducerUniqName(pageInfo.pageKey , actor.fileName)%> from "./reducers/<%=actor.fileName%>"
      //   // import {registerReducer} from "@/redux/store";
      //   // registerReducer({<%=Util.getReducerUniqName(pageInfo.pageKey , actor.fileName)%>});
      //   <% }) %>

      await buildPage({
        //动态加载;
      //   import balanceBankcardInfoBankInfo from "./reducers/bank-info"
      //   import {registerReducer} from "@/redux/store";
      // registerReducer({balanceBankcardInfoBankInfo});


      // beforeSave: async (options, context) => {
        //   console.log('toSaveFilePath',options);
        //   options.toSaveFilePath = options.toSaveFilePath.replace(
        //     'pages',
        //     'subpage1',
        //   );
        //   console.log('toSaveFilePath',options);
        //   return options;
        // },
        // afterSave: async (options, context) => {
        //   if(options.toSaveFilePath.includes("index.tsx")) {
        //     options.content =  insertContent(options.content,[
        //       {
        //         mark: '@connect',
        //         isBefore: true,
        //         content: `
        //         import { registerReducer } from "@/store";
        //         import ${toLCamelize(context.pageInfo.pageKey)} from './reducer';
        //         registerReducer({${toLCamelize(context.pageInfo.pageKey)}});
        //         `,
        //         check: (content): boolean => !content.includes('./reducer'),
        //       }
        //     ]);
        //
        //     await insertFile(join(projectPath, 'src', 'app.tsx'), [
        //       {
        //         mark: `//mark1-subpackage1//`,
        //         isBefore: false,
        //         content: `"${context.pageInfo.pagePath}/index",`,
        //         check: (content): boolean => !content.includes(context.pageInfo.pagePath),
        //       },
        //     ]);
        //
        //   }
        // },
        prettiesConfig,
        projectPath,
        pageInfo,
      });
    }
  }
})();
//
// async function mainAfterSave(
//   projectPath: string,
//   pagePath: string,
//   pageKey: string,
// ) {
//   let projectSrc = join(projectPath, 'src');
//
//   // let pageInfo  = context.pageInfo;
//   //redux 框架简化添加流程;;
//   let pageFilePath = join('@/', pagePath, 'reducer');
//
//
//   await insertFile(join(projectSrc, 'app.tsx'), [
//     {
//       mark: `'pages/empty/index'`,
//       isBefore: true,
//       content: `"${pagePath}/index",`,
//       check: (content): boolean => !content.includes(pagePath),
//     },
//   ]);
// }
