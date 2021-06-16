
function cartHasItemId(id){
    // søk gjennom items og se om produktet finnes (finn indeksen)
    for (let index = 0; index < model.shoppingCartItems.length; index++) {
        // finn produktet som har id = id
        if (model.shoppingCartItems[index] === id) {
            return true
        }
    }
    return false
}

function addProduct(id) {
    console.log("Legger til produkt med id " + id);

    model.shoppingCartItems.push(id)
}

function addProductAndShow(id) {
    addProduct(id)
    show()
}

function removeProduct(id) {
    // hvis produktet finnes
    if (cartHasItemId(id)) {
        model.shoppingCartItems.splice(model.shoppingCartItems.indexOf(id), 1);
    }

}

function removeProductAndShowCart(id) {
    removeProduct(id);

    showCart();
}

function getShoppingCartProductsById(id) {
    let items = []
    for (let index = 0; index < model.shoppingCartItems.length; index++) {
        // console.log(`model.shoppingCartItems[${index}]`, model.shoppingCartItems[index])
        if(model.shoppingCartItems[index]===id) items.push(model.shoppingCartItems[index])
   }
    return items;
}

function changeProductCount(id, newCount) {
    if (cartHasItemId(id)) {
        // Endre count på produkt i shoppingCartItems i posisjon av id
        model.shoppingCartItems[model.shoppingCartItems.indexOf(id)].count = newCount
    }
}

function getTotalSum() {
    let sum = 0;

    console.log("shoppingcart items", model.shoppingCartItems)
    for (let index = 0; index < model.shoppingCartItems.length; index++) {
        const product = findProduct(model.shoppingCartItems[index]); // eksempel: { id: 3, count : 5 }
        console.log("id-en til produktet = " + product.id)
        console.log("prisen til produktet = " + product.pris)

        sum += product.pris
    }
    // for hvert element i handlelista
    // finn produktet
    // gang antall med pris  og legg til sum
    return sum;
}
    

/** 
 * Find the product by id
 * @param id {Number}
 * @returns {Object} the product with that id
 */
 function findProduct(id){
    for (let index = 0; index < model.products.length; index++) {
        const tmp = model.products[index];

        if (tmp.id === id) {
            return tmp;
        }
    }
}
