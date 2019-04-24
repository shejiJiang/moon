/**
 * @desc
 *
 * 墨刀页面统计
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/4/17
 **/

import * as fse from  'fs-extra';
import {join} from 'path';

//TODO 墨刀的数据怎么来的.


(async()=>{

  //
  let allNodes:INode[]  = fse.readJSONSync(join(__dirname,"modao.json"));

  const searchByName=(names:string[])=>{
    let nodes = [];
    for (let i = 0, iLen = allNodes.length; i < iLen; i++) {
      let nodeItem = allNodes[i];
      if (names.includes(nodeItem.name)) {
        nodeItem.index=i;
        console.log(nodeItem);
        nodes.push(nodeItem);
      }
    }
    return nodes;
  }


  /**
   * reverse find children node
   * @param {INode} node
   * @param {number} index
   */
  const findAllChildren = (node:INode,index:number)=>{
    let subItems=  [];
    for (let i = index, iLen = allNodes.length; i < iLen; i++) {
      let nodeItem = allNodes[i];
      nodeItem.index=i;
      if (nodeItem.parent_cid === node.cid) {
        // console.log('hit');
        subItems.push(nodeItem);
        findAllChildren(nodeItem,i);
      }else{
        // console.log('not hit');
      }
    }
    node.children =subItems;
  }

  let top = [
    '店铺选择',//sBBEF8C8A9B1554916490875
    '个人设置',//sD391A3307B1554919064760
    '工作台（概况）',//sD2869A14F81554825871626
    '收银',
    '应用'
  ];
  // 把扁平的数据 树形化;
  let topDb = searchByName(top);


  const printNode  = (node:INode, parentsNames=[])=>{
    //
    // for (let i = 0, iLen = level; i < iLen; i++) {
    //   blank+="-";
    // }
    console.log(`${parentsNames.join('-')}${node.name}`);
    for (let j = 0, jLen = node.children.length; j < jLen; j++) {
      let subNode = node.children[j];
      printNode(subNode,parentsNames.concat(node.name));
    }
  }

  topDb.forEach(top=>{
    findAllChildren(top,top.index);
    printNode(top);
  });
})();





interface INode {
  cid: string;
  name: string;
  orientation: string;
  position: number;
  project_cid: string;
  parent_cid: string;
  expanded: boolean;
  height: number;
  index?: number;
  hh?: any;
  fh?: any;
  bgcolor: string;
  bgimage: string;
  width: number;
  artboard_id?: any;
  state_cid: string;
  children:INode[]
}