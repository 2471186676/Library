let myLibrary = [];

function book(title, author, num_page, readed){
    this.title = title;
    this.author = author;
    this.num_page = num_page;
    this.readed = readed;
}


book.prototype.describe = function() {
    let describe = [this.title,
                    this.author,
                    this.num_page,
                    this.readed];
    return describe;
}


function addBookToLibrary(title, author, num_page, readed){
    let value = document.getElementById("id");
    console.log(value);
    let newBook = new book(title, author, num_page, readed);

    myLibrary.push(newBook);
    showBook();
}

function showBook(){
    /* empty the div then recreate it*/
    let div = document.getElementById("book_display");
    div.innerHTML= "";

    myLibrary.forEach((_book) => {
        let newDiv = document.createElement("div");  
        newDiv.id = "book_tab"; 
        
        /* element creation*/
        _book.describe().forEach((content) =>{
            let element = document.createElement("p");
            element.innerHTML = content;
            newDiv.appendChild(element);
        })

        div.append(newDiv);
    })
}

