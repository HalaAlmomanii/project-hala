
const db = require('../database');


let init = (cb) => {
    console.log(" hello")
  }

  
let DietName=(Name,cb)=>{
  db.Diet.find({Name},(err,data)=>{
    if(err){
      cb(err)
        
          }  else
          {
            let Url=data[0].Url
    cb(Url)
        }
      
    } )
    }

    let Gettips=(cb)=>{
     db.Tip.find({},(err,data)=>{
        if(err){
          cb(err)
        }
          else{
            console.log(data[0].tips)
            cb(data[0].tips)
          }
        })
    }

let addpost=(post,cb)=>{
  db.Chat.create({post},(err,data)=>{
    if(err){
      console.log(err)
    
      }  else
      {
        getpost(cb)
    } 
  })
}
let getpost=(cb)=>{
  db.Chat.find({},{comment:1,post:1},(err,data)=>{
    if(err){
      console.log(err)
    
      }  else
      {
        cb(data)
    }   
  }).sort({_id:-1})
}


addcomment=(comment,id,cb)=>{
  db.Chat.updateOne({_id:id},{$push:{comment:comment}},(err,data)=>{
    if(err){
      console.log(err)
    
      }  else
      {
        getpost(cb)
    }   
  })
}


    let Creatediet=(Url,Name)=>{
      db.Diet.create({Url,Name},(err,data)=>{
        if(err){
          console.log(err)
        
          }  else
          {
            console.log(`done${data}`)
        }
      
    } )
    }

    let addTips=(tips)=>{
     db.Tip.insertMany({tips},(err,data)=>{
        if(err){
          console.log(err)
              }  else      {
            console.log(`done${data}`)
        }
    } )
    }

    let Mytip=()=>{
      addTips([
      "Having realistic expectations increases your chances of maintaining healthy lifestyle behaviors",
      "When you're tempted to indulge in unhealthy behaviors,remembering what motivates you can help you stay on track.",
      "Keeping unhealthy foods out of the house, or at least out of sight, can increase your chances of staying on track.",
      "Rejecting the urge to judge your day as good or bad can prevent you from overeating and making poor choices.",
      "Having a partner join you in making healthy lifestyle changes can increase your chances of success.",
      "Do your best to stay motivated and focused while you adapt to a healthy lifestyle. It takes 66 days to make a new habit, on average."
    
    ])
      
    }
    // Mytip()



let MyDiet=()=>{ 
  Creatediet("https://i.pinimg.com/originals/0f/de/15/0fde15f4c8bca289e4899768d340c015.jpg", "Gaining Lean Muscle")
  Creatediet("https://i.pinimg.com/736x/e1/9e/9b/e19e9beb6fc5254fcc2fbe36dc173da7.jpg","Lose Weight")
  Creatediet("https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/12/hdp-jan-2019-meat-menu-chart-700.jpg","Gain Weight")
}

// MyDiet()

    
module.exports = { 
  Gettips,DietName,init,addpost,addcomment,getpost
}

