const teplota = Number(prompt("Zadej teplotu pečení ve stupních Fahrenheita: "));

document.body.innerHTML = "<h1>Nastavte troubu na " + Math.ceil((5 * (teplota - 32))/9) + " °C. </h1>"
