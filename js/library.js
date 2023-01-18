console.log('guvweudu');
// book constructor
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
    
}


// display constructor
function display(){

}


// add methods to display prototype
display.prototype.add=function(book){
    console.log('adding to UI');
    tablebody=document.getElementById('tablebody')
    let stringUI=`<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>`
  tablebody.innerHTML += stringUI;

}

// implement clear prototype
display.prototype.clear=function(){
    let libraryForm=document.getElementById('libraryForm')
    libraryForm.reset();
}

// implement validate prototype
display.prototype.validate=function(book){
    if (book.name.length<2 || book.author.length<2) {
      return false  
    } 
    else {
      return true  
    }
}
display.prototype.show=function(type,displaymessage){
   let message= document.getElementById('message')
   let boldText;
   if(type==='success'){
    boldText='success'
   }
   else{
    boldText='error'
   }
   message.innerHTML =`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
   <strong>${boldText}:</strong> ${displaymessage}
   
   
   </button>
</div>`
   setTimeout(function() {
     message.innerHTML=``  
   },5000)

}



// add submit event listener
let libraryForm=document.getElementById('libraryForm')
libraryForm.addEventListener('submit',libraryFormSubmit)

  
function libraryFormSubmit(e){
   
   console.log('you have submitted library form'); 
    
   let name=document.getElementById('bookName').value
   let author=document.getElementById('author').value
   let type
   let fiction=document.getElementById('fiction')
   let cooking =document.getElementById('cooking')
   let programming=document.getElementById('computer programming')

   if(fiction.checked){
       type=fiction.value
   }
   else if(programming.checked){
       type=programming.value
   }
   else if(cooking.checked){
       type=cooking.value
   }
   
   let book= new Book(name,author,type)
   console.log(book);


   e.preventDefault()

   let Display= new display();
   if (Display.validate(book)){
    Display.add(book)
    Display.clear()
    Display.show('success','ur book has been succesfully added')
   }
   else{
     Display.show('error',`sorry u can't add this book`)
   }
    





}




