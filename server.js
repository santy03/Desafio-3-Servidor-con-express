class Contenedor{
	constructor(product) {
		this.product = product;
	}
}

const express = require("express");
const app = express();
const port = 8080;


app.get("/productos", (req, res) => {
	res.end(productos.txt());
})

app.get("/productosRandom", (req, res) => {
	res.end()
})

app.listen(port, () => {
	console.log("Tu servidor esta corriendo en el puerto:" + port)
})

app.on("error", error => console.log("El error es :" + error))

const Contenedor = new Contenedor([{"name":"Buzo Adidas negro", "price": 13999, "url":"/BuzoAdidasNegro.jpg", "id": 1},
{"name":"Remera Puma", "price": 4499, "url":"/RemeraPuma.jpg", "id":2},
{"name":"Zapatillas Adidas Coreracer", "price": 9999, "url":"/ZapatillasAdidasCoreracer.jpg", "id":3}]);

