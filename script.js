const favoritesContainer = document.getElementById("favoritesContainer");


// favoritesContainer.style.cssText="background-color:brown"

// Render favorites on page load
renderFavorites();

function renderFavorites() {
    favoritesContainer.innerHTML = "";

    // Retrieve favorites from local storage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        favoritesContainer.textContent = "No favorite books.";
        return;
    }

    for (let i = 0; i < favorites.length; i++) {
        let parent = document.createElement("div");
        let myDiv = document.createElement("div");
        let myP = document.createElement("p");
        let title = document.createTextNode(`Title: ${favorites[i]['title']}`);
        myP.appendChild(title);
        let myH = document.createElement("h2");
        let author = document.createTextNode(`Author: ${favorites[i]['author']}`);
        myH.appendChild(author);
        let ed = document.createElement("p");
        let edition = document.createTextNode(`Edition: ${favorites[i]['edition']}`);
        ed.appendChild(edition);
        let img = document.createElement("img");
        img.src = favorites[i]['image'];
        myDiv.appendChild(myP);
        myDiv.appendChild(myH);
        myDiv.appendChild(ed);
        myDiv.appendChild(img);

        // Append the favorite book div to the favorites container
        parent.appendChild(myDiv);
        favoritesContainer.appendChild(parent);

        myDiv.style.color = "white";
        ed.style.fontWeight = "400";
        ed.style.fontSize = "16px";
        myP.style.fontSize = "22px";
        myP.style.fontWeight = "500";
    }
}
