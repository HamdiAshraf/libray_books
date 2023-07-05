
let books = [
    {
        id: 1,
        title: "book 1",
        author: "John Doe",
        edition: 12,
        image: "./assets/images/1.gif"
    },
    {
        id: 2,
        title: "book 2",
        author: "K. Rowling",
        edition: 4,
        image: "./assets/images/2.gif"
    },
    {
        id: 3,
        title: "book 3",
        author: "John Doe",
        edition: 5,
        image: "./assets/images/3.webp"
    },
    {
        id: 4,
        title: "book 4",
        author: "Patrick M. Synge",
        edition: 2,
        image: "./assets/images/4.webp"
    },
    {
        id: 5,
        title: "book 5",
        author: "Morrison",
        edition: 8,
        image: "./assets/images/5.gif"
    },
    {
        id: 6,
        title: "book 6",
        author: "Marquet M.",
        edition: 7,
        image: "./assets/images/6.webp"
    },
    {
        id: 7,
        title: "book 7",
        author: "Patrick M. Synge",
        edition: 6,
        image: "./assets/images/7.webp"
    },
]


function renderBooks() {
    const container = document.getElementById("myContainer");
    container.innerHTML = "";
    container.style.cssText = "  display: grid;grid-template-columns: auto auto auto;padding: 10px;"

    for (let i = 0; i < books.length; i++) {
        let parent = document.createElement("div");
        let myDiv = document.createElement("div");
        let myP = document.createElement("p");
        let title = document.createTextNode(`Title: ${books[i]['title']}`);
        myP.appendChild(title);
        let myH = document.createElement("h2");
        let author = document.createTextNode(`Author: ${books[i]['author']}`);
        myH.appendChild(author);
        let ed = document.createElement("p");
        let edition = document.createTextNode(`Edition: ${books[i]['edition']}`);
        ed.appendChild(edition);
        let img = document.createElement("img");
        img.src = books[i]['image'];
        myDiv.appendChild(myP);
        myDiv.appendChild(myH);
        myDiv.appendChild(ed);
        myDiv.appendChild(img);

        // Create delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.cssText = "padding:10px;border-radius:5px;font-size:16px;background-color:grey;color:white;font-weight:300"
        deleteButton.addEventListener("click", () => {
            deleteBook(i);
        });

        // Create update button
        let updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.style.cssText = "padding:10px;border-radius:5px;font-size:16px;background-color:grey;color:white;font-weight:300"
        updateButton.addEventListener("click", () => {
            updateBook(i);
        });
        let favButton = document.createElement("button");
        favButton.textContent = "Favorite";
        favButton.style.cssText = "padding:10px;border-radius:5px;font-size:16px;background-color:grey;color:white;font-weight:300";
        favButton.addEventListener("click", () => {
        addBookToLocalStorage(i);
        });
        
        // Append delete and update buttons to the book div
        myDiv.appendChild(deleteButton);
        myDiv.appendChild(updateButton);
        myDiv.appendChild(favButton);


        parent.appendChild(myDiv);

        myDiv.style.color = "white";
        ed.style.fontWeight = "400";
        ed.style.fontSize = "16px";
        myP.style.fontSize = "22px";
        myP.style.fontWeight = "500";

        container.appendChild(parent);
    }
}



function deleteBook(index) {
    books.splice(index, 1);
    renderBooks();
}


function updateBook(index) {
    const newTitle = prompt("Enter new title:");
    const newAuthor = prompt("Enter new author:");
    const newEdition = prompt("Enter new edition:");
    const newImage = prompt("Enter new image URL:");

    if (newTitle && newAuthor && newEdition && newImage) {
        books[index].title = newTitle;
        books[index].author = newAuthor;
        books[index].edition = newEdition;
        books[index].image = newImage;
        renderBooks();
    }
}
function addBookToLocalStorage(index) {
    const selectedBook = books[index];
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(selectedBook);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}






renderBooks();


function handleFormSubmit(event) {
    event.preventDefault();

    // Retrieve form inputs
    const titleInput = document.getElementById("titleInput");
    const authorInput = document.getElementById("authorInput");
    const imageInput = document.getElementById("imageInput");

    // Create a new book object
    const newBook = {
        id: books.length + 1,
        title: titleInput.value,
        author: authorInput.value,
        edition: 1,
        image: imageInput.value
    };

    // Add the new book to the array
    books.push(newBook);

    // Render the updated books on the page
    renderBooks();

    // Clear the form inputs
    titleInput.value = "";
    authorInput.value = "";
    imageInput.value = "";
}

// Render initial books on page load
renderBooks();

// Retrieve the container element
const container = document.getElementById("my-container");

// Create the "NEW BOOK" button
const newBookButton = document.createElement("button");
//   newBookButton.textContent = "NEW BOOK";

// Create the form
const form = document.createElement("form");

// Create the input fields
const titleInput = document.createElement("input");
titleInput.style.cssText="padding:5px;border-radius:5px;font-size:16px;color:white;font-weight:300"
titleInput.setAttribute("type", "text");
titleInput.setAttribute("placeholder", "Title");
titleInput.setAttribute("id", "titleInput");

const authorInput = document.createElement("input");
authorInput.style.cssText="padding:5px;border-radius:5px;font-size:16px;color:white;font-weight:300"
authorInput.setAttribute("type", "text");
authorInput.setAttribute("placeholder", "Author");
authorInput.setAttribute("id", "authorInput");

const imageInput = document.createElement("input");
imageInput.style.cssText="padding:5px;border-radius:5px;font-size:16px;color:white;font-weight:300"
imageInput.setAttribute("type", "text");
imageInput.setAttribute("placeholder", "Image URL");
imageInput.setAttribute("id", "imageInput");

// Create the submit button
const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.style.cssText="padding:10px;border-radius:5px;font-size:16px;background-color:grey;color:white;font-weight:300"
submitButton.textContent = "Add Book";

// Append the input fields and submit button to the form
form.appendChild(titleInput);
form.appendChild(authorInput);
form.appendChild(imageInput);
form.appendChild(submitButton);

// Add event listener to the form for form submission
form.addEventListener("submit", handleFormSubmit);

// Append the "NEW BOOK" button and form to the container
// container.appendChild(newBookButton);
container.appendChild(form);





container.appendChild(form);


