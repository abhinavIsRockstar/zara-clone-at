// let oracledb = require('oracledb');
// var dbConfig = require('./dbconfig.js');
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  console.log(stripeSecretKey,stripeSecretKey)
  
  


const express = require('express');
const mysql = require('mysql');
const joi = require('joi');
const router = express.Router();
const path = require('path');
const fs = require('fs')
const app = express();
const stripe = require('stripe')(stripeSecretKey)
const bodyParser = require('body-parser');
app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(express.json())
console.log(__dirname,'dirname');
app.get('/', (req,res) => {
    //console.log(req);
    // console.log(res);
    res.sendFile(path.join(__dirname,'static','index.html'));
    // res.sendFile('index.html');
    
})

app.get('/log-in-desktop.html', (req,res) => {
  //  console.log(req);
    // console.log(res);
    res.sendFile(path.join(__dirname,'static','log-in-desktop.html'));
    // res.sendFile('index.html');
    
})

app.get('/static/item.html', (req,res) => {
    //  console.log(req);
      // console.log(res);
    //   res.sendFile(path.join(__dirname,'static','item.html'));
      // res.sendFile('index.html');
      fs.readFile('items.json', function(error,data){
          if(error){
              res.status(500).end()
          } else{
              res.render('item.ejs',{
                  items:JSON.parse(data)
              })
          }
      })
      
      
  })

  app.get('/static/item-cart.html/:id', (req,res) => {
      console.log('yuhuuu',req.params)

    //  console.log(req);
      // console.log(res);
    //   res.sendFile(path.join(__dirname,'static','item-cart.html'));
      // res.sendFile('index.html');
      fs.readFile('items.json', function(error,data){
        if(error){
            res.status(500).end()
        } else{
            let demo =JSON.parse(data)
            demo.shoes.forEach(element => {
                if(element.id == req.params.id){
                    demo.shoes[0].selected = true
                    console.log('inside if')

                    res.render('item-cart.ejs',{
                        items:JSON.parse(data)
        
                    })

                }
            });
            
            console.log(demo.shoes[0].selected,'demo.shoes')
            
           
            console.log(JSON.parse(data))
        }
    })
    // fs.readFile('items_size.json', function(error,data){
    //     if(error){
    //         res.status(500).end;
    //     } else {
    //         console.log('phiss')
    //         res.render('item-cart.ejs',{
    //             items_size:JSON.parse(data)

    //         })
    //     }
    // })
      
  })
  

  app.post('/create-checkout-session', (req,res) => {
    console.log('yuhuuu',req.params)
    const domainUrl = process.env.DOMAIN
    
 
    fs.readFile('items.json',async function(error,data){
      if(error){
          res.status(500).end()
      } else{
                const itemsJson = JSON.parse(data);
                console.log(itemsJson,'itemsJson');
                const itemsArary = itemsJson.shoes.concat(itemsJson.sizes)
                // console.log(req.body.items,'purchase');
                // console.log(itemsJson,'itemsJson');
                let total = 0;
                let name =''
                let quantity = 0
                
                req.body.items.forEach(function(element){
                        const itemJson = itemsArary.find(function(i){
                            return i.id = element.id
                        })
                        console.log(itemJson,'itemJsonnnn')
                        total = total + itemJson.price * element.quantity;
                        name = element.name,
                        quantity = element.quantity
                })      
                console.log(req.body,'req.body')
                let lineItemsDemo = [{
                    name: name,
                    amount: total,
                    quantity: quantity,
                    currency: 'usd'
                }]
                
                const session = await stripe.checkout.sessions.create({
                    payment_method_types: ['card'],
                    shipping_address_collection:{
                        allowed_countries:['US']
                    },
                    line_items : lineItemsDemo,
                    success_url: `${domainUrl }/success?session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${domainUrl }`,
                  });
            
                  res.json({sessionId:session.id})
            


                // stripe.charges.create({
                //     amount: total,
                //     source: req.body.stripeTokenId,
                //     currency: 'usd' ,
                //     description: 'Software development services',
                //     shipping: {
                //       name: 'Abhinav Tiwari',
                //       address: {
                //         line1: '510 Townsend St',
                //         postal_code: '98140',
                //         city: 'San Francisco',
                //         state: 'CA',
                //         country: 'US',
                //     },
                // }
                // })
                // .then(function(){
                //     console.log('charge successful')
                //     res.json({ message: 'successfully purchases item'  })
                // }).catch(function(){
                //     console.log('charge fail');
                //     res.status(500).end()
                // })
                
                // console.log(stripe,'stripe')
      }
     
      
  })
  // fs.readFile('items_size.json', function(error,data){
  //     if(error){
  //         res.status(500).end;
  //     } else {
  //         console.log('phiss')
  //         res.render('item-cart.ejs',{
  //             items_size:JSON.parse(data)

  //         })
  //     }
  // })
    
})

app.get('/success',(req,res)=>{
    console.log('inside success route') 
    res.render('success.ejs')
})

  app.post('/static/cart-main.html', (req,res) => {
    //  console.log(req);
      // console.log(res);
    //   res.sendFile(path.join(__dirname,'static','cart-main.html'));
      // res.sendFile('index.html');
      
      res.render('cart-main.ejs',{
        stripe_public_key : stripePublicKey
      })
  })

app.get('/sign-up-desktop.html', (req,res) => {
    //console.log(req);
    // console.log(res);
    res.sendFile(path.join(__dirname,'static','sign-up-desktop.html'));
    // res.sendFile('index.html');
    
})

//   FORM VALIDATION PART OF LOG IN STARTS HERE
 
   app.post('/logIn', (req,res) => {
  // console.log( req.body,'inside log in');    

    //  DATABASE WORK STARTS HERE     

    //  DATABASE WORK FOR LOG IN
    let post = {
        email: `${req.body.email}`,
        password: `${req.body.password}`
        };

        let sql = `SELECT email, password FROM personal_information WHERE email= '${post.email}' AND password = '${post.password}';`;
        //console.log(sql,'sql output');
        let query = databaseConnection.query(sql,(err, result) => {
            if(err) throw err
            else if(result.length > 0){
                let sql = `SELECT name FROM personal_information WHERE email= '${post.email}';`;
                
                let query = databaseConnection.query(sql, (err, result) => {
                  //  console.log(result, 'result 2')
                    let results = JSON.parse(JSON.stringify(result))
                    
                    console.log(results, 'results')
                    if(err) throw err
                   //res.sendFile(path.join(__dirname,'static','index.html')); 
                    res.render('index',{data: {isLoggedIn: true, user: results[0].name}});   
                                  
                })  
                console.log('sql data', query);              
            }
            else {
                res.send(' Incorrect password try again');
            }
            
            
        })
    //  DATABASE WORK FOR REGISTER A USER 
    
   });

//  FORM VALIDATION PART ENDS HERE

app.post('/register', (req,res) =>{
    console.log(req.body,'yuhu');
    // database work FOR REGISTER A USER starts here

  

 //  DATABASE WORKS ENDS HERE
 
 // SCHEMA FOR REGISTERING A USER
    
    const registerSchema = joi.object().keys({
        name: joi.string().required(),
        email: joi.string().trim().email().required(),                
        password: joi.string().min(6).max(10).required(),  
        repeat_password:joi.string().min(6).max(10).required(),             
        pincode: joi.string().min(6).max(6).required(),
        address : joi.string().required(),
        moreInfo: joi.string().required(),
        locality : joi.string().required(),
        city : joi.string().required(),
        state: joi.string().required(),
        region : joi.string().required(),
        telephone_code: joi.string().required(),
        phoneNumber : joi.string().min(10).max(10).required()
    });
    
    // compare with schema

    joi.validate(req.body, registerSchema,(err,result) => {
        console.log('inside joi validate');

        if(err) {
            console.log( err,'An error has occured, Sorry Chutiya!');
            res.send(err);
           res.send('Entry dhang se daal aur sahi se daal, Thik hai Chutiye!');
        } else {
            console.log('result inside else',result);
            let post = {
                name:  `${req.body.name}` , 
                email: `${req.body.email}` ,                             
                password: `${req.body.password}` ,                
                pincode:  `${req.body.pincode}`,
                address :  `${req.body.address}`,
                moreInfo: `${req.body.optional_info}`, 
                locality: `${req.body.locality}`, 
                city: `${req.body.city}`,
                state: `${req.body.state}`,
                region: `${req.body.country}`,
                phoneNumber: `${req.body.phoneNumber}`    
            }
                

            let sql = 'INSERT INTO personal_information SET ?'
            let query = databaseConnection.query(sql,post,(err,result) =>{
            if(err) throw err
          //  console.log(result);
          // res.send('new user added');
           res.sendFile(path.join(__dirname,'static','log-in-desktop.html'));
            })
        }
    })
    
})



// oracledb.getConnection(
// {
// user : dbConfig.user,
// password : dbConfig.password,
// connectString : dbConfig.connectString
// },
// function(err, connection)
// {
// if (err) {
// console.error(err.message);
// return;
// }
// console.log('Connection was successful!');

// connection.close(
// function(err)
// {
// if (err) {
// console.error(err.message);
// return;
// }
// });
// });

//   CREATE A CONNECTION
const databaseConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'Abhi9avTiwari',
    database: 'eshop',
    
    
});

// CONNECT TO THE DATABASE

databaseConnection.connect( (err) => {

    if(err){
        throw err;
    }else{       
        console.log('database connected')
    }

});

// app.get('/createdb', (req,res)=>{
//     let sql = 'CREATE DATABASE nodeMySqlPractice'
//     databaseConnection.query(sql,(err, result) =>{
//         if(err){
//             throw err;
//       }else{
//             console.log(result);
//             res.send("it worked!");
//       } 
//     })
// })

// app.get('/createpoststable', (req, res) => {
//     let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title varchar(255), body varchar(255), PRIMARY KEY (id))';
//     databaseConnection.query(sql, (err,result) => {
//         if (err) {
//             throw err;
//         } else {
//             console.log(result);
//             res.send('Post table created'); 
//         }
//     })
    
// })

// CREATE POST 1

// app.get('/addpost1', (req, res) => {
//     let post = {title: 'post1',body: 'this is post number one'};
//     let sql = 'INSERT INTO posts SET ?';
//     let query = databaseConnection.query(sql, post,(err, result) => {
//         if(err) throw err
//         console.log(result);
//         res.send('Post 1 added');
//     })
// })

// app.get('/addpost2', (req, res) => {
//     let post = {title: 'post2',body: 'this is post number two'};
//     let sql = 'INSERT INTO posts SET ?';
//     let query = databaseConnection.query(sql, post,(err, result) => {
//         if(err) throw err
//         console.log(result);
//         res.send('Post 2 added');
//     })
// })

// SELECT POST 

// app.get('/getposts', (req, res) => {
//   //  let post = {title: 'post2',body: 'this is post number two'};
//     let sql = 'SELECT * FROM posts';
//     let query = databaseConnection.query(sql, (err, results) => {
//         if(err) throw err
//         console.log(results);
    
//         res.send('Posts fetched...');
//     })
// })

// GET SINGLE POST
// app.get('/getposts/:id', (req, res) => {
//     //  let post = {title: 'post2',body: 'this is post number two'};
//       let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
//       let query = databaseConnection.query(sql, (err, result) => {
//           if(err) throw err
//           console.log(result);
      
//           res.send('Post fetched...');
//       })
//   });

//  UPDATE THE POST

// app.get('/updateposts/:id', (req, res) => {
//     let newTitle ='Update tite';
//     //  let post = {title: 'post2',body: 'this is post number two'};
//       let sql = `UPDATE posts SET title = '${newTitle}' where id = ${req.params.id}`;
//       let query = databaseConnection.query(sql, (err, result) => {
//           if(err) throw err
//           console.log(result);
      
//           res.send('Post updated...');
//       })
//   });


app.listen('3000', () => {
    console.log('server started on port 3000')
});
