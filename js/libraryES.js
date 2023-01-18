class Book {
    constructors(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }

}
let book
class display {
    add(book) {
        console.log('adding to UI');
        let tablebody = document.getElementById('tablebody')
        let stringUI = `<tr>
                           <td>${book.name}</td>
                           <td>${book.author}</td>
                           <td>${book.type}</td>
                         </tr>`
        tablebody.innerHTML += stringUI;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm')
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true
        }
    }
    show(type, displaymessage) {
        let message = document.getElementById('message')
        let boldText;
        if (type === 'success') {
            boldText = 'success'
        }
        else {
            boldText = 'error!'
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldText}:</strong> ${displaymessage}
        
        
        </button>
     </div>`
        setTimeout(function () {
            message.innerHTML = ``
        }, 5000)
    }

}

libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit)


function libraryFormSubmit(e) {
    
    console.log('you have submitted library form');

    let name = document.getElementById('bookName').value
    let author = document.getElementById('author').value
    let type
    let fiction = document.getElementById('fiction')
    let cooking = document.getElementById('cooking')
    let programming = document.getElementById('computer programming')

    if (fiction.checked) {
        type = fiction.value
    }
    else if (programming.checked) {
        type = programming.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }

    book = new Book(name, author, type)
    console.log(book);


e.preventDefault()

    let Display = new display();
    if (Display.validate(book)) {
        Display.add(book)
        Display.clear()
        Display.show('success', 'ur book has been succesfully added')
    }
    else {
        Display.show('error', `sorry u can't add this book`)
    }

    
    
    


}
