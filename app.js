const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');
const photoController = require('./controllers/photoControllers');
const pageConroller = require('./controllers/pageController');


const port = process.env.PORT || 5000;

const app = express();

// connect DB
mongoose.connect('mongodb+srv://canozcan:VbFIpcg17v1e41JY@cluster0.csv8q.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB Connected!')
}).catch((err) =>{
    consolo.log(err);
})

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}));

//ROUTES
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/about', pageConroller.getAboutPage);
app.get('/add', pageConroller.getAddPage);
app.get('/photos/edit/:id', pageConroller.getEditPage);








app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});