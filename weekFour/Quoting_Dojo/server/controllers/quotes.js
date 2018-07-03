const Quote = require("../models/quote.js");

//export to routes
module.exports = {
    
    index: function(req, res) {
        res.render("index");
    },

    get_quotes: function(req,res){
        let quoteHere;
        query = Quote.find({}, function(err,quotes){
            quoteHere = quotes; 
            res.render("quotes", {quotes: quoteHere});
        });
    },

    post_quote: function(req, res) {
        let quote = new Quote(req.body);
        quote.save(function(err) {
            if (err) {
                for (let key in err.errors) {
                    req.flash('quote', err.errors[key].message)
                }
                res.redirect('/');
            } else {
                req.flash('success', 'Your quote was successfully added to the database!');
                res.redirect('/quotes');
            }
        });
    }
}

