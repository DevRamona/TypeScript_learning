"use strict";
let discount;
let itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5; // 5% discount
}
else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
}
else if (itemCount > 10) {
    discount = 15; // 15%
}
else {
    throw new Error('The number of items cannot be negative!');
}
console.log(`You got ${discount}% discount.`);
//# sourceMappingURL=if.js.map