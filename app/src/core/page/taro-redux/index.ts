import {IPageDefined} from './generate';
import {buildPage} from './redux-taro';
import * as fse from 'fs-extra';
import {join} from 'path';
import {insertContent} from '../../util/compile-util';
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
  'balance/bankcardsTest',
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

let toGenSub1Page = [];

(async () => {
  let db = await fse.readJSON(join(__dirname, 'db.json'));
  //TODO action 关联dispatch
  //TODO 命名冲突 的问题 ..  actor名字, props名字会冲突;

  //TODO input 关键字处理..
  //TODO 参数关联一个ts定义的集合..

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
          await afterSave(
            projectPath,
            join('pages', context.pageInfo.pagePath),
            context.pageInfo.pageKey,
          );
        },
        prettiesConfig,
        projectPath,
        pageInfo,
      });
    } else if (toGenSub1Page.includes(_key)) {
      await buildPage({
        beforeSave: async (options, context) => {
          options.toSaveFilePath = options.toSaveFilePath.replace(
            'pages',
            'subpage1',
          );
          //修改值 .
          return options;
        },
        afterSave: async (options, context) => {
          await afterSave(
            projectPath,
            join('subpage1', context.pageInfo.pagePath),
            context.pageInfo.pageKey,
          );
        },
        prettiesConfig,
        projectPath,
        pageInfo,
      });
    }
  }
})();

async function afterSave(
  projectPath: string,
  pagePath: string,
  pageKey: string,
) {
  let projectSrc = join(projectPath, 'src');

  // let pageInfo  = context.pageInfo;
  //redux 框架简化添加流程;;
  let pageFilePath = join('@/', pagePath, 'reducer');
  await insertContent(join(projectSrc, 'reducers/index.ts'), [
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

  await insertContent(join(projectSrc, 'app.tsx'), [
    {
      mark: `'pages/empty/index'`,
      isBefore: true,
      content: `"${pagePath}/index",`,
      check: (content): boolean => !content.includes(pagePath),
    },
  ]);
}
