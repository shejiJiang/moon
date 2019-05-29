import { Store, IOptions } from 'plume2';
import HelloActor from './actor/main-actor';
import MainAction from './action/main-action';


export default class AppStore extends Store {
  constructor(props: IOptions) {
    super(props);
  }

  bindActor() {
    return [new HelloActor()];
  }

  bindViewAction() {
    return {
      MainAction
    };
  }
}
