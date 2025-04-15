
let heading = document.getElementById("heading");
let timeout;
heading.addEventListener('mouseover',()=>{
   setTimeout(() =>{
        heading.style.color="#6a2c3f";
    },1000);
    
});

heading.addEventListener('mouseover',()=>{
    clearTimeout(timeout) ;
        heading.style.color="";
    });

    let h2 = document.getElementById("h2");
   h2.addEventListener('mouseover',()=>{
        
            h2.style.color="red";
        });
        
        let heading3 = document.getElementById("heading3");
   h2.addEventListener('mouseover',()=>{
        
            heading3.style.color="white";
        });
        
        let heading4 = document.getElementById("heading4");
        h2.addEventListener('mouseover',()=>{
             
                 heading4.style.color="#f5f5dc";
             });
             
             let quote = document.getElementById("quote");
        h2.addEventListener('mouseover',()=>{
             
                 quote.style.color="green";
             });
             
   

    

