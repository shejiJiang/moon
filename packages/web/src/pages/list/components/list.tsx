/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from "react";
import { Relax, TViewAction } from "plume2";
import { Button, Pagination, Menu, Dropdown, Icon } from "antd";
import "./list.less";
import { getHashParam } from "kit/url-helper";
import { viewAction } from "../action";
import { ArchiveSource } from "webapi/archive";

import Header from "./header";
import Item from "./item";

interface IProps {
  relaxProps?: {
    search: any;
    archives: Array<any>;
    viewAction: TViewAction<typeof viewAction>;
  };
  location?: any;
}

@Relax
export default class List extends React.Component<IProps, any> {
  static relaxProps = {
    search: "search",
    archives: "archives",
    viewAction: "viewAction"
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    let { viewAction } = this.props.relaxProps;
    if (this.props.location.state) {
      let { pageNum } = this.props.location.state;
      viewAction.MainAction.changePageNum(pageNum);
    } else {
      viewAction.MainAction.init();
    }
  }

  render() {
    let { archives, search } = this.props.relaxProps;

    const menu = (
      <Menu>
        <Menu.Item onClick={() => this.handleFilter("")}>
          <div>全部</div>
        </Menu.Item>
        <Menu.Item onClick={() => this.handleFilter("UPLOAD,CREATE")}>
          <div>我上传的</div>
        </Menu.Item>
        <Menu.Item onClick={() => this.handleFilter("COLLECT")}>
          <div>我保存的</div>
        </Menu.Item>
      </Menu>
    );

    let items = archives.map((item, index) => {
      return <Item key={index} item={item} index={index} {...this.props} />;
    });

    let filterItem = "全部";
    if (search.get("source") == "UPLOAD,CREATE") {
      filterItem = "我上传的";
    } else if (search.get("source") == "COLLECT") {
      filterItem = "我保存的";
    }

    return (
      <div className="vbox-center" style={{ paddingBottom: 100 }}>
        <Header />

        <div className="filter-item">
          <Dropdown overlay={menu}>
            <span className="filter-menu">
              {filterItem}({search.get("total")}) <Icon type="caret-down" />
            </span>
          </Dropdown>
        </div>

        <div>{items}</div>
        {(items as any).size == 0 ? (
          <div className="list-empty">
            <img
              src="https://pic.qianmi.com/qmui/v0.2/img/card-empty.png"
              alt=""
            />
            <p>搜索结果为空</p>
          </div>
        ) : null}
        {(items as any).size == 0 ? null : (
          <div className="hbox-right">
            <Pagination
              current={Number(search.get("pageNum")) + 1}
              defaultPageSize={search.get("pageSize")}
              onChange={this.pageNumChange}
              total={search.get("total")}
            />
          </div>
        )}
      </div>
    );
  }

  pageNumChange = (page: any) => {
    let { viewAction } = this.props.relaxProps;
    viewAction.MainAction.changePageNum(page - 1);
    window.scrollTo(0, 0);
  };

  handleFilter = (filterItem: ArchiveSource) => {
    let { viewAction } = this.props.relaxProps;
    viewAction.MainAction.switchSource(filterItem);
  };
}
