import {IPageDefined} from "./generate";
import {buildPage} from "./redux-taro";

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/20
 **/




(async()=>{

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

  await buildPage({
    projectPath:"/Users/dong/extraIn/RHourseO2O/",
     pageInfo
  });

})()