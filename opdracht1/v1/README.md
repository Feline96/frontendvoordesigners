# Frontend

De opdracht die ik heb gekozen voor de eerste opdracht is: 
Als ik foto's zoek wil ik kunnen selecteren op kleur om verassende zoekresultaten te krijgen.

Wat heb ik gedaan:
Ik heb elke foto een class meegegeven.

Uitleg van de code:

Ik heb deels de code gebruikt via codepen, A PEN BY Saheer.

BRON: https://codepen.io/saheeranas/pen/zepyyG 

En elke button om te filteren dus de verschillende kleuren, heb ik een data-filter meegegeven.

Eerst een variabelen aan elke variabel geeft ik een eigen waarde mee. 

Met de regel filterBtns.forEach voeg ik een eventListener toe waneer je op op click voert hij de actie uit.

Met de regel item.parentNode.classList.remove verwijder je de class 'active' waardoor je de afbeelinden die je niet wilt zien verdwijnen.

De code setTimeout (function()) roept een functie aan of evalueert een expressie na een opgegeven aantal milliseconden. iIn deze regel is dat 700 milliseconden. Na die milliseconden voegt hij een classList toe met de regel item.classList.add("shown").


Alle foto's zijn van https://unsplash.com
