const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.post('/add-product',(req,res,next)=>{
    // console.log("In the middleware");
    res.send('<form action="/product" method="POST">Name:<input type="text" name="title"> Size: <input type="number" name="size"><button type="submit">Add Product</button></form>')  
});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found!</h1>');
});
app.listen(4000);
