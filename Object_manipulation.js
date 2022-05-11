var itemsToBuy = {
    milk: {
        quantity : 5,
        price: 20
    },
    bread: {
        quantity : 2,
        price: 15
    },
    potato: {
        quantity : 3,
        price: 10
    }
}

var itemNamesArr = [], itemPricesArr = [];
for (var item in itemsToBuy) {
    itemNamesArr.push(item);
    for (var prop in itemsToBuy[item]) {
        if (prop === 'price') {
            itemPricesArr.push(itemsToBuy[item][prop]);
        }
    }
}

// Print the array consisting of the names of the items here
console.log(itemNamesArr);

// Print the array consisting of the prices of the items here
console.log(itemPricesArr);