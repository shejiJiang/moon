import MoonCore from  'moon-core';
import * as fse from 'fs-extra';
import {join} from 'path';
import {IPageDefined} from "moon-core/declarations/typings/page";
import {genPage} from "./pc";
let toGenSub1Page = [
  // 'balance/bankcardsTest',
];

(async () => {
  // let db = await fse.readJSON(join(__dirname, 'db.json'));
  // let db = await fse.readJSON(join('/Users/dong/wanmi/athena-frontend/page-def', 'db.json'));
  //TODO 命名冲突 的问题 ..  actor名字, props名字会冲突;
  //TODO input 关键字处理..
  // let projectPath = '/Users/dong/wanmi/athena-frontend';
  let projectPath = process.cwd();
  let db  =  require(join(projectPath,"page-def/db"));
  let toGenMainPage  = require(join(projectPath,"page-def/to-gen-page"));
  for (let _key in db) {
    let pageInfo: IPageDefined = db[_key];
    if(!pageInfo.pagePath) {
      pageInfo.pagePath=_key;
    }

    if (toGenMainPage.includes(_key)) {
      await genPage({
        projectPath:projectPath,
        pageInfo,
      });
    } else if (toGenSub1Page.includes(_key)) {
      // <% pageInfo.actors.forEach(actor=>{ %>
      //   // import <%=Util.getReducerUniqName(pageInfo.pageKey , actor.fileName)%> from "./reducers/<%=actor.fileName%>"
      //   // import {registerReducer} from "@/redux/store";
      //   // registerReducer({<%=Util.getReducerUniqName(pageInfo.pageKey , actor.fileName)%>});
      //   <% }) %>

      await MoonCore.ReduxGen.buildPage({
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
        projectPath,
        pageInfo,
      });
    }
  }
})();

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

