    
QUnit.test("addProduct should add an item to the items property", function (assert) {
    resetShoppingCart();

    addProduct(1);

    //debugger;
    assert.equal(model.shoppingCartItems[0], 1)
});

QUnit.test("addProduct should sum the item count", function (assert) {
    resetShoppingCart();

    addProduct(1);
    addProduct(1);

    //debugger;
    assert.equal(model.shoppingCartItems.length, 2)
});


QUnit.test("removeProduct should reduce the item count", function (assert) {
    resetShoppingCart();

    // setup
    addProduct(1);
    addProduct(1);
    assert.equal(model.shoppingCartItems.length, 2)
    // before

    removeProduct(1);

    assert.equal(model.shoppingCartItems.length, 1)
});

QUnit.test("findProduct should return the product of that id", function (assert) {
    const productId = 3;
    const product = findProduct(productId)    

    assert.equal(product.id,3)
    assert.equal(product.pris, 399)
});

QUnit.test("getTotalSum should sum up total products in cart", function (assert) {
    resetShoppingCart();

    addProduct(3);
    addProduct(3);
    
    const sum = getTotalSum()

    assert.equal(sum,399 + 399)
});

QUnit.test("getTotalSum should sum up total products in cart of different ids and counts", function (assert) {
    resetShoppingCart();

    addProduct(3);
    addProduct(1);
    addProduct(1);
    
    const sum = getTotalSum()

    assert.equal(sum, 399 + 199 + 199)
});


function resetShoppingCart(){
    model.shoppingCartItems = []
}