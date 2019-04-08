import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 查询所有的（包括删除的）线下结算银行账户
 *
 */
async function findAllOfflineAccountsWithDeleteUsingGET(): Promise<
  IFindAllOfflineAccountsWithDeleteUsingGETRes
> {
  let result = await sdk.get<IFindAllOfflineAccountsWithDeleteUsingGETRes>(
    '/account/allOfflineAccounts',

    {},
  );
  return result.data;
}

/**
 *
 * 获取配置银行列表
 *
 */
async function getBaseBankUsingGET(): Promise<IGetBaseBankUsingGETRes> {
  let result = await sdk.get<IGetBaseBankUsingGETRes>(
    '/account/base/bank',

    {},
  );
  return result.data;
}

/**
 *
 * 确认订单收款
 *
 */
async function confirmUsingPOST(
  payOrderOperateRequest: IConfirmUsingPOSTPayOrderOperateRequestReq,
): Promise<IConfirmUsingPOSTRes> {
  let result = await sdk.post<IConfirmUsingPOSTRes>(
    '/account/confirm',

    {},
  );
  return result.data;
}

/**
 *
 * 导出订单开票
 *
 */
async function exportByParamsUsingGET(
  encrypted: IExportByParamsUsingGETEncryptedReq,
): Promise<any> {
  let result = await sdk.get(
    '/account/export/orderInvoices/{encrypted}'.replace(
      '{encrypted}',
      encrypted,
    ),

    {
      encrypted,
    },
  );
  return result.data;
}

/**
 *
 * 导出退单
 *
 */
async function exportByParamsUsingGET_1(
  encrypted: IExportByParamsUsingGET_1EncryptedReq,
): Promise<any> {
  let result = await sdk.get(
    '/account/export/params/{encrypted}'.replace('{encrypted}', encrypted),

    {
      encrypted,
    },
  );
  return result.data;
}

/**
 *
 * 导出退单
 *
 */
async function exportByParamsUsingGET_2(
  encrypted: IExportByParamsUsingGET_2EncryptedReq,
): Promise<any> {
  let result = await sdk.get(
    '/account/export/refund/{encrypted}'.replace('{encrypted}', encrypted),

    {
      encrypted,
    },
  );
  return result.data;
}

/**
 *
 * 删除
 *
 */
async function deleteInvoiceProjectUsingDELETE(
  invoiceProjectRequest: IDeleteInvoiceProjectUsingDELETEInvoiceProjectRequestReq,
): Promise<IDeleteInvoiceProjectUsingDELETERes> {
  let result = await sdk.delete<IDeleteInvoiceProjectUsingDELETERes>(
    '/account/invoiceProject',

    {},
  );
  return result.data;
}

/**
 *
 * 根据id查询开票项目
 *
 */
async function findInvoiceProjectByIdUsingGET(
  projectId: IFindInvoiceProjectByIdUsingGETProjectIdReq,
): Promise<IFindInvoiceProjectByIdUsingGETRes> {
  let result = await sdk.get<IFindInvoiceProjectByIdUsingGETRes>(
    '/account/invoiceProject/{projectId}'.replace('{projectId}', projectId),

    {
      projectId,
    },
  );
  return result.data;
}

/**
 *
 * 根据id查询开票项目
 *
 */
async function findInvoiceProjectByIdUsingHEAD(
  projectId: IFindInvoiceProjectByIdUsingHEADProjectIdReq,
): Promise<IFindInvoiceProjectByIdUsingHEADRes> {
  let result = await sdk.head<IFindInvoiceProjectByIdUsingHEADRes>(
    '/account/invoiceProject/{projectId}'.replace('{projectId}', projectId),

    {
      projectId,
    },
  );
  return result.data;
}

/**
 *
 * 根据id查询开票项目
 *
 */
async function findInvoiceProjectByIdUsingPOST(
  projectId: IFindInvoiceProjectByIdUsingPOSTProjectIdReq,
): Promise<IFindInvoiceProjectByIdUsingPOSTRes> {
  let result = await sdk.post<IFindInvoiceProjectByIdUsingPOSTRes>(
    '/account/invoiceProject/{projectId}'.replace('{projectId}', projectId),

    {
      projectId,
    },
  );
  return result.data;
}

/**
 *
 * 根据id查询开票项目
 *
 */
async function findInvoiceProjectByIdUsingPUT(
  projectId: IFindInvoiceProjectByIdUsingPUTProjectIdReq,
): Promise<IFindInvoiceProjectByIdUsingPUTRes> {
  let result = await sdk.put<IFindInvoiceProjectByIdUsingPUTRes>(
    '/account/invoiceProject/{projectId}'.replace('{projectId}', projectId),

    {
      projectId,
    },
  );
  return result.data;
}

/**
 *
 * 根据id查询开票项目
 *
 */
async function findInvoiceProjectByIdUsingDELETE(
  projectId: IFindInvoiceProjectByIdUsingDELETEProjectIdReq,
): Promise<IFindInvoiceProjectByIdUsingDELETERes> {
  let result = await sdk.delete<IFindInvoiceProjectByIdUsingDELETERes>(
    '/account/invoiceProject/{projectId}'.replace('{projectId}', projectId),

    {
      projectId,
    },
  );
  return result.data;
}

/**
 *
 * 根据id查询开票项目
 *
 */
async function findInvoiceProjectByIdUsingOPTIONS(
  projectId: IFindInvoiceProjectByIdUsingOPTIONSProjectIdReq,
): Promise<IFindInvoiceProjectByIdUsingOPTIONSRes> {
  let result = await sdk.options<IFindInvoiceProjectByIdUsingOPTIONSRes>(
    '/account/invoiceProject/{projectId}'.replace('{projectId}', projectId),

    {
      projectId,
    },
  );
  return result.data;
}

/**
 *
 * 根据id查询开票项目
 *
 */
async function findInvoiceProjectByIdUsingPATCH(
  projectId: IFindInvoiceProjectByIdUsingPATCHProjectIdReq,
): Promise<IFindInvoiceProjectByIdUsingPATCHRes> {
  let result = await sdk.patch<IFindInvoiceProjectByIdUsingPATCHRes>(
    '/account/invoiceProject/{projectId}'.replace('{projectId}', projectId),

    {
      projectId,
    },
  );
  return result.data;
}

/**
 *
 * S2B 平台端-获取供应商结算银行账户
 *
 */
async function listUsingGET_8(
  companyInfoId: IListUsingGET_8CompanyInfoIdReq,
): Promise<IListUsingGET_8Res> {
  let result = await sdk.get<IListUsingGET_8Res>(
    '/account/list/{companyInfoId}'.replace('{companyInfoId}', companyInfoId),

    {
      ...companyInfoId,
    },
  );
  return result.data;
}

/**
 *
 * 查询所有的（未被删除的）线下结算银行账户
 *
 */
async function findManagerAccountsUsingGET(): Promise<
  IFindManagerAccountsUsingGETRes
> {
  let result = await sdk.get<IFindManagerAccountsUsingGETRes>(
    '/account/managerOfflineAccounts',

    {},
  );
  return result.data;
}

/**
 *
 * 禁用线下结算银行账户
 *
 */
async function disableOfflineByIdUsingPOST(
  accountId: IDisableOfflineByIdUsingPOSTAccountIdReq,
): Promise<IDisableOfflineByIdUsingPOSTRes> {
  let result = await sdk.post<IDisableOfflineByIdUsingPOSTRes>(
    '/account/offline/disable/{accountId}'.replace('{accountId}', accountId),

    {
      ...accountId,
    },
  );
  return result.data;
}

/**
 *
 * 启用线下结算银行账户
 *
 */
async function enableOfflineByIdUsingPOST(
  accountId: IEnableOfflineByIdUsingPOSTAccountIdReq,
): Promise<IEnableOfflineByIdUsingPOSTRes> {
  let result = await sdk.post<IEnableOfflineByIdUsingPOSTRes>(
    '/account/offline/enable/{accountId}'.replace('{accountId}', accountId),

    {
      ...accountId,
    },
  );
  return result.data;
}

/**
 *
 * 新增线下结算银行账户
 *
 */
async function addOfflineAccountUsingPOST(
  saveRequest: IAddOfflineAccountUsingPOSTSaveRequestReq,
): Promise<IAddOfflineAccountUsingPOSTRes> {
  let result = await sdk.post<IAddOfflineAccountUsingPOSTRes>(
    '/account/offlineAccount',

    {},
  );
  return result.data;
}

/**
 *
 * 修改线下结算银行账户
 *
 */
async function modifyLineAccountUsingPUT(
  saveRequest: IModifyLineAccountUsingPUTSaveRequestReq,
): Promise<IModifyLineAccountUsingPUTRes> {
  let result = await sdk.put<IModifyLineAccountUsingPUTRes>(
    '/account/offlineAccount',

    {},
  );
  return result.data;
}

/**
 *
 * 根据结算银行账户ID查询线下结算银行账户
 *
 */
async function findOfflineAccountByIdUsingGET(
  accountId: IFindOfflineAccountByIdUsingGETAccountIdReq,
): Promise<IFindOfflineAccountByIdUsingGETRes> {
  let result = await sdk.get<IFindOfflineAccountByIdUsingGETRes>(
    '/account/offlineAccount/{accountId}'.replace('{accountId}', accountId),

    {
      ...accountId,
    },
  );
  return result.data;
}

/**
 *
 * 删除线下结算银行账户
 *
 */
async function removeOfflineByIdUsingDELETE(
  accountId: IRemoveOfflineByIdUsingDELETEAccountIdReq,
): Promise<IRemoveOfflineByIdUsingDELETERes> {
  let result = await sdk.delete<IRemoveOfflineByIdUsingDELETERes>(
    '/account/offlineAccount/{accountId}'.replace('{accountId}', accountId),

    {
      ...accountId,
    },
  );
  return result.data;
}

/**
 *
 * 查询所有有效的线下结算银行账户
 *
 */
async function findAllOfflineAccountsUsingGET(): Promise<
  IFindAllOfflineAccountsUsingGETRes
> {
  let result = await sdk.get<IFindAllOfflineAccountsUsingGETRes>(
    '/account/offlineAccounts',

    {},
  );
  return result.data;
}

/**
 *
 * 查询所有有效的线下结算银行账户
 *
 */
async function findValidOfflineAccountsUsingGET(): Promise<
  IFindValidOfflineAccountsUsingGETRes
> {
  let result = await sdk.get<IFindValidOfflineAccountsUsingGETRes>(
    '/account/offlineValidAccounts',

    {},
  );
  return result.data;
}

/**
 *
 * 新增订单开票信息
 *
 */
async function saveUsingPOST(
  saveRequest: ISaveUsingPOSTSaveRequestReq,
): Promise<ISaveUsingPOSTRes> {
  let result = await sdk.post<ISaveUsingPOSTRes>(
    '/account/orderInvoice',

    {},
  );
  return result.data;
}

/**
 *
 * 根据开票单号查询
 *
 */
async function findOrderInvoiceViewUsingGET(
  orderInvoiceId: IFindOrderInvoiceViewUsingGETOrderInvoiceIdReq,
): Promise<IFindOrderInvoiceViewUsingGETRes> {
  let result = await sdk.get<IFindOrderInvoiceViewUsingGETRes>(
    '/account/orderInvoice/{orderInvoiceId}'.replace(
      '{orderInvoiceId}',
      orderInvoiceId,
    ),

    {
      orderInvoiceId,
    },
  );
  return result.data;
}

/**
 *
 * 订单发票作废
 *
 */
async function invalidInvoiceUsingPUT(
  orderInvoiceId: IInvalidInvoiceUsingPUTOrderInvoiceIdReq,
): Promise<IInvalidInvoiceUsingPUTRes> {
  let result = await sdk.put<IInvalidInvoiceUsingPUTRes>(
    '/account/orderInvoice/{orderInvoiceId}'.replace(
      '{orderInvoiceId}',
      orderInvoiceId,
    ),

    {
      orderInvoiceId,
    },
  );
  return result.data;
}

/**
 *
 * 删除订单开票信息
 *
 */
async function deleteOrderInvoiceUsingDELETE(
  orderInvoiceId: IDeleteOrderInvoiceUsingDELETEOrderInvoiceIdReq,
): Promise<IDeleteOrderInvoiceUsingDELETERes> {
  let result = await sdk.delete<IDeleteOrderInvoiceUsingDELETERes>(
    '/account/orderInvoice/{orderInvoiceId}'.replace(
      '{orderInvoiceId}',
      orderInvoiceId,
    ),

    {
      orderInvoiceId,
    },
  );
  return result.data;
}

/**
 *
 * 订单开票详情/新增订单开票时
 *
 */
async function findOrderInvoiceDetailUsingGET(
  orderNo: IFindOrderInvoiceDetailUsingGETOrderNoReq,
): Promise<IFindOrderInvoiceDetailUsingGETRes> {
  let result = await sdk.get<IFindOrderInvoiceDetailUsingGETRes>(
    '/account/orderInvoiceDetail/{orderNo}'.replace('{orderNo}', orderNo),

    {
      orderNo,
    },
  );
  return result.data;
}

/**
 *
 * 订单批量/单个开票
 *
 */
async function updateOrderInvoiceStateUsingPOST(
  editRequest: IUpdateOrderInvoiceStateUsingPOSTEditRequestReq,
): Promise<IUpdateOrderInvoiceStateUsingPOSTRes> {
  let result = await sdk.post<IUpdateOrderInvoiceStateUsingPOSTRes>(
    '/account/orderInvoiceState',

    {},
  );
  return result.data;
}

/**
 *
 * 分页查询订单开票
 *
 */
async function pageUsingPOST_8(
  queryRequest: IPageUsingPOST_8QueryRequestReq,
): Promise<IPageUsingPOST_8Res> {
  let result = await sdk.post<IPageUsingPOST_8Res>(
    '/account/orderInvoices',

    {},
  );
  return result.data;
}

/**
 *
 * 作废订单收款
 *
 */
async function destoryUsingPUT(
  payOrderOperateRequest: IDestoryUsingPUTPayOrderOperateRequestReq,
): Promise<IDestoryUsingPUTRes> {
  let result = await sdk.put<IDestoryUsingPUTRes>(
    '/account/payOrder/destory',

    {},
  );
  return result.data;
}

/**
 *
 * 作废订单收款
 *
 */
async function destoryByPayOrderIdUsingPUT(
  payOrderId: IDestoryByPayOrderIdUsingPUTPayOrderIdReq,
): Promise<IDestoryByPayOrderIdUsingPUTRes> {
  let result = await sdk.put<IDestoryByPayOrderIdUsingPUTRes>(
    '/account/payOrder/destory/{payOrderId}'.replace(
      '{payOrderId}',
      payOrderId,
    ),

    {
      payOrderId,
    },
  );
  return result.data;
}

/**
 *
 * 根据订单编号查询收款单
 *
 */
async function findPayOrderByOrderNoUsingGET(
  orderNo: IFindPayOrderByOrderNoUsingGETOrderNoReq,
): Promise<IFindPayOrderByOrderNoUsingGETRes> {
  let result = await sdk.get<IFindPayOrderByOrderNoUsingGETRes>(
    '/account/payOrder/{orderNo}'.replace('{orderNo}', orderNo),

    {
      orderNo,
    },
  );
  return result.data;
}

/**
 *
 * 查询订单收款
 *
 */
async function findPayOrderUsingPOST(
  payOrderRequest: IFindPayOrderUsingPOSTPayOrderRequestReq,
): Promise<IFindPayOrderUsingPOSTRes> {
  let result = await sdk.post<IFindPayOrderUsingPOSTRes>(
    '/account/payOrders',

    {},
  );
  return result.data;
}

/**
 *
 * 新增收款单
 *
 */
async function addReceivableUsingPOST(
  receivableAddRequest: IAddReceivableUsingPOSTReceivableAddRequestReq,
): Promise<IAddReceivableUsingPOSTRes> {
  let result = await sdk.post<IAddReceivableUsingPOSTRes>(
    '/account/receivable',

    {},
  );
  return result.data;
}

/**
 *
 * 新增退单流水
 *
 */
async function addRefundBillUsingPOST(
  refundBillRequest: IAddRefundBillUsingPOSTRefundBillRequestReq,
): Promise<IAddRefundBillUsingPOSTRes> {
  let result = await sdk.post<IAddRefundBillUsingPOSTRes>(
    '/account/refundBill',

    {},
  );
  return result.data;
}

/**
 *
 * 查询订单退款
 *
 */
async function findPayOrderUsingPOST_1(
  refundOrderRequest: IFindPayOrderUsingPOST_1RefundOrderRequestReq,
): Promise<IFindPayOrderUsingPOST_1Res> {
  let result = await sdk.post<IFindPayOrderUsingPOST_1Res>(
    '/account/refundOrders',

    {},
  );
  return result.data;
}

/**
 *
 * 销毁
 *
 */
async function destoryUsingGET(
  refundId: IDestoryUsingGETRefundIdReq,
): Promise<IDestoryUsingGETRes> {
  let result = await sdk.get<IDestoryUsingGETRes>(
    '/account/refundOrders/destory/{refundId}'.replace('{refundId}', refundId),

    {
      refundId,
    },
  );
  return result.data;
}

/**
 *
 * 拒绝退款
 *
 */
async function refuseUsingPUT(
  refuseReasonRequest: IRefuseUsingPUTRefuseReasonRequestReq,
): Promise<IRefuseUsingPUTRes> {
  let result = await sdk.put<IRefuseUsingPUTRes>(
    '/account/refundOrders/refuse',

    {},
  );
  return result.data;
}

/**
 *
 * 根据退单号查询
 *
 */
async function queryRefundByReturnOrderNoUsingGET(
  returnOrderNo: IQueryRefundByReturnOrderNoUsingGETReturnOrderNoReq,
): Promise<IQueryRefundByReturnOrderNoUsingGETRes> {
  let result = await sdk.get<IQueryRefundByReturnOrderNoUsingGETRes>(
    '/account/refundOrders/{returnOrderNo}'.replace(
      '{returnOrderNo}',
      returnOrderNo,
    ),

    {
      returnOrderNo,
    },
  );
  return result.data;
}

/**
 *
 * 根据退单号查询
 *
 */
async function queryRefundByReturnOrderNoUsingHEAD(
  returnOrderNo: IQueryRefundByReturnOrderNoUsingHEADReturnOrderNoReq,
): Promise<IQueryRefundByReturnOrderNoUsingHEADRes> {
  let result = await sdk.head<IQueryRefundByReturnOrderNoUsingHEADRes>(
    '/account/refundOrders/{returnOrderNo}'.replace(
      '{returnOrderNo}',
      returnOrderNo,
    ),

    {
      returnOrderNo,
    },
  );
  return result.data;
}

/**
 *
 * 根据退单号查询
 *
 */
async function queryRefundByReturnOrderNoUsingPOST(
  returnOrderNo: IQueryRefundByReturnOrderNoUsingPOSTReturnOrderNoReq,
): Promise<IQueryRefundByReturnOrderNoUsingPOSTRes> {
  let result = await sdk.post<IQueryRefundByReturnOrderNoUsingPOSTRes>(
    '/account/refundOrders/{returnOrderNo}'.replace(
      '{returnOrderNo}',
      returnOrderNo,
    ),

    {
      returnOrderNo,
    },
  );
  return result.data;
}

/**
 *
 * 根据退单号查询
 *
 */
async function queryRefundByReturnOrderNoUsingPUT(
  returnOrderNo: IQueryRefundByReturnOrderNoUsingPUTReturnOrderNoReq,
): Promise<IQueryRefundByReturnOrderNoUsingPUTRes> {
  let result = await sdk.put<IQueryRefundByReturnOrderNoUsingPUTRes>(
    '/account/refundOrders/{returnOrderNo}'.replace(
      '{returnOrderNo}',
      returnOrderNo,
    ),

    {
      returnOrderNo,
    },
  );
  return result.data;
}

/**
 *
 * 根据退单号查询
 *
 */
async function queryRefundByReturnOrderNoUsingDELETE(
  returnOrderNo: IQueryRefundByReturnOrderNoUsingDELETEReturnOrderNoReq,
): Promise<IQueryRefundByReturnOrderNoUsingDELETERes> {
  let result = await sdk.delete<IQueryRefundByReturnOrderNoUsingDELETERes>(
    '/account/refundOrders/{returnOrderNo}'.replace(
      '{returnOrderNo}',
      returnOrderNo,
    ),

    {
      returnOrderNo,
    },
  );
  return result.data;
}

/**
 *
 * 根据退单号查询
 *
 */
async function queryRefundByReturnOrderNoUsingOPTIONS(
  returnOrderNo: IQueryRefundByReturnOrderNoUsingOPTIONSReturnOrderNoReq,
): Promise<IQueryRefundByReturnOrderNoUsingOPTIONSRes> {
  let result = await sdk.options<IQueryRefundByReturnOrderNoUsingOPTIONSRes>(
    '/account/refundOrders/{returnOrderNo}'.replace(
      '{returnOrderNo}',
      returnOrderNo,
    ),

    {
      returnOrderNo,
    },
  );
  return result.data;
}

/**
 *
 * 根据退单号查询
 *
 */
async function queryRefundByReturnOrderNoUsingPATCH(
  returnOrderNo: IQueryRefundByReturnOrderNoUsingPATCHReturnOrderNoReq,
): Promise<IQueryRefundByReturnOrderNoUsingPATCHRes> {
  let result = await sdk.patch<IQueryRefundByReturnOrderNoUsingPATCHRes>(
    '/account/refundOrders/{returnOrderNo}'.replace(
      '{returnOrderNo}',
      returnOrderNo,
    ),

    {
      returnOrderNo,
    },
  );
  return result.data;
}

/**
 *
 * 查询所有收款单价格
 *
 */
async function sumPayOrderPriceUsingPOST(
  payOrderRequest: ISumPayOrderPriceUsingPOSTPayOrderRequestReq,
): Promise<ISumPayOrderPriceUsingPOSTRes> {
  let result = await sdk.post<ISumPayOrderPriceUsingPOSTRes>(
    '/account/sumPayOrderPrice',

    {},
  );
  return result.data;
}

/**
 *
 * 求和退款金额
 *
 */
async function sumReturnPriceUsingPOST(
  refundOrderRequest: ISumReturnPriceUsingPOSTRefundOrderRequestReq,
): Promise<ISumReturnPriceUsingPOSTRes> {
  let result = await sdk.post<ISumReturnPriceUsingPOSTRes>(
    '/account/sumReturnPrice',

    {},
  );
  return result.data;
}

export default {
  findAllOfflineAccountsWithDeleteUsingGET,

  getBaseBankUsingGET,

  confirmUsingPOST,

  exportByParamsUsingGET,

  exportByParamsUsingGET_1,

  exportByParamsUsingGET_2,

  deleteInvoiceProjectUsingDELETE,

  findInvoiceProjectByIdUsingGET,

  findInvoiceProjectByIdUsingHEAD,

  findInvoiceProjectByIdUsingPOST,

  findInvoiceProjectByIdUsingPUT,

  findInvoiceProjectByIdUsingDELETE,

  findInvoiceProjectByIdUsingOPTIONS,

  findInvoiceProjectByIdUsingPATCH,

  listUsingGET_8,

  findManagerAccountsUsingGET,

  disableOfflineByIdUsingPOST,

  enableOfflineByIdUsingPOST,

  addOfflineAccountUsingPOST,

  modifyLineAccountUsingPUT,

  findOfflineAccountByIdUsingGET,

  removeOfflineByIdUsingDELETE,

  findAllOfflineAccountsUsingGET,

  findValidOfflineAccountsUsingGET,

  saveUsingPOST,

  findOrderInvoiceViewUsingGET,

  invalidInvoiceUsingPUT,

  deleteOrderInvoiceUsingDELETE,

  findOrderInvoiceDetailUsingGET,

  updateOrderInvoiceStateUsingPOST,

  pageUsingPOST_8,

  destoryUsingPUT,

  destoryByPayOrderIdUsingPUT,

  findPayOrderByOrderNoUsingGET,

  findPayOrderUsingPOST,

  addReceivableUsingPOST,

  addRefundBillUsingPOST,

  findPayOrderUsingPOST_1,

  destoryUsingGET,

  refuseUsingPUT,

  queryRefundByReturnOrderNoUsingGET,

  queryRefundByReturnOrderNoUsingHEAD,

  queryRefundByReturnOrderNoUsingPOST,

  queryRefundByReturnOrderNoUsingPUT,

  queryRefundByReturnOrderNoUsingDELETE,

  queryRefundByReturnOrderNoUsingOPTIONS,

  queryRefundByReturnOrderNoUsingPATCH,

  sumPayOrderPriceUsingPOST,

  sumReturnPriceUsingPOST,
};

/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindAllOfflineAccountsWithDeleteUsingGETRes".
 */
export type IFindAllOfflineAccountsWithDeleteUsingGETRes = OfflineAccountVO2[];
/**
 * 加密
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IExportByParamsUsingGETEncryptedReq".
 */
export type IExportByParamsUsingGETEncryptedReq = string;
/**
 * 加密
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IExportByParamsUsingGET_1EncryptedReq".
 */
export type IExportByParamsUsingGET_1EncryptedReq = string;
/**
 * 加密
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IExportByParamsUsingGET_2EncryptedReq".
 */
export type IExportByParamsUsingGET_2EncryptedReq = string;
/**
 * 开票项目ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingGETProjectIdReq".
 */
export type IFindInvoiceProjectByIdUsingGETProjectIdReq = string;
/**
 * 开票项目ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingHEADProjectIdReq".
 */
export type IFindInvoiceProjectByIdUsingHEADProjectIdReq = string;
/**
 * 开票项目ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingPOSTProjectIdReq".
 */
export type IFindInvoiceProjectByIdUsingPOSTProjectIdReq = string;
/**
 * 开票项目ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingPUTProjectIdReq".
 */
export type IFindInvoiceProjectByIdUsingPUTProjectIdReq = string;
/**
 * 开票项目ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingDELETEProjectIdReq".
 */
export type IFindInvoiceProjectByIdUsingDELETEProjectIdReq = string;
/**
 * 开票项目ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingOPTIONSProjectIdReq".
 */
export type IFindInvoiceProjectByIdUsingOPTIONSProjectIdReq = string;
/**
 * 开票项目ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingPATCHProjectIdReq".
 */
export type IFindInvoiceProjectByIdUsingPATCHProjectIdReq = string;
/**
 * 供应商的公司id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IListUsingGET_8CompanyInfoIdReq".
 */
export type IListUsingGET_8CompanyInfoIdReq = number;
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindManagerAccountsUsingGETRes".
 */
export type IFindManagerAccountsUsingGETRes = OfflineAccountVO3[];
/**
 * 结算银行账户ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDisableOfflineByIdUsingPOSTAccountIdReq".
 */
export type IDisableOfflineByIdUsingPOSTAccountIdReq = number;
/**
 * 结算银行账户ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IEnableOfflineByIdUsingPOSTAccountIdReq".
 */
export type IEnableOfflineByIdUsingPOSTAccountIdReq = number;
/**
 * 结算银行账户ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindOfflineAccountByIdUsingGETAccountIdReq".
 */
export type IFindOfflineAccountByIdUsingGETAccountIdReq = number;
/**
 * 结算银行账户ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IRemoveOfflineByIdUsingDELETEAccountIdReq".
 */
export type IRemoveOfflineByIdUsingDELETEAccountIdReq = number;
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindAllOfflineAccountsUsingGETRes".
 */
export type IFindAllOfflineAccountsUsingGETRes = OfflineAccountVO4[];
/**
 * 订单发票ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindOrderInvoiceViewUsingGETOrderInvoiceIdReq".
 */
export type IFindOrderInvoiceViewUsingGETOrderInvoiceIdReq = string;
/**
 * 订单发票ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IInvalidInvoiceUsingPUTOrderInvoiceIdReq".
 */
export type IInvalidInvoiceUsingPUTOrderInvoiceIdReq = string;
/**
 * 订单发票ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDeleteOrderInvoiceUsingDELETEOrderInvoiceIdReq".
 */
export type IDeleteOrderInvoiceUsingDELETEOrderInvoiceIdReq = string;
/**
 * 订单编号
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindOrderInvoiceDetailUsingGETOrderNoReq".
 */
export type IFindOrderInvoiceDetailUsingGETOrderNoReq = string;
/**
 * 支付单ID
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDestoryByPayOrderIdUsingPUTPayOrderIdReq".
 */
export type IDestoryByPayOrderIdUsingPUTPayOrderIdReq = string;
/**
 * 订单编号
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindPayOrderByOrderNoUsingGETOrderNoReq".
 */
export type IFindPayOrderByOrderNoUsingGETOrderNoReq = string;
/**
 * 退款Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDestoryUsingGETRefundIdReq".
 */
export type IDestoryUsingGETRefundIdReq = string;
/**
 * 退单号
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingGETReturnOrderNoReq".
 */
export type IQueryRefundByReturnOrderNoUsingGETReturnOrderNoReq = string;
/**
 * 退单号
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingHEADReturnOrderNoReq".
 */
export type IQueryRefundByReturnOrderNoUsingHEADReturnOrderNoReq = string;
/**
 * 退单号
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingPOSTReturnOrderNoReq".
 */
export type IQueryRefundByReturnOrderNoUsingPOSTReturnOrderNoReq = string;
/**
 * 退单号
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingPUTReturnOrderNoReq".
 */
export type IQueryRefundByReturnOrderNoUsingPUTReturnOrderNoReq = string;
/**
 * 退单号
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingDELETEReturnOrderNoReq".
 */
export type IQueryRefundByReturnOrderNoUsingDELETEReturnOrderNoReq = string;
/**
 * 退单号
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingOPTIONSReturnOrderNoReq".
 */
export type IQueryRefundByReturnOrderNoUsingOPTIONSReturnOrderNoReq = string;
/**
 * 退单号
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingPATCHReturnOrderNoReq".
 */
export type IQueryRefundByReturnOrderNoUsingPATCHReturnOrderNoReq = string;

export interface IgnoreType {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "OfflineAccountVO".
 */
export interface OfflineAccountVO {
  /**
   * 线下账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行
   */
  bankBranch?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  bankStatus?: '0' | '1';
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 删除时间
   */
  deleteTime?: string;
  /**
   * 是否主账号
   * * NO: 否
   * * YES: 是
   */
  isDefaultAccount?: '0' | '1';
  /**
   * 是否收到平台首次打款
   * * NO: 否
   * * YES: 是
   */
  isReceived?: '0' | '1';
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 修改时间
   */
  update_time?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«List«BaseBank»»".
 */
export interface BaseResponseListBaseBank {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: BaseBank[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface BaseBank {
  /**
   * 银行编号
   */
  bankCode?: string;
  /**
   * 银行名称
   */
  bankName?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseBank".
 */
export interface BaseBank1 {
  /**
   * 银行编号
   */
  bankCode?: string;
  /**
   * 银行名称
   */
  bankName?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "TradeConfirmPayOrderRequest".
 */
export interface TradeConfirmPayOrderRequest {
  operator?: Operator;
  /**
   * 支付单id列表
   */
  payOrderIds?: string[];
  [k: string]: any;
}
/**
 * 操作人
 */
export interface Operator {
  /**
   * 操作人账号
   */
  account?: string;
  /**
   * 管理员Id
   */
  adminId?: string;
  /**
   * 供应商类型
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 操作所在的Ip地址
   */
  ip?: string;
  /**
   * 操作人
   */
  name?: string;
  /**
   * 操作方
   * * BOSS: BOSS
   * * CUSTOMER: 商户(小B)
   * * THIRD: 第三方
   * * SUPPLIER: 供应商
   * * PLATFORM: 平台
   */
  platform?: 'BOSS' | 'CUSTOMER' | 'THIRD' | 'SUPPLIER' | 'PLATFORM';
  /**
   * 店铺id
   */
  storeId?: string;
  /**
   * 用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "Operator".
 */
export interface Operator1 {
  /**
   * 操作人账号
   */
  account?: string;
  /**
   * 管理员Id
   */
  adminId?: string;
  /**
   * 供应商类型
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 操作所在的Ip地址
   */
  ip?: string;
  /**
   * 操作人
   */
  name?: string;
  /**
   * 操作方
   * * BOSS: BOSS
   * * CUSTOMER: 商户(小B)
   * * THIRD: 第三方
   * * SUPPLIER: 供应商
   * * PLATFORM: 平台
   */
  platform?: 'BOSS' | 'CUSTOMER' | 'THIRD' | 'SUPPLIER' | 'PLATFORM';
  /**
   * 店铺id
   */
  storeId?: string;
  /**
   * 用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse".
 */
export interface BaseResponse {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "InvoiceProjectDeleteByIdRequest".
 */
export interface InvoiceProjectDeleteByIdRequest {
  /**
   * 开票项目id
   */
  projectId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "InvoiceProjectByIdResponse".
 */
export interface InvoiceProjectByIdResponse {
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 操作人
   */
  operatePerson?: string;
  /**
   * 开票项目id
   */
  projectId?: string;
  /**
   * 开票项目名称
   */
  projectName?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«List«CompanyAccountVO»»".
 */
export interface BaseResponseListCompanyAccountVO {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: CompanyAccountVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface CompanyAccountVO {
  /**
   * 供应商收款账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行
   */
  bankBranch?: string;
  /**
   * 银行账号编码
   */
  bankCode?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  bankStatus?: '0' | '1';
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 删除时间
   */
  deleteTime?: string;
  /**
   * 是否主账号
   * * NO: 否
   * * YES: 是
   */
  isDefaultAccount?: '0' | '1';
  /**
   * 是否收到平台首次打款
   * * NO: 否
   * * YES: 是
   */
  isReceived?: '0' | '1';
  /**
   * 打款金额
   */
  remitPrice?: number;
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 修改时间
   */
  update_time?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CompanyAccountVO".
 */
export interface CompanyAccountVO1 {
  /**
   * 供应商收款账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行
   */
  bankBranch?: string;
  /**
   * 银行账号编码
   */
  bankCode?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  bankStatus?: '0' | '1';
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 删除时间
   */
  deleteTime?: string;
  /**
   * 是否主账号
   * * NO: 否
   * * YES: 是
   */
  isDefaultAccount?: '0' | '1';
  /**
   * 是否收到平台首次打款
   * * NO: 否
   * * YES: 是
   */
  isReceived?: '0' | '1';
  /**
   * 打款金额
   */
  remitPrice?: number;
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 修改时间
   */
  update_time?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "OfflineAccountAddRequest".
 */
export interface OfflineAccountAddRequest {
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行信息
   */
  bankBranch?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 公司信息ID
   */
  companyInfoId?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "OfflineAccountModifyRequest".
 */
export interface OfflineAccountModifyRequest {
  /**
   * 账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行信息
   */
  bankBranch?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 公司信息ID
   */
  companyInfoId?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "OfflineAccountGetByIdResponse".
 */
export interface OfflineAccountGetByIdResponse {
  /**
   * 线下账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行
   */
  bankBranch?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  bankStatus?: '0' | '1';
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 删除时间
   */
  deleteTime?: string;
  /**
   * 是否主账号
   * * NO: 否
   * * YES: 是
   */
  isDefaultAccount?: '0' | '1';
  /**
   * 是否收到平台首次打款
   * * NO: 否
   * * YES: 是
   */
  isReceived?: '0' | '1';
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 修改时间
   */
  update_time?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«List«OfflineAccountVO»»".
 */
export interface BaseResponseListOfflineAccountVO {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: OfflineAccountVO1[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface OfflineAccountVO1 {
  /**
   * 线下账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行
   */
  bankBranch?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  bankStatus?: '0' | '1';
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 删除时间
   */
  deleteTime?: string;
  /**
   * 是否主账号
   * * NO: 否
   * * YES: 是
   */
  isDefaultAccount?: '0' | '1';
  /**
   * 是否收到平台首次打款
   * * NO: 否
   * * YES: 是
   */
  isReceived?: '0' | '1';
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 修改时间
   */
  update_time?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "OrderInvoiceSaveRequest".
 */
export interface OrderInvoiceSaveRequest {
  /**
   * 收货地址
   */
  address?: string;
  /**
   * 订单开票收货地址
   */
  addressInfoId?: string;
  /**
   * 供应商id
   */
  companyInfoId?: number;
  /**
   * 收货人
   */
  contacts?: string;
  /**
   * 用户id
   */
  customerId?: string;
  /**
   * 发票地址
   */
  invoiceAddress?: string;
  /**
   * 开票时间
   */
  invoiceTime?: string;
  /**
   * 发票title
   */
  invoiceTitle?: string;
  /**
   * 发票类型
   * * NORMAL: 普通发票
   * * SPECIAL: 增值税专用发票
   */
  invoiceType?: '0' | '1';
  /**
   * 订单开票ID
   */
  orderInvoiceId?: string;
  /**
   * 订单编号
   */
  orderNo?: string;
  /**
   * 收货人联系号码
   */
  phone?: string;
  /**
   * 开票项id
   */
  projectId?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 纳税人识别号
   */
  taxpayerNumber?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«OrderInvoiceViewResponse»".
 */
export interface BaseResponseOrderInvoiceViewResponse {
  /**
   * 结果码
   */
  code: string;
  context?: OrderInvoiceViewResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface OrderInvoiceViewResponse {
  /**
   * 银行名称
   */
  bankName?: string;
  /**
   * 银行账户号
   */
  bankNo?: string;
  /**
   * 用户姓名
   */
  customerName?: string;
  /**
   * 发票寄送地址
   */
  invoiceAddress?: string;
  /**
   * 订单开票状态
   * * WAIT: 待开票
   * * ALREADY: 已开票
   */
  invoiceState?: '0' | '1';
  /**
   * 开票时间
   */
  invoiceTime?: string;
  /**
   * 发票title
   */
  invoiceTitle?: string;
  /**
   * 发票类型
   * * NORMAL: 普通发票
   * * SPECIAL: 增值税专用发票
   */
  invoiceType?: '0' | '1';
  /**
   * 订单编号
   */
  orderNo?: string;
  /**
   * 订单金额
   */
  orderPrice?: number;
  /**
   * 付款状态
   * * PAYED: 已收款
   * * NOTPAY: 未收款
   * * TOCONFIRM: 待确认
   */
  payOrderStatus?: '0' | '1' | '2';
  /**
   * 开票项目
   */
  projectName?: string;
  /**
   * 注册地址
   */
  registerAddress?: string;
  /**
   * 注册电话
   */
  registerPhone?: string;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 纳税识别号
   */
  taxNo?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "OrderInvoiceViewResponse".
 */
export interface OrderInvoiceViewResponse1 {
  /**
   * 银行名称
   */
  bankName?: string;
  /**
   * 银行账户号
   */
  bankNo?: string;
  /**
   * 用户姓名
   */
  customerName?: string;
  /**
   * 发票寄送地址
   */
  invoiceAddress?: string;
  /**
   * 订单开票状态
   * * WAIT: 待开票
   * * ALREADY: 已开票
   */
  invoiceState?: '0' | '1';
  /**
   * 开票时间
   */
  invoiceTime?: string;
  /**
   * 发票title
   */
  invoiceTitle?: string;
  /**
   * 发票类型
   * * NORMAL: 普通发票
   * * SPECIAL: 增值税专用发票
   */
  invoiceType?: '0' | '1';
  /**
   * 订单编号
   */
  orderNo?: string;
  /**
   * 订单金额
   */
  orderPrice?: number;
  /**
   * 付款状态
   * * PAYED: 已收款
   * * NOTPAY: 未收款
   * * TOCONFIRM: 待确认
   */
  payOrderStatus?: '0' | '1' | '2';
  /**
   * 开票项目
   */
  projectName?: string;
  /**
   * 注册地址
   */
  registerAddress?: string;
  /**
   * 注册电话
   */
  registerPhone?: string;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 纳税识别号
   */
  taxNo?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«OrderInvoiceDetailResponse»".
 */
export interface BaseResponseOrderInvoiceDetailResponse {
  /**
   * 结果码
   */
  code: string;
  context?: OrderInvoiceDetailResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface OrderInvoiceDetailResponse {
  /**
   * 开户行
   */
  bankName?: string;
  /**
   * 银行基本户号
   */
  bankNo?: string;
  /**
   * 单位地址
   */
  companyAddress?: string;
  /**
   * 单位全称
   */
  companyName?: string;
  /**
   * 单位电话
   */
  companyPhone?: string;
  /**
   * 开票时间
   */
  createTime?: string;
  /**
   * 会员id
   */
  customerId?: string;
  /**
   * 增专资质id
   */
  customerInvoiceId?: number;
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 发票地址
   */
  invoiceAddress?: string;
  /**
   * 开票状态
   * * WAIT: 待开票
   * * ALREADY: 已开票
   */
  invoiceState?: '0' | '1';
  /**
   * 发票抬头
   */
  invoiceTitle?: string;
  /**
   * 发票类型
   * * NORMAL: 普通发票
   * * SPECIAL: 增值税专用发票
   */
  invoiceType?: '0' | '1';
  /**
   * 订单号
   */
  orderNo?: string;
  /**
   * 订单金额
   */
  orderPrice?: number;
  /**
   * 付款状态
   * * NOT_PAID: 0: NOT_PAID 未支付
   * * UNCONFIRMED: 1: UNCONFIRMED 待确认
   * * PAID: 2: PAID 已支付
   */
  payState?: 'NOT_PAID' | 'UNCONFIRMED' | 'PAID';
  /**
   * 开票项目名称
   */
  projectName?: string;
  /**
   * 纳税人识别号
   */
  taxpayerNumber?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "OrderInvoiceDetailResponse".
 */
export interface OrderInvoiceDetailResponse1 {
  /**
   * 开户行
   */
  bankName?: string;
  /**
   * 银行基本户号
   */
  bankNo?: string;
  /**
   * 单位地址
   */
  companyAddress?: string;
  /**
   * 单位全称
   */
  companyName?: string;
  /**
   * 单位电话
   */
  companyPhone?: string;
  /**
   * 开票时间
   */
  createTime?: string;
  /**
   * 会员id
   */
  customerId?: string;
  /**
   * 增专资质id
   */
  customerInvoiceId?: number;
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 发票地址
   */
  invoiceAddress?: string;
  /**
   * 开票状态
   * * WAIT: 待开票
   * * ALREADY: 已开票
   */
  invoiceState?: '0' | '1';
  /**
   * 发票抬头
   */
  invoiceTitle?: string;
  /**
   * 发票类型
   * * NORMAL: 普通发票
   * * SPECIAL: 增值税专用发票
   */
  invoiceType?: '0' | '1';
  /**
   * 订单号
   */
  orderNo?: string;
  /**
   * 订单金额
   */
  orderPrice?: number;
  /**
   * 付款状态
   * * NOT_PAID: 0: NOT_PAID 未支付
   * * UNCONFIRMED: 1: UNCONFIRMED 待确认
   * * PAID: 2: PAID 已支付
   */
  payState?: 'NOT_PAID' | 'UNCONFIRMED' | 'PAID';
  /**
   * 开票项目名称
   */
  projectName?: string;
  /**
   * 纳税人识别号
   */
  taxpayerNumber?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "OrderInvoiceModifyStateRequest".
 */
export interface OrderInvoiceModifyStateRequest {
  /**
   * 开票id列表
   */
  orderInvoiceIds?: string[];
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "OrderInvoiceFindAllRequest".
 */
export interface OrderInvoiceFindAllRequest {
  /**
   * 查询退款开始时间，精确到天
   */
  beginTime?: string;
  /**
   * 供应商id
   */
  companyInfoId?: number;
  /**
   * 供应商id
   */
  companyInfoIds?: number[];
  /**
   * 批量会员Ids
   */
  customerIds?: string[];
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 负责业务员
   */
  employeeId?: string;
  /**
   * 查询退款结束时间，精确到天
   */
  endTime?: string;
  /**
   * 开票状态
   * * WAIT: 待开票
   * * ALREADY: 已开票
   */
  invoiceState?: '0' | '1';
  /**
   * 订单开票IDs
   */
  orderInvoiceIds?: string[];
  /**
   * 订单号
   */
  orderNo?: string;
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * token
   */
  token?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  payOrderStatus?: '0' | '1' | '2';
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "FindPayOrderByPayOrderIdsRequest".
 */
export interface FindPayOrderByPayOrderIdsRequest {
  /**
   * 付款单id列表
   */
  payOrderIds?: string[];
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "FindPayOrderResponse".
 */
export interface FindPayOrderResponse {
  /**
   * 备注
   */
  comment?: string;
  /**
   * 供应商编号
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 会员id
   */
  customerId?: string;
  /**
   * 会员名称
   */
  customerName?: string;
  /**
   * 附件
   */
  encloses?: string;
  /**
   * 订单编号
   */
  orderCode?: string;
  /**
   * 收款在线渠道
   */
  payChannel?: string;
  /**
   * 收款在线渠道id
   */
  payChannelId?: number;
  /**
   * 支付单Id
   */
  payOrderId?: string;
  /**
   * 收款金额
   */
  payOrderPrice?: number;
  /**
   * 支付单状态
   * * PAYED: 已收款
   * * NOTPAY: 未收款
   * * TOCONFIRM: 待确认
   */
  payOrderStatus?: '0' | '1' | '2';
  /**
   * 支付类型
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 收款单账号
   */
  receivableAccount?: string;
  /**
   * 流水号
   */
  receivableNo?: string;
  /**
   * 收款时间
   */
  receiveTime?: string;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 应付金额
   */
  totalPrice?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "FindPayOrdersRequest".
 */
export interface FindPayOrdersRequest {
  /**
   * 收款账号账户名称
   */
  account?: string;
  /**
   * 收款账户id
   */
  accountId?: string;
  /**
   * 多个收款账户id
   */
  accountIds?: number[];
  /**
   * 供应商id
   */
  companyInfoId?: string;
  /**
   * 多个供应商ids
   */
  companyInfoIds?: number[];
  /**
   * 多个会员详细ids
   */
  customerDetailIds?: string[];
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 收款结束时间
   */
  endTime?: string;
  /**
   * 模糊查询order字段
   */
  orderCode?: string;
  /**
   * 订单号
   */
  orderNo?: string;
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 收款流水号
   */
  payBillNo?: string;
  /**
   * 在支付渠道id
   */
  payChannelId?: number;
  /**
   * 收款单主键
   */
  payOrderIds?: string[];
  /**
   * 支付状态
   * * PAYED: 已收款
   * * NOTPAY: 未收款
   * * TOCONFIRM: 待确认
   */
  payOrderStatus?: '0' | '1' | '2';
  /**
   * 支付方式
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 是否根据收款时间排序
   */
  sortByReceiveTime?: boolean;
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 收款开始时间
   */
  startTime?: string;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * token
   */
  token?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "FindPayOrdersResponse".
 */
export interface FindPayOrdersResponse {
  /**
   * 当前页
   */
  currentPage?: number;
  /**
   * 每页记录数
   */
  pageSize?: number;
  /**
   * 支付单列表
   */
  payOrderResponses?: PayOrderResponseVO[];
  /**
   * 总数
   */
  total?: number;
  [k: string]: any;
}
export interface PayOrderResponseVO {
  /**
   * 备注
   */
  comment?: string;
  /**
   * 供应商编号
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 会员id
   */
  customerId?: string;
  /**
   * 会员名称
   */
  customerName?: string;
  /**
   * 附件
   */
  encloses?: string;
  /**
   * 订单编号
   */
  orderCode?: string;
  /**
   * 收款在线渠道
   */
  payChannel?: string;
  /**
   * 收款在线渠道
   */
  payChannelId?: number;
  /**
   * 支付单Id
   */
  payOrderId?: string;
  /**
   * 收款金额
   */
  payOrderPrice?: number;
  /**
   * 付款状态
   * * PAYED: 已收款
   * * NOTPAY: 未收款
   * * TOCONFIRM: 待确认
   */
  payOrderStatus?: '0' | '1' | '2';
  /**
   * 支付类型
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 收款单账号
   */
  receivableAccount?: string;
  /**
   * 流水号
   */
  receivableNo?: string;
  /**
   * 收款时间
   */
  receiveTime?: string;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 应付金额
   */
  totalPrice?: number;
  tradeState?: TradeStateVO;
  [k: string]: any;
}
/**
 * 订单状态
 */
export interface TradeStateVO {
  /**
   * 审核状态
   * * NON_CHECKED: 0: 未审核
   * * CHECKED: 1: 已审核
   * * REJECTED: 2: 已打回
   */
  auditState?: 'NON_CHECKED' | 'CHECKED' | 'REJECTED';
  /**
   * 自动确认收货时间
   */
  autoConfirmTime?: string;
  /**
   * 开始时间
   */
  createTime?: string;
  /**
   * 发货状态
   * * NOT_YET_SHIPPED: 0: 未发货
   * * SHIPPED: 1: 已发货
   * * PART_SHIPPED: 2: 部分发货
   * * VOID: 3: 作废
   */
  deliverStatus?: 'NOT_YET_SHIPPED' | 'SHIPPED' | 'PART_SHIPPED' | 'VOID';
  /**
   * 发货时间
   */
  deliverTime?: string;
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 流程状态
   * * INIT: 0: INIT 创建订单
   * * REMEDY: 1: REMEDY 修改订单
   * * REFUND: 2: REFUND 已退款
   * * AUDIT: 3: AUDIT 已审核
   * * DELIVERED_PART: 4: DELIVERED_PART 部分发货
   * * DELIVERED: 5: DELIVERED 已发货
   * * CONFIRMED: 6: CONFIRMED 已确认
   * * COMPLETED: 7: COMPLETED 已完成
   * * VOID: 8: VOID 已作废
   */
  flowState?:
    | 'INIT'
    | 'REMEDY'
    | 'REFUND'
    | 'AUDIT'
    | 'DELIVERED_PART'
    | 'DELIVERED'
    | 'CONFIRMED'
    | 'COMPLETED'
    | 'VOID';
  /**
   * 修改时间
   */
  modifyTime?: string;
  /**
   * 作废原因
   */
  obsoleteReason?: string;
  /**
   * 支付状态
   * * NOT_PAID: 0: NOT_PAID 未支付
   * * UNCONFIRMED: 1: UNCONFIRMED 待确认
   * * PAID: 2: PAID 已支付
   */
  payState?: 'NOT_PAID' | 'UNCONFIRMED' | 'PAID';
  /**
   * 付款时间
   */
  payTime?: string;
  /**
   * 进入支付页面的时间
   */
  startPayTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "PayOrderResponseVO".
 */
export interface PayOrderResponseVO1 {
  /**
   * 备注
   */
  comment?: string;
  /**
   * 供应商编号
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 会员id
   */
  customerId?: string;
  /**
   * 会员名称
   */
  customerName?: string;
  /**
   * 附件
   */
  encloses?: string;
  /**
   * 订单编号
   */
  orderCode?: string;
  /**
   * 收款在线渠道
   */
  payChannel?: string;
  /**
   * 收款在线渠道
   */
  payChannelId?: number;
  /**
   * 支付单Id
   */
  payOrderId?: string;
  /**
   * 收款金额
   */
  payOrderPrice?: number;
  /**
   * 付款状态
   * * PAYED: 已收款
   * * NOTPAY: 未收款
   * * TOCONFIRM: 待确认
   */
  payOrderStatus?: '0' | '1' | '2';
  /**
   * 支付类型
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 收款单账号
   */
  receivableAccount?: string;
  /**
   * 流水号
   */
  receivableNo?: string;
  /**
   * 收款时间
   */
  receiveTime?: string;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 应付金额
   */
  totalPrice?: number;
  tradeState?: TradeStateVO;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "TradeStateVO".
 */
export interface TradeStateVO1 {
  /**
   * 审核状态
   * * NON_CHECKED: 0: 未审核
   * * CHECKED: 1: 已审核
   * * REJECTED: 2: 已打回
   */
  auditState?: 'NON_CHECKED' | 'CHECKED' | 'REJECTED';
  /**
   * 自动确认收货时间
   */
  autoConfirmTime?: string;
  /**
   * 开始时间
   */
  createTime?: string;
  /**
   * 发货状态
   * * NOT_YET_SHIPPED: 0: 未发货
   * * SHIPPED: 1: 已发货
   * * PART_SHIPPED: 2: 部分发货
   * * VOID: 3: 作废
   */
  deliverStatus?: 'NOT_YET_SHIPPED' | 'SHIPPED' | 'PART_SHIPPED' | 'VOID';
  /**
   * 发货时间
   */
  deliverTime?: string;
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 流程状态
   * * INIT: 0: INIT 创建订单
   * * REMEDY: 1: REMEDY 修改订单
   * * REFUND: 2: REFUND 已退款
   * * AUDIT: 3: AUDIT 已审核
   * * DELIVERED_PART: 4: DELIVERED_PART 部分发货
   * * DELIVERED: 5: DELIVERED 已发货
   * * CONFIRMED: 6: CONFIRMED 已确认
   * * COMPLETED: 7: COMPLETED 已完成
   * * VOID: 8: VOID 已作废
   */
  flowState?:
    | 'INIT'
    | 'REMEDY'
    | 'REFUND'
    | 'AUDIT'
    | 'DELIVERED_PART'
    | 'DELIVERED'
    | 'CONFIRMED'
    | 'COMPLETED'
    | 'VOID';
  /**
   * 修改时间
   */
  modifyTime?: string;
  /**
   * 作废原因
   */
  obsoleteReason?: string;
  /**
   * 支付状态
   * * NOT_PAID: 0: NOT_PAID 未支付
   * * UNCONFIRMED: 1: UNCONFIRMED 待确认
   * * PAID: 2: PAID 已支付
   */
  payState?: 'NOT_PAID' | 'UNCONFIRMED' | 'PAID';
  /**
   * 付款时间
   */
  payTime?: string;
  /**
   * 进入支付页面的时间
   */
  startPayTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ReceivableAddDTO".
 */
export interface ReceivableAddDTO {
  /**
   * 收款账号
   */
  accountId?: number;
  /**
   * 评价
   */
  comment?: string;
  /**
   * 收款单时间
   */
  createTime: string;
  /**
   * 附件
   */
  encloses?: string;
  /**
   * 线上支付渠道描述，在线支付必传
   */
  payChannel?: string;
  /**
   * 线上支付渠道id，在线支付必传
   */
  payChannelId?: number;
  /**
   * 支付单id
   */
  payOrderId: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "RefundBillAddRequest".
 */
export interface RefundBillAddRequest {
  /**
   * 实付金额
   */
  actualReturnPrice?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 线下账户
   */
  offlineAccountId?: number;
  operator?: Operator2;
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 退款评论
   */
  refundComment?: string;
  /**
   * 退款单外键
   */
  refundId?: string;
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * 操作人
 */
export interface Operator2 {
  /**
   * 操作人账号
   */
  account?: string;
  /**
   * 管理员Id
   */
  adminId?: string;
  /**
   * 供应商类型
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 操作所在的Ip地址
   */
  ip?: string;
  /**
   * 操作人
   */
  name?: string;
  /**
   * 操作方
   * * BOSS: BOSS
   * * CUSTOMER: 商户(小B)
   * * THIRD: 第三方
   * * SUPPLIER: 供应商
   * * PLATFORM: 平台
   */
  platform?: 'BOSS' | 'CUSTOMER' | 'THIRD' | 'SUPPLIER' | 'PLATFORM';
  /**
   * 店铺id
   */
  storeId?: string;
  /**
   * 用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "RefundOrderPageRequest".
 */
export interface RefundOrderPageRequest {
  /**
   * 账号id
   */
  accountId?: string;
  /**
   * 查询退款开始时间，精确到天
   */
  beginTime?: string;
  /**
   * 多个供应商ids
   */
  companyInfoIds?: number[];
  /**
   * 多个会员详细ids
   */
  customerDetailIds?: string[];
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 查询退款结束时间，精确到天
   */
  endTime?: string;
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 支付渠道id
   */
  payChannelId?: number;
  /**
   * 支付方式
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 收款流水号
   */
  refundBillCode?: string;
  /**
   * 退款单主键
   */
  refundIds?: string[];
  /**
   * 退款单状态
   * * TODO: 待退款
   * * REFUSE: 拒绝退款
   * * FINISH: 已退款
   * * APPLY: 供应商申请退款(待平台退款)
   */
  refundStatus?: '0' | '1' | '2' | '3';
  /**
   * 退单编号
   */
  returnOrderCode?: string;
  /**
   * 退单编号列表
   */
  returnOrderCodes?: string[];
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 供应商编码
   */
  supplierId?: number;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * token
   */
  token?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«RefundOrderPageResponse»".
 */
export interface BaseResponseRefundOrderPageResponse {
  /**
   * 结果码
   */
  code: string;
  context?: RefundOrderPageResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface RefundOrderPageResponse {
  /**
   * 查询到的数据
   */
  data?: RefundOrderResponse[];
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页展示多少条
   */
  pageSize?: number;
  /**
   * 总条数
   */
  total?: number;
  [k: string]: any;
}
export interface RefundOrderResponse {
  /**
   * 实退金额
   */
  actualReturnPrice?: number;
  /**
   * 备注
   */
  comment?: string;
  /**
   * 退单下单时间
   */
  createTime?: string;
  /**
   * 客户账号
   */
  customerAccountName?: string;
  /**
   * 客户id
   */
  customerId?: string;
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 线下平台账户
   */
  offlineAccountId?: number;
  /**
   * 收款在线渠道
   */
  payChannel?: string;
  /**
   * 收款在线渠道id
   */
  payChannelId?: number;
  /**
   * 支付类型
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 退款流水号
   */
  refundBillCode?: string;
  /**
   * 退款时间
   */
  refundBillTime?: string;
  /**
   * 退款单id
   */
  refundId?: string;
  /**
   * 退款单状态
   * * TODO: 待退款
   * * REFUSE: 拒绝退款
   * * FINISH: 已退款
   * * APPLY: 供应商申请退款(待平台退款)
   */
  refundStatus?: '0' | '1' | '2' | '3';
  /**
   * 拒绝原因
   */
  refuseReason?: string;
  /**
   * 退款账户
   */
  returnAccount?: number;
  /**
   * 退款账户
   */
  returnAccountName?: string;
  /**
   * 退单编号
   */
  returnOrderCode?: string;
  /**
   * 应退金额
   */
  returnPrice?: number;
  /**
   * 供应商名称
   */
  supplierName?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "RefundOrderPageResponse".
 */
export interface RefundOrderPageResponse1 {
  /**
   * 查询到的数据
   */
  data?: RefundOrderResponse[];
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页展示多少条
   */
  pageSize?: number;
  /**
   * 总条数
   */
  total?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "RefundOrderResponse".
 */
export interface RefundOrderResponse1 {
  /**
   * 实退金额
   */
  actualReturnPrice?: number;
  /**
   * 备注
   */
  comment?: string;
  /**
   * 退单下单时间
   */
  createTime?: string;
  /**
   * 客户账号
   */
  customerAccountName?: string;
  /**
   * 客户id
   */
  customerId?: string;
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 线下平台账户
   */
  offlineAccountId?: number;
  /**
   * 收款在线渠道
   */
  payChannel?: string;
  /**
   * 收款在线渠道id
   */
  payChannelId?: number;
  /**
   * 支付类型
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 退款流水号
   */
  refundBillCode?: string;
  /**
   * 退款时间
   */
  refundBillTime?: string;
  /**
   * 退款单id
   */
  refundId?: string;
  /**
   * 退款单状态
   * * TODO: 待退款
   * * REFUSE: 拒绝退款
   * * FINISH: 已退款
   * * APPLY: 供应商申请退款(待平台退款)
   */
  refundStatus?: '0' | '1' | '2' | '3';
  /**
   * 拒绝原因
   */
  refuseReason?: string;
  /**
   * 退款账户
   */
  returnAccount?: number;
  /**
   * 退款账户
   */
  returnAccountName?: string;
  /**
   * 退单编号
   */
  returnOrderCode?: string;
  /**
   * 应退金额
   */
  returnPrice?: number;
  /**
   * 供应商名称
   */
  supplierName?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "RefuseReasonRequest".
 */
export interface RefuseReasonRequest {
  /**
   * 退款单主键
   */
  refundId?: string;
  /**
   * 拒绝原因
   */
  refuseReason?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«RefundOrderResponse»".
 */
export interface BaseResponseRefundOrderResponse {
  /**
   * 结果码
   */
  code: string;
  context?: RefundOrderResponse2;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface RefundOrderResponse2 {
  /**
   * 实退金额
   */
  actualReturnPrice?: number;
  /**
   * 备注
   */
  comment?: string;
  /**
   * 退单下单时间
   */
  createTime?: string;
  /**
   * 客户账号
   */
  customerAccountName?: string;
  /**
   * 客户id
   */
  customerId?: string;
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 线下平台账户
   */
  offlineAccountId?: number;
  /**
   * 收款在线渠道
   */
  payChannel?: string;
  /**
   * 收款在线渠道id
   */
  payChannelId?: number;
  /**
   * 支付类型
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 退款流水号
   */
  refundBillCode?: string;
  /**
   * 退款时间
   */
  refundBillTime?: string;
  /**
   * 退款单id
   */
  refundId?: string;
  /**
   * 退款单状态
   * * TODO: 待退款
   * * REFUSE: 拒绝退款
   * * FINISH: 已退款
   * * APPLY: 供应商申请退款(待平台退款)
   */
  refundStatus?: '0' | '1' | '2' | '3';
  /**
   * 拒绝原因
   */
  refuseReason?: string;
  /**
   * 退款账户
   */
  returnAccount?: number;
  /**
   * 退款账户
   */
  returnAccountName?: string;
  /**
   * 退单编号
   */
  returnOrderCode?: string;
  /**
   * 应退金额
   */
  returnPrice?: number;
  /**
   * 供应商名称
   */
  supplierName?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "SumPayOrderPriceRequest".
 */
export interface SumPayOrderPriceRequest {
  /**
   * 收款账号账户名称
   */
  account?: string;
  /**
   * 收款账户id
   */
  accountId?: string;
  /**
   * 多个收款账户id
   */
  accountIds?: number[];
  /**
   * 供应商id
   */
  companyInfoId?: string;
  /**
   * 多个供应商ids
   */
  companyInfoIds?: number[];
  /**
   * 多个会员详细ids
   */
  customerDetailIds?: string[];
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 收款结束时间
   */
  endTime?: string;
  /**
   * 模糊查询order字段
   */
  orderCode?: string;
  /**
   * 订单号
   */
  orderNo?: string;
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 收款流水号
   */
  payBillNo?: string;
  /**
   * 在支付渠道
   */
  payChannelId?: number;
  /**
   * 收款单主键
   */
  payOrderIds?: string[];
  /**
   * 支付状态
   * * PAYED: 已收款
   * * NOTPAY: 未收款
   * * TOCONFIRM: 待确认
   */
  payOrderStatus?: '0' | '1' | '2';
  /**
   * 支付方式
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 是否根据收款时间排序
   */
  sortByReceiveTime?: boolean;
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 收款开始时间
   */
  startTime?: string;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * token
   */
  token?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«bigdecimal»".
 */
export interface BaseResponseBigdecimal {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: number;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "RefundOrderRequest".
 */
export interface RefundOrderRequest {
  /**
   * 账号id
   */
  accountId?: string;
  /**
   * 查询退款开始时间，精确到天
   */
  beginTime?: string;
  /**
   * 多个供应商ids
   */
  companyInfoIds?: number[];
  /**
   * 多个会员详细ids
   */
  customerDetailIds?: string[];
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 查询退款结束时间，精确到天
   */
  endTime?: string;
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 支付渠道id
   */
  payChannelId?: number;
  /**
   * 支付方式
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 收款流水号
   */
  refundBillCode?: string;
  /**
   * 退款单主键
   */
  refundIds?: string[];
  refundStatus?: '0' | '1' | '2' | '3';
  /**
   * 退单编号
   */
  returnOrderCode?: string;
  /**
   * 退单编号列表
   */
  returnOrderCodes?: string[];
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 供应商编码
   */
  supplierId?: number;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * token
   */
  token?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
export interface OfflineAccountVO2 {
  /**
   * 线下账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行
   */
  bankBranch?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  bankStatus?: '0' | '1';
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 删除时间
   */
  deleteTime?: string;
  /**
   * 是否主账号
   * * NO: 否
   * * YES: 是
   */
  isDefaultAccount?: '0' | '1';
  /**
   * 是否收到平台首次打款
   * * NO: 否
   * * YES: 是
   */
  isReceived?: '0' | '1';
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 修改时间
   */
  update_time?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IGetBaseBankUsingGETRes".
 */
export interface IGetBaseBankUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: BaseBank[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IConfirmUsingPOSTPayOrderOperateRequestReq".
 */
export interface IConfirmUsingPOSTPayOrderOperateRequestReq {
  operator?: Operator;
  /**
   * 支付单id列表
   */
  payOrderIds?: string[];
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IConfirmUsingPOSTRes".
 */
export interface IConfirmUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDeleteInvoiceProjectUsingDELETEInvoiceProjectRequestReq".
 */
export interface IDeleteInvoiceProjectUsingDELETEInvoiceProjectRequestReq {
  /**
   * 开票项目id
   */
  projectId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDeleteInvoiceProjectUsingDELETERes".
 */
export interface IDeleteInvoiceProjectUsingDELETERes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingGETRes".
 */
export interface IFindInvoiceProjectByIdUsingGETRes {
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 操作人
   */
  operatePerson?: string;
  /**
   * 开票项目id
   */
  projectId?: string;
  /**
   * 开票项目名称
   */
  projectName?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingHEADRes".
 */
export interface IFindInvoiceProjectByIdUsingHEADRes {
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 操作人
   */
  operatePerson?: string;
  /**
   * 开票项目id
   */
  projectId?: string;
  /**
   * 开票项目名称
   */
  projectName?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingPOSTRes".
 */
export interface IFindInvoiceProjectByIdUsingPOSTRes {
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 操作人
   */
  operatePerson?: string;
  /**
   * 开票项目id
   */
  projectId?: string;
  /**
   * 开票项目名称
   */
  projectName?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingPUTRes".
 */
export interface IFindInvoiceProjectByIdUsingPUTRes {
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 操作人
   */
  operatePerson?: string;
  /**
   * 开票项目id
   */
  projectId?: string;
  /**
   * 开票项目名称
   */
  projectName?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingDELETERes".
 */
export interface IFindInvoiceProjectByIdUsingDELETERes {
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 操作人
   */
  operatePerson?: string;
  /**
   * 开票项目id
   */
  projectId?: string;
  /**
   * 开票项目名称
   */
  projectName?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingOPTIONSRes".
 */
export interface IFindInvoiceProjectByIdUsingOPTIONSRes {
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 操作人
   */
  operatePerson?: string;
  /**
   * 开票项目id
   */
  projectId?: string;
  /**
   * 开票项目名称
   */
  projectName?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindInvoiceProjectByIdUsingPATCHRes".
 */
export interface IFindInvoiceProjectByIdUsingPATCHRes {
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 操作人
   */
  operatePerson?: string;
  /**
   * 开票项目id
   */
  projectId?: string;
  /**
   * 开票项目名称
   */
  projectName?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IListUsingGET_8Res".
 */
export interface IListUsingGET_8Res {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: CompanyAccountVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface OfflineAccountVO3 {
  /**
   * 线下账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行
   */
  bankBranch?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  bankStatus?: '0' | '1';
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 删除时间
   */
  deleteTime?: string;
  /**
   * 是否主账号
   * * NO: 否
   * * YES: 是
   */
  isDefaultAccount?: '0' | '1';
  /**
   * 是否收到平台首次打款
   * * NO: 否
   * * YES: 是
   */
  isReceived?: '0' | '1';
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 修改时间
   */
  update_time?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDisableOfflineByIdUsingPOSTRes".
 */
export interface IDisableOfflineByIdUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IEnableOfflineByIdUsingPOSTRes".
 */
export interface IEnableOfflineByIdUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAddOfflineAccountUsingPOSTSaveRequestReq".
 */
export interface IAddOfflineAccountUsingPOSTSaveRequestReq {
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行信息
   */
  bankBranch?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 公司信息ID
   */
  companyInfoId?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAddOfflineAccountUsingPOSTRes".
 */
export interface IAddOfflineAccountUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IModifyLineAccountUsingPUTSaveRequestReq".
 */
export interface IModifyLineAccountUsingPUTSaveRequestReq {
  /**
   * 账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行信息
   */
  bankBranch?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 公司信息ID
   */
  companyInfoId?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IModifyLineAccountUsingPUTRes".
 */
export interface IModifyLineAccountUsingPUTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindOfflineAccountByIdUsingGETRes".
 */
export interface IFindOfflineAccountByIdUsingGETRes {
  /**
   * 线下账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行
   */
  bankBranch?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  bankStatus?: '0' | '1';
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 删除时间
   */
  deleteTime?: string;
  /**
   * 是否主账号
   * * NO: 否
   * * YES: 是
   */
  isDefaultAccount?: '0' | '1';
  /**
   * 是否收到平台首次打款
   * * NO: 否
   * * YES: 是
   */
  isReceived?: '0' | '1';
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 修改时间
   */
  update_time?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IRemoveOfflineByIdUsingDELETERes".
 */
export interface IRemoveOfflineByIdUsingDELETERes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface OfflineAccountVO4 {
  /**
   * 线下账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行
   */
  bankBranch?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  bankStatus?: '0' | '1';
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 删除时间
   */
  deleteTime?: string;
  /**
   * 是否主账号
   * * NO: 否
   * * YES: 是
   */
  isDefaultAccount?: '0' | '1';
  /**
   * 是否收到平台首次打款
   * * NO: 否
   * * YES: 是
   */
  isReceived?: '0' | '1';
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 修改时间
   */
  update_time?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindValidOfflineAccountsUsingGETRes".
 */
export interface IFindValidOfflineAccountsUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: OfflineAccountVO1[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISaveUsingPOSTSaveRequestReq".
 */
export interface ISaveUsingPOSTSaveRequestReq {
  /**
   * 收货地址
   */
  address?: string;
  /**
   * 订单开票收货地址
   */
  addressInfoId?: string;
  /**
   * 供应商id
   */
  companyInfoId?: number;
  /**
   * 收货人
   */
  contacts?: string;
  /**
   * 用户id
   */
  customerId?: string;
  /**
   * 发票地址
   */
  invoiceAddress?: string;
  /**
   * 开票时间
   */
  invoiceTime?: string;
  /**
   * 发票title
   */
  invoiceTitle?: string;
  /**
   * 发票类型
   * * NORMAL: 普通发票
   * * SPECIAL: 增值税专用发票
   */
  invoiceType?: '0' | '1';
  /**
   * 订单开票ID
   */
  orderInvoiceId?: string;
  /**
   * 订单编号
   */
  orderNo?: string;
  /**
   * 收货人联系号码
   */
  phone?: string;
  /**
   * 开票项id
   */
  projectId?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 纳税人识别号
   */
  taxpayerNumber?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISaveUsingPOSTRes".
 */
export interface ISaveUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindOrderInvoiceViewUsingGETRes".
 */
export interface IFindOrderInvoiceViewUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  context?: OrderInvoiceViewResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IInvalidInvoiceUsingPUTRes".
 */
export interface IInvalidInvoiceUsingPUTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDeleteOrderInvoiceUsingDELETERes".
 */
export interface IDeleteOrderInvoiceUsingDELETERes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindOrderInvoiceDetailUsingGETRes".
 */
export interface IFindOrderInvoiceDetailUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  context?: OrderInvoiceDetailResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IUpdateOrderInvoiceStateUsingPOSTEditRequestReq".
 */
export interface IUpdateOrderInvoiceStateUsingPOSTEditRequestReq {
  /**
   * 开票id列表
   */
  orderInvoiceIds?: string[];
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IUpdateOrderInvoiceStateUsingPOSTRes".
 */
export interface IUpdateOrderInvoiceStateUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IPageUsingPOST_8QueryRequestReq".
 */
export interface IPageUsingPOST_8QueryRequestReq {
  /**
   * 查询退款开始时间，精确到天
   */
  beginTime?: string;
  /**
   * 供应商id
   */
  companyInfoId?: number;
  /**
   * 供应商id
   */
  companyInfoIds?: number[];
  /**
   * 批量会员Ids
   */
  customerIds?: string[];
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 负责业务员
   */
  employeeId?: string;
  /**
   * 查询退款结束时间，精确到天
   */
  endTime?: string;
  /**
   * 开票状态
   * * WAIT: 待开票
   * * ALREADY: 已开票
   */
  invoiceState?: '0' | '1';
  /**
   * 订单开票IDs
   */
  orderInvoiceIds?: string[];
  /**
   * 订单号
   */
  orderNo?: string;
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * token
   */
  token?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  payOrderStatus?: '0' | '1' | '2';
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IPageUsingPOST_8Res".
 */
export interface IPageUsingPOST_8Res {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDestoryUsingPUTPayOrderOperateRequestReq".
 */
export interface IDestoryUsingPUTPayOrderOperateRequestReq {
  /**
   * 付款单id列表
   */
  payOrderIds?: string[];
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDestoryUsingPUTRes".
 */
export interface IDestoryUsingPUTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDestoryByPayOrderIdUsingPUTRes".
 */
export interface IDestoryByPayOrderIdUsingPUTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindPayOrderByOrderNoUsingGETRes".
 */
export interface IFindPayOrderByOrderNoUsingGETRes {
  /**
   * 备注
   */
  comment?: string;
  /**
   * 供应商编号
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 会员id
   */
  customerId?: string;
  /**
   * 会员名称
   */
  customerName?: string;
  /**
   * 附件
   */
  encloses?: string;
  /**
   * 订单编号
   */
  orderCode?: string;
  /**
   * 收款在线渠道
   */
  payChannel?: string;
  /**
   * 收款在线渠道id
   */
  payChannelId?: number;
  /**
   * 支付单Id
   */
  payOrderId?: string;
  /**
   * 收款金额
   */
  payOrderPrice?: number;
  /**
   * 支付单状态
   * * PAYED: 已收款
   * * NOTPAY: 未收款
   * * TOCONFIRM: 待确认
   */
  payOrderStatus?: '0' | '1' | '2';
  /**
   * 支付类型
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 收款单账号
   */
  receivableAccount?: string;
  /**
   * 流水号
   */
  receivableNo?: string;
  /**
   * 收款时间
   */
  receiveTime?: string;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 应付金额
   */
  totalPrice?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindPayOrderUsingPOSTPayOrderRequestReq".
 */
export interface IFindPayOrderUsingPOSTPayOrderRequestReq {
  /**
   * 收款账号账户名称
   */
  account?: string;
  /**
   * 收款账户id
   */
  accountId?: string;
  /**
   * 多个收款账户id
   */
  accountIds?: number[];
  /**
   * 供应商id
   */
  companyInfoId?: string;
  /**
   * 多个供应商ids
   */
  companyInfoIds?: number[];
  /**
   * 多个会员详细ids
   */
  customerDetailIds?: string[];
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 收款结束时间
   */
  endTime?: string;
  /**
   * 模糊查询order字段
   */
  orderCode?: string;
  /**
   * 订单号
   */
  orderNo?: string;
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 收款流水号
   */
  payBillNo?: string;
  /**
   * 在支付渠道id
   */
  payChannelId?: number;
  /**
   * 收款单主键
   */
  payOrderIds?: string[];
  /**
   * 支付状态
   * * PAYED: 已收款
   * * NOTPAY: 未收款
   * * TOCONFIRM: 待确认
   */
  payOrderStatus?: '0' | '1' | '2';
  /**
   * 支付方式
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 是否根据收款时间排序
   */
  sortByReceiveTime?: boolean;
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 收款开始时间
   */
  startTime?: string;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * token
   */
  token?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindPayOrderUsingPOSTRes".
 */
export interface IFindPayOrderUsingPOSTRes {
  /**
   * 当前页
   */
  currentPage?: number;
  /**
   * 每页记录数
   */
  pageSize?: number;
  /**
   * 支付单列表
   */
  payOrderResponses?: PayOrderResponseVO[];
  /**
   * 总数
   */
  total?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAddReceivableUsingPOSTReceivableAddRequestReq".
 */
export interface IAddReceivableUsingPOSTReceivableAddRequestReq {
  /**
   * 收款账号
   */
  accountId?: number;
  /**
   * 评价
   */
  comment?: string;
  /**
   * 收款单时间
   */
  createTime: string;
  /**
   * 附件
   */
  encloses?: string;
  /**
   * 线上支付渠道描述，在线支付必传
   */
  payChannel?: string;
  /**
   * 线上支付渠道id，在线支付必传
   */
  payChannelId?: number;
  /**
   * 支付单id
   */
  payOrderId: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAddReceivableUsingPOSTRes".
 */
export interface IAddReceivableUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAddRefundBillUsingPOSTRefundBillRequestReq".
 */
export interface IAddRefundBillUsingPOSTRefundBillRequestReq {
  /**
   * 实付金额
   */
  actualReturnPrice?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 线下账户
   */
  offlineAccountId?: number;
  operator?: Operator2;
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 退款评论
   */
  refundComment?: string;
  /**
   * 退款单外键
   */
  refundId?: string;
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAddRefundBillUsingPOSTRes".
 */
export interface IAddRefundBillUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindPayOrderUsingPOST_1RefundOrderRequestReq".
 */
export interface IFindPayOrderUsingPOST_1RefundOrderRequestReq {
  /**
   * 账号id
   */
  accountId?: string;
  /**
   * 查询退款开始时间，精确到天
   */
  beginTime?: string;
  /**
   * 多个供应商ids
   */
  companyInfoIds?: number[];
  /**
   * 多个会员详细ids
   */
  customerDetailIds?: string[];
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 查询退款结束时间，精确到天
   */
  endTime?: string;
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 支付渠道id
   */
  payChannelId?: number;
  /**
   * 支付方式
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 收款流水号
   */
  refundBillCode?: string;
  /**
   * 退款单主键
   */
  refundIds?: string[];
  /**
   * 退款单状态
   * * TODO: 待退款
   * * REFUSE: 拒绝退款
   * * FINISH: 已退款
   * * APPLY: 供应商申请退款(待平台退款)
   */
  refundStatus?: '0' | '1' | '2' | '3';
  /**
   * 退单编号
   */
  returnOrderCode?: string;
  /**
   * 退单编号列表
   */
  returnOrderCodes?: string[];
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 供应商编码
   */
  supplierId?: number;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * token
   */
  token?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindPayOrderUsingPOST_1Res".
 */
export interface IFindPayOrderUsingPOST_1Res {
  /**
   * 结果码
   */
  code: string;
  context?: RefundOrderPageResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDestoryUsingGETRes".
 */
export interface IDestoryUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IRefuseUsingPUTRefuseReasonRequestReq".
 */
export interface IRefuseUsingPUTRefuseReasonRequestReq {
  /**
   * 退款单主键
   */
  refundId?: string;
  /**
   * 拒绝原因
   */
  refuseReason?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IRefuseUsingPUTRes".
 */
export interface IRefuseUsingPUTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingGETRes".
 */
export interface IQueryRefundByReturnOrderNoUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  context?: RefundOrderResponse2;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingHEADRes".
 */
export interface IQueryRefundByReturnOrderNoUsingHEADRes {
  /**
   * 结果码
   */
  code: string;
  context?: RefundOrderResponse2;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingPOSTRes".
 */
export interface IQueryRefundByReturnOrderNoUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  context?: RefundOrderResponse2;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingPUTRes".
 */
export interface IQueryRefundByReturnOrderNoUsingPUTRes {
  /**
   * 结果码
   */
  code: string;
  context?: RefundOrderResponse2;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingDELETERes".
 */
export interface IQueryRefundByReturnOrderNoUsingDELETERes {
  /**
   * 结果码
   */
  code: string;
  context?: RefundOrderResponse2;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingOPTIONSRes".
 */
export interface IQueryRefundByReturnOrderNoUsingOPTIONSRes {
  /**
   * 结果码
   */
  code: string;
  context?: RefundOrderResponse2;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryRefundByReturnOrderNoUsingPATCHRes".
 */
export interface IQueryRefundByReturnOrderNoUsingPATCHRes {
  /**
   * 结果码
   */
  code: string;
  context?: RefundOrderResponse2;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISumPayOrderPriceUsingPOSTPayOrderRequestReq".
 */
export interface ISumPayOrderPriceUsingPOSTPayOrderRequestReq {
  /**
   * 收款账号账户名称
   */
  account?: string;
  /**
   * 收款账户id
   */
  accountId?: string;
  /**
   * 多个收款账户id
   */
  accountIds?: number[];
  /**
   * 供应商id
   */
  companyInfoId?: string;
  /**
   * 多个供应商ids
   */
  companyInfoIds?: number[];
  /**
   * 多个会员详细ids
   */
  customerDetailIds?: string[];
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 收款结束时间
   */
  endTime?: string;
  /**
   * 模糊查询order字段
   */
  orderCode?: string;
  /**
   * 订单号
   */
  orderNo?: string;
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 收款流水号
   */
  payBillNo?: string;
  /**
   * 在支付渠道
   */
  payChannelId?: number;
  /**
   * 收款单主键
   */
  payOrderIds?: string[];
  /**
   * 支付状态
   * * PAYED: 已收款
   * * NOTPAY: 未收款
   * * TOCONFIRM: 待确认
   */
  payOrderStatus?: '0' | '1' | '2';
  /**
   * 支付方式
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 是否根据收款时间排序
   */
  sortByReceiveTime?: boolean;
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 收款开始时间
   */
  startTime?: string;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * token
   */
  token?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISumPayOrderPriceUsingPOSTRes".
 */
export interface ISumPayOrderPriceUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: number;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISumReturnPriceUsingPOSTRefundOrderRequestReq".
 */
export interface ISumReturnPriceUsingPOSTRefundOrderRequestReq {
  /**
   * 账号id
   */
  accountId?: string;
  /**
   * 查询退款开始时间，精确到天
   */
  beginTime?: string;
  /**
   * 多个供应商ids
   */
  companyInfoIds?: number[];
  /**
   * 多个会员详细ids
   */
  customerDetailIds?: string[];
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 查询退款结束时间，精确到天
   */
  endTime?: string;
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 支付渠道id
   */
  payChannelId?: number;
  /**
   * 支付方式
   * * ONLINE: 在线支付
   * * OFFLINE: 线下支付
   */
  payType?: '0' | '1';
  /**
   * 收款流水号
   */
  refundBillCode?: string;
  /**
   * 退款单主键
   */
  refundIds?: string[];
  refundStatus?: '0' | '1' | '2' | '3';
  /**
   * 退单编号
   */
  returnOrderCode?: string;
  /**
   * 退单编号列表
   */
  returnOrderCodes?: string[];
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 供应商编码
   */
  supplierId?: number;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * token
   */
  token?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISumReturnPriceUsingPOSTRes".
 */
export interface ISumReturnPriceUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: number;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
