import MoonCore from  'moon-core';
import * as fse from 'fs-extra';
import {join} from 'path';
import {IContext} from "moon-core/declarations/typings/page";

/**
 * 生成页面;
 * @param {{projectPath: string}} params
 */
export async function genPage(context:IContext){
  let {pageInfo,projectPath}  = context;
  let prettiesConfig = {};
  try {
    prettiesConfig = await fse.readJSON(join(projectPath, 'pretties.json'));
  } catch (err) {}

  await MoonCore.ReduxGen.buildPage({
    //默认行为; 外部可以覆盖.
    afterSave: async (options, context) => {
      if(options.toSaveFilePath.includes("index.tsx")) {
        // let pageKey = context.pageInfo.pageKey;
        // let pageFilePath =join('pages', context.pageInfo.pagePath);
        // for (let i = 0, iLen = pageInfo.actors.length; i < iLen; i++) {
        //   let actor = pageInfo.actors[i];
        //   // let reducerKey =  MoonCore.StringUtil.toLCamelize(pageKey+"-"+actor.fileName);
        //   // await MoonCore.CompileUtil.insertFile(join(projectPath, 'src/redux/reducers/index.ts'), [
        //   //   {
        //   //     mark: '//mark1//',
        //   //     isBefore: true,
        //   //     content: `import ${reducerKey} from "@/${pageFilePath}/reducers/${actor.fileName}";`,
        //   //     check: (content): boolean => !content.includes(pageFilePath),
        //   //   },
        //   //   {
        //   //     mark: '//mark2//',
        //   //     isBefore: false,
        //   //     content: reducerKey+ ',',
        //   //     check: (content, rawContent): boolean =>
        //   //       !rawContent.includes(pageFilePath),
        //   //   },
        //   // ]);
        // }
        // //TODO 路由添加下呢.
        // await insertFile(join(projectSrc, 'src/pages/App.tsx'), [
        //   {
        //     mark: 'const',
        //     isBefore: true,
        //     content: `const ${toUCamelize(pageKey)} = loadable(() => import('@/${pageFilePath}'));`,
        //     check: (content): boolean => !content.includes(pageFilePath),
        //   },
        //   {
        //     mark: '{/*mark*/}',
        //     isBefore: false,
        //     content: `<Route path="/${context.pageInfo.pagePath}" component={${toUCamelize(pageKey)}} />`,
        //     check: (content, rawContent): boolean =>
        //       !rawContent.includes(pageFilePath),
        //   },
        // ]);
      }
    },
    prettiesConfig,
    ...context
  });
}