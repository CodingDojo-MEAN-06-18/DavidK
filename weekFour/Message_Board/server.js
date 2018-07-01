const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const flash = require('express-flash');
const path = require('path');
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(flash());

app.use(session({
    secret: 'mypassword',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));





//routes here 
app.get('/', function(req, res) { 
    Message.find({}).then((messages) => {
        res.render("index", {all_messages: messages});
    }).catch((error) => {
        console.log("error: ", error);
    });
});


app.post('/messages/new', (req,res) => {
console.log("POST DATA", req.body);
    Message.create(req.body)
        .then((message) => {
            console.log('message', message);
            res.redirect('/');
        })
         .catch((error)=>{
            console.log("Error: ", error);
            for (let key in error.errors){
                req.flash('messages', err.errors[key].message)
            }
            res.redirect('/');
         });
        
});


app.post('/messages/:id/comments/new', (req, res) => {
    Comment.create(req.body)
        .then((comment) => {
            Message.findById(req.params.id)
            .then((message) => {
                message.comments.push(comment);
                message.save()
                .then(() => {
                    res.redirect("/");
                });
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
        }).catch((error) => {
            console.log("Error: ", error);
            for (let key in error.errors) {
                req.flash('comments', err.errors[key].message)
            }
            res.redirect("/");
            });
});


app.listen(8000, function() {
    console.log("we are listening on port 8000");
})


mongoose.connect('mongodb://localhost/messageBoard_db');
mongoose.connection.on('connected', ()=> console.log('we are connected to mongodb'));


const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true},
    content: { type: String, required: true},
    },
    { timestamps: true });


const MessageSchema = new mongoose.Schema({
    name: { type: String, required: true},
    content: { type: String, required: true},
    comments: [CommentSchema],
    },
    { timestamps: true });

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

const Message = mongoose.model('Message');
const Comment = mongoose.model('Comment');
