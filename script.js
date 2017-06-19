$(function() { 

    function bookSearch() {
        console.log("It's working!!");

        var keyword = document.getElementById('search').value;
        document.getElementById('result').innerHTML = "";
            
       $.ajax({
           url: 'https://www.googleapis.com/books/v1/volumes?q=' + keyword, //google books
            dataType:'json',
            type: 'GET',
            success: function (data) {
                console.log("You're looking for" +" "+ keyword);
                for (i = 0; i < data.items.length; i++) {
                    result.innerHTML += "<div class='title'>" + data.items[i].volumeInfo.title + "</div>" + 
                        "Authors:" + "<div class='author'>" + data.items[i].volumeInfo.authors + "</div>" + 
                        "Publisher:" + "<div class='publisher'>" + data.items[i].volumeInfo.publisher + "</div> " + 
                        //"<div class='cover'>" + '<img src="' + data.items[i].volumeInfo.imageLinks.thumbnail + '"/>' + 
                        "</div>"+ "<div class='desrc'>" + data.items[i].volumeInfo.description + "</div>";
                       }
                },
             error: function (data) {
                  console.log("Oops!Can't find the data....")
               }
            });
        }
    document.getElementById('button').addEventListener('click', bookSearch, false);
});
