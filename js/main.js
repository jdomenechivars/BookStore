$.getJSON("https://api.myjson.com/bins/udbm5", function (data) {

  createBooks(data);
  getDate();

});

function getDate() {

  var today = new Date();

  var hourNow = today.getHours();

  var greeting;

  var htmlgreting = document.getElementById("greeting");

  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = ' Good afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }

  htmlgreting.innerHTML = greeting;

}

function createBooks(data) {

  var books = data.books;

  var booksRail = document.getElementById("booksRail");

  for (var i = 0; i < books.length; i++) {

    var eachBook = books[i];

    var createBookBox = document.createElement("div");
    createBookBox.setAttribute("class", "bookBox");

    var createBook = document.createElement("div");
    createBook.setAttribute("class", "book");

    createCover(createBook, eachBook);
    createDescritpion(createBook, eachBook);

    createBookBox.appendChild(createBook);
    booksRail.appendChild(createBookBox);

  }



  $('#booksRail').hideseek();

  // Make apear fancybox//
  $(document).ready(function () {

    $(".bookDetails").fancybox({
      loop: true,
      keyboard: true,
      arrows: true,
      protect: true,
      gutter: 50,
      margin: [44, 0],

    });

  });

  // init Isotope
//var $grid = $('').isotope({
//    // optionn
//
//  });
//// filter items on button click
//$('.filter-button-group').on( 'click', 'button', function() {
//  var filterValue = $(this).attr('data-filter');
//  $grid.isotope({ filter: filterValue });
//});

}

function createCover(createBook, eachBook) {

  var coverUrl = eachBook.portada;

  var bookCover = document.createElement("div");
  bookCover.setAttribute("class", "bookCover");


  var cover = document.createElement("img");

  cover.setAttribute("src", coverUrl);
  cover.setAttribute("alt", "cover");
  cover.setAttribute("class", "cover");

  bookCover.appendChild(cover);
  createBook.appendChild(bookCover);
}

function createDescritpion(createBook, eachBook) {

  var bookTitle = eachBook.titulo;
  var bookDescription = eachBook.descripcion;
  var bookLanguage = eachBook.idioma;


  var bookBackCover = document.createElement("div");
  bookBackCover.setAttribute("class", "bookDescription")

  var bookCreateTitle = document.createElement("h2");
  bookCreateTitle.setAttribute("class", "bookTitle");

  var bookCreaDescription = document.createElement("p");
  bookCreaDescription.setAttribute("class", "description");

  var bookCreaLanguage = document.createElement("h5");
  bookCreaLanguage.setAttribute("class", "bookLanguage");


  bookCreateTitle.innerHTML = bookTitle;
  bookBackCover.appendChild(bookCreateTitle);

  bookCreaDescription.innerHTML = bookDescription;
  bookBackCover.appendChild(bookCreaDescription);

  bookCreaLanguage.innerHTML = bookLanguage;
  bookBackCover.appendChild(bookCreaLanguage);

  createButtonDetails(createBook, eachBook, bookBackCover);

  createBook.appendChild(bookBackCover);
}

function createButtonDetails(createBook, eachBook, bookBackCover) {

  var detailsUrl = eachBook.detalle;
  var detailTitle = eachBook.titulo;

  var bookDetails = document.createElement("a");
  bookDetails.setAttribute("class", "bookDetails");
  bookDetails.setAttribute("href", detailsUrl);
  bookDetails.setAttribute("data-fancybox", "group")
  bookDetails.setAttribute("data-caption", detailTitle);

  var bookInfoButton = document.createElement("button");
  bookInfoButton.setAttribute("type", "button");
  bookInfoButton.setAttribute("class", "btn btn-link");

  bookInfoButton.innerHTML = "+ Info";

  bookDetails.appendChild(bookInfoButton);

  bookBackCover.appendChild(bookDetails);
}

//Make disappear the article//
$(document).ready(function () {
  $(this).scroll(function () {
    $("article").slideUp();
  });
});

//Make appear the filter panel//
$(document).ready(function () {
  $(".filters ").click(function () {
    $(".ppanel").fadeToggle("slow");
    $("article").slideUp();
    $("#booksRail").css("margin-top", "65px");
  });
});

//Make the content appear on list view changhing de the classes//
$(document).ready(function () {

  $('.list').on('click', function () {

    $('#booksRail').removeClass('booksRail').addClass('listRail');
    $('.bookBox').removeClass('bookBox').addClass('listBox');
    $('.book').removeClass('book').addClass('listBook');
    $('.bookCover').removeClass('bookCover').addClass('listCover');
    $('.cover').removeClass('cover').addClass('secondCover');
    $('.bookDescription').removeClass('bookDescription').addClass('listDescription');
    $('.description').removeClass('description').addClass('secondDescription');

  });
});

//Make the content return to appear on grid view changing the classes//
$(document).ready(function () {

  $('.grid').on('click', function () {

    $('#booksRail').removeClass('listRail').addClass('booksRail');
    $('.listBox').removeClass('listBox').addClass('bookBox');
    $('.listBook').removeClass('listBook').addClass('book');
    $('.listCover').removeClass('listCover').addClass('bookCover');
    $('.secondCover').removeClass('secondCover').addClass('cover');
    $('.listDescription').removeClass('listDescription').addClass('bookDescription');
    $('.secondDescription').removeClass('secondDescription').addClass('description');

  });
});

//Boton to the top//

// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {

  if (document.body.scrollTop > 20) {

    $("#myBtn").css("display", "block");

  } else {

    $("#myBtn").css("display", "none");

  }
}

//When the user clicks on the button, scroll to the top of the document

$(document).ready(function () {

  $('#myBtn').on('click', function () {

    document.body.scrollTop = 0;

  });

});

// Isotope//



