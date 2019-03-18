/**
 * @author syh[of2387]
 * @date 2019.02
 */

import React from 'react';
import { StoreProvider } from 'plume2';
import AppStore from './store';
import ArticleUeditor from './components/article-ueditor';
import './index.less';

@StoreProvider(AppStore, { debug: __DEV__ })
export default class Ueditor extends React.Component<{},{}> {

	
	render() {
		let props: any = this.props;
		return <div><ArticleUeditor {...props}/></div> 
	}

}