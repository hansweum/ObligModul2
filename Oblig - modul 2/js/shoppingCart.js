function showCart(){

    let html = ` 
 
    <img class id="logo" src="img/logo.jpg" alt="Til forsiden">   
    <img class id="header_image" src="img/palmshop.png" alt="Til forsiden">   
    <button onclick="show()" id="home">&#9962</button>
    <button onclick="showCart()" id="cart">&#128722${model.shoppingCartItems.length > 0 ? " (" + model.shoppingCartItems.length + ")" : ""}</button>
    <button onclick="showForm()" id="mail">&#9993</button>  
    <br>
    <br>
    <button id="loggInn">Logg inn</button>
    <button id="opprett">Opprett konto</button>
   
      </div>
    </div>

    <div class="container">
    `;
    
    // For produkt id i handlekurv
    for(let i = 0; i < model.shoppingCartItems.length; i ++){
        // Hent produkt
        const product = findProduct(model.shoppingCartItems[i])
        
        html += `
        <div class="tooltip">
          <span class="tooltiptext">${product.Info}</span>
          <div class="card" id="${i}">
            <img src="${product.img}">
            <div class="title"><br>${product.navn}</div>
            <br>
            <div>
                <label>Pris: ${product.pris}</label>
                        <br>
                <label>På Lager : ${product.antall} </label>
              <br>
            </div>
            <br>
            <button onclick="removeProductAndShowCart(${product.id})">Fjern fra handlekurv</button>
          </div>
      </div>
    `;
  
    }
  
  contentDiv.innerHTML = html;
}