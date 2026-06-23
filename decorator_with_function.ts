function updatedSum(originalMethod: any, context: ClassMethodDecoratorContext) {
    return function (this: any, x: number, y: number) {
        let output = x + y;
        return "the output of " + x + " and " + y + " is : " + output;
    };
}

class CustomMaths1 {
    @updatedSum
    sum(x: number, y: number): string | number { 
        return x + y;
    }
}

var cm2 = new CustomMaths1();
console.log(cm2.sum(10, 20)); 
