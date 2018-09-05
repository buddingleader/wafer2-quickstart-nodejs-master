const invoiceMap={}

module.exports=ctx=>{
    var invoiceInfo = {
        invoiceID : '1',
        invoiceCode : '发票代码',
        date : '20180905',
        money : 64.50,
        creator : 'Wang Feifan',
    }

    invoiceMap[ctx.req.id] = invoiceInfo

    ctx.state.data = invoiceMap[ctx.req.id]
}