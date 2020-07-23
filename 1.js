const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.listen(8000, () => {
    console.log("Server run on port 8000");
})




app.post("/kubus", (req,res) => {

    let sisi = Number(req.body.sisi) 

    let luaspermukaanA = Math.pow(sisi,3)

    let response = {
        sisi: sisi,
        luaspermukaanA: luaspermukaanA,
    }

    res.json(response)
})

app.post("/balok", (req,res) => {

    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi) 

    let luaspermukaanB = 2 * (panjang * lebar + lebar * tinggi + panjang * tinggi)

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luaspermukaanB: luaspermukaanB,
    }

    res.json(response)
})

app.post("/prisma_segitiga", (req,res) => {

    let alas = Number(req.body.alas)
    let tinggi = Number(req.body.tinggi)
    let tinggiprisma = Number(req.body.tinggiprisma) 

    let luas = alas * tinggi / 2
    let luassisi = alas * tinggiprisma * alas
    let luaspermukaanC =    luas * 2 + luassisi * 3 

    let response = {
        alas: alas,
        tinggi: tinggi,
        tinggiprisma: tinggiprisma,
        luas: luas,
        luassisi: luassisi,
        luaspermukaanC: luaspermukaanC,
    }

    res.json(response)
})

app.post("/limas_segiempat", (req,res) => {

    let sisi = Number(req.body.sisi)
    let tinggilimas = Number(req.body.tinggilimas) 

    let luassisiprisma = sisi * tinggilimas / 2
    let luaspermukaanD = Math.pow(sisi,2) + luassisiprisma * 4

    let response = {
        sisi: sisi,
        tinggilimas: tinggilimas,
        luassisiprisma: luassisiprisma,
        luaspermukaanD: luaspermukaanD,
    }

    res.json(response)
})




