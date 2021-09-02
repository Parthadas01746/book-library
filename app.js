document.getElementById("button-addon2").addEventListener("click", function(){
    var input = document.getElementById("input-field");
    var inputValue = input.value;
    

    fetch(`https://openlibrary.org/search.json?q=${inputValue}`)
    .then(res => res.json())
    .then(data => showBook(data.docs))
})


function showBook(books){
    for(const book of books){
        console.log(book.key)
        var booksContainer = document.getElementById("books-container");
        var div = document.createElement("div");
        div.classList.add("col")
        div.innerHTML = `
        <div class="card ">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-100% min-width-100% " alt="...">
                <div class="card-body">
                  <h5 class="card-title">dffhfslkjf</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <button onclick="showDetails('${book.key}')">Details</button>
              </div>`
              booksContainer.appendChild(div)
    }
    
    
}


function showDetails(data){
   var detailsContainer = document.getElementById("details-container");
   detailsContainer.innerHTML = `
   <p>partha</p>`
    
}
    
    