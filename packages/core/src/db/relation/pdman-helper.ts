import {AssociationItem, Field, ModulesItem, PdmanDb, Table} from '../../typings/db-rel';

/**
 * @desc
 * 针对pdman的工具类
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/25
 **/

export class PdmanHelper {
  pdDb: PdmanDb;
  constructor(pdDb: PdmanDb) {
    this.pdDb = pdDb;
  }

  /**
   * 获取外键关联的表的信息;
   * @returns {{}}
   */
  getFk(
    moduleName: string,
    table: Table,
    fieldName: string,
  ): {table: Table; keyField: Field; relation: AssociationItem}[] {
    let result = [];
    for (let i = 0, iLen = this.pdDb.modules.length; i < iLen; i++) {
      let moduleItem = this.pdDb.modules[i];
      if (moduleItem.name === moduleName) {
        let associations = moduleItem.associations.filter(
          associationItem =>
            associationItem.from.entity === table.title &&
            associationItem.from.field === fieldName,
        ).map( item=> {
          let targetTable =this.getTable(moduleName,item.to.entity);
          return {
            table:targetTable,
            keyField:targetTable.fields.filter(targetTableField=>targetTableField.name===item.to.field)[0],
            relation:item,
          }
        });

        break;
      }
    }

    return result;
  }

  /**
   * 获取模块信息
   * @param {string} moduleName
   * @returns {ModulesItem}
   */
  getModule( moduleName: string):ModulesItem{
    for (let i = 0, iLen = this.pdDb.modules.length; i < iLen; i++) {
      let moduleItem = this.pdDb.modules[i];
      if (moduleItem.name === moduleName) {
        return moduleItem;
      }
    }
  }

  /**
   * 获取表格信息;
   * @param {string} moduleName
   * @param {string} tableName
   * @returns {Table}
   */
  getTable( moduleName: string,tableName:string):Table{
    let entities = this.getModule(moduleName).entities;
    for (let i = 0, iLen = entities.length; i < iLen; i++) {
      let table = entities[0];
      if(table.title=== tableName){
        return table;
      }
    }
  }
}
