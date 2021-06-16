/* I modul 2 er det bare én obligatorisk oppgave. Her skal du lage din egen lille applikasjon etter samme mønster som teamoppgaven. 

Oppgaven skal leveres på epost til oblig@getacademy.no.

I løpet av uke 2 skal du levere:

Beskrivelse av hva du vil lage
Skisser av skjermbildene
Dersom du synes det er vanskelig å være kreativ eller å velge, er det bare å spørre om hjelp - på samme måte som i alle andre ting man kan stå fast med. 

I løpet av uke 5 skal du levere:

En ferdig applikasjon med alt som er listet opp i de neste punktene. Du skal sende en epost til oblig@getacademy.no med både: 
lenke til et GitHub-repository som inneholder koden som er laget
lenke til GitHub-pages, hvor applikasjonen skal kunne kjøres direkte
Applikasjonen skal ha minst to forskjellige sider
Applikasjonen skal være laget ved hjelp av model-view-controller
Modellen skal inneholde minst én liste med objekter - og minst én løkke som går gjennom denne listen
Applikasjonen skal inneholde minst ett eksempel på hver av følgende ting:
vise fremdata fra modellen 
legge til data i modellen
endre data i modellen
slette data i modellen
Det skal være minst fire unit tester av controller-funksjoner
minst to som viser at funksjonene gjør som de skal med riktig input 
minst to som viser at funksjonene takler ugyldig input på en god måte

Hei
 
Obligatorisk oppgave 1
 
Navn: Palm Shop
Oversikt over produkter bilder info etc
Legge til handlekurv
Fjerne fra handlekurv
Endre produktantall i handlekurv
Samlet pris på produkter
 
Hovedside med inventar
Har valgt 10 products jeg tenker å føre i butikken
* Logg inn funksjon/opprett konto
* Det skal være mulig for administrator å legge til produkter
Prisen må være oppgitt under varene
Info om varen når du holder pekeren over den, dvs hva slags stell, klima den trenger
Lagerantall bør stå når du trykker på varen, eventuelt leveringstid
*/

let contentDiv = document.getElementById('content');
show();

function show(){
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
<div class id="form">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies sem augue, ut pretium leo convallis elementum. 
Mauris dapibus quis magna vel vestibulum. Morbi cursus bibendum dictum. Sed sit amet semper nunc, sed blandit ipsum. 
Morbi et odio sit amet risus tristique lobortis quis in dui. Suspendisse in vulputate ex, a porta sapien. Pellentesque rutrum nibh at posuere pretium. 
Nunc fermentum libero turpis, eget tincidunt magna bibendum vel. Mauris a dui vitae massa consectetur vulputate quis a risus. Integer sed ullamcorper tellus, eget elementum odio. 
Nulla ante mi, cursus ut quam in, lobortis semper ipsum. Ut vel odio eu justo luctus vehicula.
  <div class="container">
  </div>
</div>

    

`;
    for(let i = 0; i < model.products.length; i ++){
        const product = model.products[i]
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
            
        </div>
        <br>
            <button onclick="addProductAndShow(${product.id})">Legg til handlekurv</button>
    </div>
    </div>
        `;


    }
    contentDiv.innerHTML = html;
   

 
 
}
