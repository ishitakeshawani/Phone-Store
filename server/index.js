const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
// const bodyParser = require("body-parser")
const cors = require("cors")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.post("/payment", cors(), async (req, res) => {
    console.log("route reached", req.body);
    let { amount, id } = req.body;
    console.log("amount and id", amount, id);
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "INR",
            description: "Spatula company",
            payment_method: id,
            confirm: true
        })
        console.log("Payment --------", payment)
        res.json({
            message: "Payment successful",
            success: true
        })
    } catch (error) {
        console.log("Error ------", error)
        res.json({
            message: "Payment failed",
            success: false
        })
    }
})

app.listen(process.env.PORT || 4000, () => {
    console.log("Sever is listening on port 4000")
})