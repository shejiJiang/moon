import * as React from 'react';
import {Relax, TViewAction} from 'plume2';
import viewAction from '../action';
import './outline.less';

import {Tree} from 'antd';

const {TreeNode} = Tree;

interface IProps {
  relaxProps?: {
    viewAction?: TViewAction<typeof viewAction>;
    compInfo?: any;
  };
  [key: string]: any;
}

interface IState {
  [key: string]: any;
}

@Relax
export default class Outline extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
  }

  static relaxProps = {
    viewAction: 'viewAction',
    compInfo: 'compInfo',
  };

  render() {
    let treeNode = this.getTreeNode(this.props.relaxProps.compInfo);

    return (
      <div className="outline">
        <Tree
          data-id={'1231231'}
          defaultExpandAll={true}
          draggable
          showLine
          // defaultExpandedKeys={['0-0-0', '0-0-1']}
          // defaultSelectedKeys={['0-0-0', '0-0-1']}
          // defaultCheckedKeys={['0-0-0', '0-0-1']}
          onSelect={this.onSelect}
          onDragOver={this.onDragOver}
          onDrop={this.onDrop}
          onDragStart={this.onDragStart}
          onDragLeave={this.onDragLeave}
          // onDragEnter={this.onDragEnter}
          onDragEnd={this.onDragEnd}
        >
          {treeNode}
          {/*<TreeNode data-id={"1231231"} title="parent 1" key="0-0">*/}
          {/*<TreeNode data-id={"1231231"} title="parent 1-0" key="0-0-0" disabled>*/}
          {/*<TreeNode data-id={"1231231"}  title="leaf" key="0-0-0-0" disableCheckbox />*/}
          {/*<TreeNode title="leaf" key="0-0-0-1" />*/}
          {/*</TreeNode>*/}
          {/*<TreeNode title="parent 1-1" key="0-0-1">*/}
          {/*<TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />*/}
          {/*</TreeNode>*/}
          {/*</TreeNode>*/}
        </Tree>
      </div>
    );
  }

  getTreeNode = (compInfo, path = ['compInfo']) => {
    let subTreeNode;
    if (compInfo.has('children') && compInfo.get('children').count() > 0) {
      subTreeNode = compInfo.get('children').map((item, index) => {
        return this.getTreeNode(item, path.concat(['children', index]));
      });
    }

    let pathStr = path.join('-');
    return (
      <TreeNode data-path={pathStr} title={compInfo.get('key')} key={pathStr}>
        {subTreeNode}
      </TreeNode>
    );
  };

  onDragOver = param => {
    // console.log("onDragOver",param)
  };

  /**
   * 移动节点:
   * 丢到节点上 : 添加到子节点
   * 丢到下级节点: 添加到兄弟节点
   * 节点交换位置
   *
   * @param param
   */
  onDrop = param => {
    //{event, node, dragNode, dragNodesKeys}
    console.log('onDrop', param);
    let fromKey = param.dragNodesKeys[0].split('-');
    let toKey = param.node.props.eventKey.split('-');

    // const dropKey = info.node.props.eventKey;
    // const dragKey = info.dragNode.props.eventKey;
    const dropPos = param.node.props.pos.split('-');
    const dropPosition =
      param.dropPosition - Number(dropPos[dropPos.length - 1]);
    console.log(
      `fromKey:${fromKey} toKey:${toKey} dropPosition:${param.dropPosition} ${dropPosition}`,
    );

    //-1:丢到对象前 0:丢到对象上了 1:丢到对象后了
    this.props.relaxProps.viewAction.compDefine.move({
      from: fromKey,
      to: toKey,
      type:dropPosition === -1?"before":(dropPosition === 0?"sub":"after")
    });
  };

  onDragStart = ({event, node}) => {
    // console.log("onDragStart",event,node)
  };

  onDragLeave = param => {
    // console.log("onDragLeave",param)
  };

  onDragEnter = param => {
    // console.log("onDragEnter",param)
  };

  onDragEnd = param => {
    // console.log("onDragEnd",param)
  };

  onSelect = (selectedKeys, e:{selected?: boolean, selectedNodes?:any, node, event}) => {
    // console.log(selectedKeys,e);
    if(selectedKeys && selectedKeys.length>0) {
      this.props.relaxProps.viewAction.uiManager.chooseComp(selectedKeys[0].split('-'));
    }
  };
}

//https://ant.design/components/tree-cn/#TreeNode-props
interface ITreeNode {
  disableCheckbox: boolean;
  disabled: boolean;
  icon: string;
  isLeaf: boolean;
  key: string;
  selectable: boolean;
  title: string;
}
