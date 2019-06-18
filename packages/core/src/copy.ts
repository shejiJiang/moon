
import * as shelljs from "shelljs";
import {join} from  'path';
import {ensureFileSync,ensureDirSync} from  'fs-extra';

(async()=>{
  ensureDirSync("lib/page/redux/tpl");
  shelljs.exec(`cp -r src/page/redux/tpl/* lib/page/redux/tpl`);
  ensureDirSync("lib/web-api/client/tpl");
  shelljs.exec(`cp -r src/web-api/client/tpl/*  lib/web-api/client/tpl`);
  ensureDirSync("declarations/typings/");
  shelljs.exec(`cp -r src/typings/*  declarations/typings/`);
})();
