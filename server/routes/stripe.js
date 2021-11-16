const router = require("express").Router()
const stripe = require("stripe")("sk_test_51HTipgI3JRdlUiO3cNBpWPC3ZD48K9o4hhyUa8dvWQN02XqdsyRWnNCgXDLjBLGkQZJdxrUq5G9NTafDuuk5YW5Y00bySSDaag")


router.post("/payment", (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
        description : "Software development services"
    }, (stripeErr, stripeRes) => {
        if(stripeErr){
            res.status(500).json(stripeErr)
        } else {
            res.status(200).json(stripeRes)
        }
    })
})


module.exports = router