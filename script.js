const teplota = Number(prompt("Zadej teplotu pečení ve stupních Fahrenheita: "));

const prevod = Math.ceil((5 * (teplota - 32))/9)

document.body.innerHTML = "<h1>Nastavte troubu na " + prevod + " °C. </h1>"
