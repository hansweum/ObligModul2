// let contentDiv = document.getElementById('content');
 function myFunction() {
    var x = document.getElementById("Tekst").value;
    
  }
  
function showForm(){

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
  
   <br> 
   <input id="txt" type="text" class="textbox" value="Din tekst..."/>
    <br>
   <input id="mtxt" type="text" class="textbox" value="Din e-post:"/>
    <br>
    <br>
   <button onclick="myFunction()">Send</button>
  
`
contentDiv.innerHTML = html;
} 