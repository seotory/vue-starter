import {App as IApp} from './interface/app';
import * as option from './type/option'

class App implements IApp {
    init() {
        // broswer 버젼 체크
        
        // mqtt 준비
    }

    start(option: option.App) {
        console.log(option);
    }
}

export default new App();