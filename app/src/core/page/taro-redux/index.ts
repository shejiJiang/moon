import {IPageDefined} from './generate';
import {buildPage} from './redux-taro';
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

let toGenMainPage = [
  // 'login','register'
  // 'balance/wallet-charge',
  // 'balance/scan-pay',
  // 'after-sales-desc',
  'balance/bankcardsTest'
  // 'balance/bankcardsTest',
  // 'balance/wallet-pay-findpass',
  // 'shop-set/shop-setting',
  // 'shop-set/shop-position',
  // 'wallet-pay-findpass',
  // 'balance/withdraw-list',
  // 'balance/wallet-balance-list',
  // 'balance/withdraw-success',
  // 'balance/bankcards',
  // 'balance/withdraw',
  // 'balance/wallet-qrcode',
  // 'balance/wallet-withdraw',
  // 'balance/personal-check',
  // 'balance/pay-password',
  // 'balance/bankcard-add',
  // 'balance/bankcard-info',
];

let toGenSub1Page = [
  // 'balance/bankcardsTest',
];

(async () => {
  let db = await fse.readJSON(join(__dirname, 'db.json'));
  //TODO action 关联dispatch 界面化比较好处理些.. 伪代码 是不是可以添加起来了?
  //TODO 命名冲突 的问题 ..  actor名字, props名字会冲突;

  //TODO input 关键字处理..
  //TODO 参数关联一个ts定义的集合..

  //TODO 命令考虑增加一个数据呀.

  let projectPath = '/Users/dong/extraIn/RHourseO2O/';
  let prettiesConfig = {};
  try {
    prettiesConfig = await fse.readJSON(join(projectPath, 'pretties.json'));
  } catch (err) {}

  for (let _key in db) {
    let pageInfo: IPageDefined = db[_key];

    if (toGenMainPage.includes(_key)) {
      await buildPage({
        afterSave: async (options, context) => {
          if(options.toSaveFilePath.includes("index.tsx")) {
            console.log('应该只打印一遍的. ');
            await mainAfterSave(
              projectPath,
              join('pages', context.pageInfo.pagePath),
              context.pageInfo.pageKey,
            );

          }
        },
        prettiesConfig,
        projectPath,
        pageInfo,
      });
    } else if (toGenSub1Page.includes(_key)) {
      await buildPage({
        beforeSave: async (options, context) => {
          console.log('toSaveFilePath',options);
          options.toSaveFilePath = options.toSaveFilePath.replace(
            'pages',
            'subpage1',
          );
          console.log('toSaveFilePath',options);
          return options;
        },
        afterSave: async (options, context) => {
          if(options.toSaveFilePath.includes("index.tsx")) {
            options.content =  insertContent(options.content,[
              {
                mark: '@connect',
                isBefore: true,
                content: `
                import { registerReducer } from "@/store";
                import ${toLCamelize(context.pageInfo.pageKey)} from './reducer';
                registerReducer({${toLCamelize(context.pageInfo.pageKey)}});
                `,
                check: (content): boolean => !content.includes('./reducer'),
              }
            ]);

            await insertFile(join(projectPath, 'src', 'app.tsx'), [
              {
                mark: `//mark1-subpackage1//`,
                isBefore: false,
                content: `"${context.pageInfo.pagePath}/index",`,
                check: (content): boolean => !content.includes(context.pageInfo.pagePath),
              },
            ]);

          }
        },
        prettiesConfig,
        projectPath,
        pageInfo,
      });
    }
  }
})();

async function mainAfterSave(
  projectPath: string,
  pagePath: string,
  pageKey: string,
) {
  let projectSrc = join(projectPath, 'src');

  // let pageInfo  = context.pageInfo;
  //redux 框架简化添加流程;;
  let pageFilePath = join('@/', pagePath, 'reducer');
  await insertFile(join(projectSrc, 'reducers/index.ts'), [
    {
      mark: '//mark1//',
      isBefore: true,
      content: `import ${toLCamelize(pageKey)} from "${pageFilePath}";`,
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

  await insertFile(join(projectSrc, 'app.tsx'), [
    {
      mark: `'pages/empty/index'`,
      isBefore: true,
      content: `"${pagePath}/index",`,
      check: (content): boolean => !content.includes(pagePath),
    },
  ]);
}
