const Mongodb=require("mongodb").MongoClient;

const dbUrl= 'mongodb://localhost:27017'

Mongodb.connect(dbUrl,(err,db)=>{                           //mongo command
if(err)console.log(err);

const newDB=db.db("school")                                        //create database


// newDB.createCollection("students", (err, suc)=>{                      //collection created
// if(err)console.log(err);
// console.log("collection created");
//  })

//  newDB.createCollection("teacher", (err, suc)=>{              //collection created
//     if(err)console.log(err);
//     console.log("collection created");
//      })

// const data={name:"A",roll:1,score:10}                               //inserted one
// newDB.collection("students").insertOne(data,(err,suc)=>{
//     if(err)console.log(err);
//     console.log("Inserted one successfully");   
// })

// const data=[                                                 //inserted Many
// {name:"B",roll:2,score:30},
// {name:"C",roll:3,score:50},
// {name:"D",roll:4,score:70},
// {name:"E",roll:5,score:90}
// ]
// newDB.collection("students").insertMany(data,(err,suc)=>{
//     if(err)console.log(err);
//     console.log("Inserted Many successfully");   
// })

// newDB.collection("students").find().toArray((err,result)=>{            //find
//     if(err)console.log(err);
//         console.log(result);  
// })

// newDB.collection("students").find({roll:2}).toArray((err,result)=>{            //find 
//     if(err)console.log(err);
//         console.log(result);  
// })
  
// const data={name:"C"}                                                       //deleted
// newDB.collection("students").deleteMany(data,(err,result)=>{
//     if(err)console.log(err);
//         console.log(result);  
// })


// const data={roll:2}                                                               //updated Many
// const newData={$set:{score:50}}
// newDB.collection("students").updateMany(data,newData,(err,result)=>{
//     if(err)console.log(err);
//         console.log(result);
   
    // const data={score:{$lt:50}}
    // newDB.collection("students").deleteMany(data,(err,result)=>{
    //         if(err)console.log(err);
    //             console.log(result);  
    //     })


        const data={name:"B"}
    newDB.collection("students").deleteOne(data,(err,result)=>{
            if(err)console.log(err);
                console.log(result);  
        })
})








// Mongo: This Command basically takes you inside Mongodb,this can have multiple databases
//use test is to create the database if the database is already exists it will switch to the database.
//if the collection is empty the output will not like mongoshell but it will return an empty array









































