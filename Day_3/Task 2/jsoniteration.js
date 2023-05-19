let object=[

    {"name":"anushree",
    
      DOB:24/08/2001,
    
      age:21,
    
      gmail:"anu@gamil.com",
    
      professional:"developer",
    
      city:"chennai"
    
    },
    
    {"name":"yuva",
    
      DOB:23/08/1999,
    
       age:23,
    
      gmail:"yuva@gamil.com",
    
      professional:"teacher",
    
      city:"chennai"
    
    },
    
    {"name":"radhika",
    
      DOB:2/04/2000,
    
       age:22,
    
      gmail:"radhi@gamil.com",
    
      professional:"professor",
    
      city:"chennai"
    
    },
    
    ]
    
    for (i=0;i<=object.length;i++){
        
        a=(object[i].age)
    
        n= (object[i].name)  
    
         if(a>=18)
    
         console.log(n,"eligible for vote")
    
         else
    
         console.log(n,"not eligible for vote")
    
    }
    
     
    
    for(i in object){
    
        console.log(i.gamil +" " +object[i].gmail)
    
    }
    
    count=0
    
          for(s of object){
    
              let o=object[s]
    
              ++count
    
          }
    
          console.log(count)
    
       
    
      object.forEach ((items)=>
    
      {
    
          console.log(items)
    
     
    
    })