class OrderInfo{
    readonly name:string;
    readonly  price:number;
    deliveryStatus:string;

    constructor(name:string,price:number,deliveryStatus:string){
        this.name=name;
        this.price=price;
        this.deliveryStatus=deliveryStatus;
    }

    updateDeliveryStatus(){
        this.deliveryStatus="on the way"
    }
    updateName(){
        // this.name="mobile y"
    }

}

var order1= new OrderInfo('mobile x',20000,'packing')
order1.updateDeliveryStatus();
console.log(order1.deliveryStatus);
// order1.deliveryStatus="delivered"
// order1.name="abc"