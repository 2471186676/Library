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


function addBookToLibrary(){
    let value = [document.getElementById("title").value,
                 document.getElementById("author").value,
                 document.getElementById("page").value,
                 document.getElementById("readed").value];
    console.log(value);

    
    let newBook = new book(value[0], value[1], value[2], value[3]);
    myLibrary.push(newBook);
    showBook();
}

function showBook(){
    /* empty the div then recreate it*/
    let div = document.getElementById("book_display");
    div.innerHTML= "";

    myLibrary.forEach((_book) => {
        let newList = document.createElement("li");  
        newList.draggable = true;
        newList.id = "book_tab"; 
        
        /* element creation*/
        _book.describe().forEach((content) =>{
            let element = document.createElement("p");
            element.innerHTML = content;
            newList.appendChild(element);
        })

        div.append(newList);
    })
}

