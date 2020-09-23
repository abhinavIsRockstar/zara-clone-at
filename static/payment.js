const paymentMethods = [{
	
    supportedMethods : ['basic-card'],
    data : {
        supportedNetworks: ['visa','mastercard']
    }

}] 

const txInfo ={
    total: {
        label: 'Total',
        amount:{currency:'USD', value: '50.00'}
    },   
    displayItems: [{
        label:'Subtotal',
        amount: {currency:'USD', value:'50.00'}
    }]
}

txInfo.shippingOptions = [{
    id:'standard',
    label: 'Standard shipping',
    amount: {currency:'USD', value: '10.00'},
    selected: true
}, {
    id:'standard',
    label: 'Express shipping',
    amount: {currency:'USD', value: '20.00'},

}]

const options = {
    requestShipping: true,
    requestPayerEmail: true,
    requestPayerPhone: true,
    requestPayerName: true,
    shippingType: 'shipping'
}

const paymentRequest = PaymentRequest(paymentMethods,txInfo,options)

paymentRequest.show().then(paymentRespons => {
    return collectPayment(paymentRespons).then(res =>{
        paymentRespons.complete('success');
    })
    .catch(err =>{
         paymentRespons.complete('fail')
    });
});