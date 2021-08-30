let myLibrary = [];
showBook();

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
    let isEmpty = false;
    let value = [document.getElementById("title"),
                 document.getElementById("author"),
                 document.getElementById("page"),
                 document.getElementById("readed")];


    /* make sure every field is filled */
    for(let i = 0; i < value.length-1; i++)
    {
        isEmpty = false;
        typeof(value[i].value) == "string" && value[i].value == "";
        if(typeof(value[i].value) == "string" && value[i].value == "")
        {       
            isEmpty = true;
            i = value.length + 3;
        }
    }
    
    /* if everything is filled continue */
    if(!isEmpty)
    {
        let newBook = new book(value[0].value, value[1].value, value[2].value, value[3].checked);
        myLibrary.push(newBook);
        showBook();

        value.forEach((content) =>{
            content.value = "";
        })
    }

}

function showBook(){
    /* empty the div then recreate it*/
    let div = document.getElementById("book_table");
    let id = 0;
    div.innerHTML= "";

    /* create heading */
    let heading_name = ["Title", "Author", "Page/s", "Read?", "remove"];
    let head = document.createElement("tr");
    
    heading_name.forEach((name) => {
        let content = document.createElement("th");
        content.innerHTML = name;

        head.appendChild(content);
    });
    div.appendChild(head);

    /* create book list */
    myLibrary.forEach((_book) => {
        let newList = document.createElement("tr"), content, button;  
        newList.id = "book_tab";
        
        /* element creation*/
        _book.describe().forEach((item) =>{
            /* add content */
            content = document.createElement("th");

            /* if content type of string*/
            if(typeof(item) == "string")
            {
                content.innerHTML = item;
                content.style="background-color:#f0f0f0;"
            }

            /* if boolean, create checkbox*/
            else if(typeof(item) == "boolean"){
                let cBox = document.createElement("button");
                cBox.onclick = function() {
                    read_button(this);
                }

                if(item){                    
                    cBox.style = "background-color:lightgreen;";
                    cBox.innerHTML = "yes";
                }
                else{
                    cBox.style = "background-color:lightcoral;";
                    cBox.innerHTML = "no";
                }

                content.appendChild(cBox);
            }
        
            newList.appendChild(content);
        })

        /* add remove button */
        content = document.createElement("th");

        button = document.createElement("button");
        button.innerHTML = "Remove";
        button.className = id;
        button.onclick = function() {
            console.log(this.className);
            myLibrary.splice(this.className, 1);
            showBook();
        }
        content.appendChild(button);
        newList.appendChild(content);

        div.append(newList);
        id++;
    })
}

function read_button(button){
    if(button.innerHTML == "yes"){
        button.innerHTML = "no";
        button.style.backgroundColor = "lightcoral";
    }
    else if(button.innerHTML == "no"){
        button.innerHTML = "yes";
        button.style.backgroundColor = "lightgreen";
    }
}

