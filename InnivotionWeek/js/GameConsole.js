$(document).ready(function () {
  console.log('Script loaded');

  //AJAX CALLS FROM ALL THE PLATFORMS (DESC,NAME)
  var ps1 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.rawg.io/api/platforms/27",
    "method": "GET"
  }
  var ps2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.rawg.io/api/platforms/15",
    "method": "GET"
  }
  var psP = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.rawg.io/api/platforms/17",
    "method": "GET"
  }
  var ps3 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.rawg.io/api/platforms/16",
    "method": "GET"
  }
  var psVita = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.rawg.io/api/platforms/19",
    "method": "GET"
  }
  var ps4 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.rawg.io/api/platforms/18",
    "method": "GET"
  }

  // AJAX CALL PLATFORMS TOPRATED GAMES
  var topRatedPs2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.rawg.io/api/games?platforms=15&ordering=-rating",
    "method": "GET"
  }
  var topRatedPsp = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.rawg.io/api/games?platforms=17&ordering=-rating",
    "method": "GET"
  }
  var topRatedPs3 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.rawg.io/api/games?platforms=16&ordering=-rating",
    "method": "GET"
  }
  var topRatedPsVita = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.rawg.io/api/games?platforms=19&ordering=-rating",
    "method": "GET"
  }
  var topRatedPs4 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.rawg.io/api/games?platforms=18&ordering=-rating",
    "method": "GET"
  }

  //////////-------------------------------------------------------------------------///////////

  // AJAX CALLBACK PS1 (DESC,NAME,TOPRATED 5 GAMES)
  $.ajax(ps1).done(function (response) {
    $('#playstation1 .about h2').append(response.name + ' X');
    console.log(response);
  });
  //////////-------------------------------------------------------------------------///////////

  // AJAX CALLBACK PS2 (DESC,NAME,TOPRATED 5 GAMES)
  $.ajax(ps2).done(function (response) {
    $('#playstation2 .about h2').append(response.name);
    console.log(response);
  });

  $.ajax(topRatedPs2).done(function (response) {
    //create unordered list
    $('#playstation2 #toprated').append('<ol></ol>');
    //loop in the 5 most popular games + image of game
    for (var i = 0; i < 10; i++) {
      $('#playstation2 #toprated ol').append('<li class="' + i + '">' + (i + 1) + '. ' + response.results[i].name + '</br>  <img class="' + i + '" src="' + response.results[i].background_image + '" alt=""></li>');
    }
    console.log(response.results.released);
    console.log(response);
  });
  //////////-------------------------------------------------------------------------///////////

  // AJAX CALLBACK PSP (DESC,NAME,TOPRATED 5 GAMES)
  $.ajax(psP).done(function (response) {
    $('#playstationP .about h2').append(response.name);
    console.log(response);
  });

  $.ajax(topRatedPsp).done(function (response) {
    //create unordered list
    $('#playstationP #toprated').append('<ol></ol>');
    //loop in the 5 most popular games + image of game
    for (var i = 0; i < 10; i++) {
      $('#playstationP #toprated ol').append('<li class="' + i + '">' + (i + 1) + '. ' + response.results[i].name + '</br>  <img class="' + i + '" src="' + response.results[i].background_image + '" alt=""></li>');
    }
    console.log(response.results.released);
    console.log(response);
  });
  //////////-------------------------------------------------------------------------///////////

  // AJAX CALLBACK PS3 (DESC,NAME,TOPRATED 5 GAMES)
  $.ajax(ps3).done(function (response) {
    $('#playstation3 .about h2').append(response.name);
    console.log(response);
  });

  $.ajax(topRatedPs3).done(function (response) {
    //create unordered list
    $('#playstation3 #toprated').append('<ol></ol>');
    //loop in the 5 most popular games + image of game
    for (var i = 0; i < 10; i++) {
      $('#playstation3 #toprated ol').append('<li class="' + i + '">' + (i + 1) + '. ' + response.results[i].name + '</br>  <img class="' + i + '" src="' + response.results[i].background_image + '" alt=""></li>');
    }
    console.log(response.results.released);
    console.log(response);
  });
  //////////-------------------------------------------------------------------------/////////// 

  // AJAX CALLBACK PSVITA (DESC,NAME,TOPRATED 5 GAMES)
  $.ajax(psVita).done(function (response) {
    $('#playstationVita .about h2').append(response.name);
    console.log(response);
  });

  $.ajax(topRatedPsVita).done(function (response) {
    //create unordered list
    $('#playstationVita #toprated').append('<ol></ol>');
    //loop in the 5 most popular games + image of game
    for (var i = 0; i < 10; i++) {
      $('#playstationVita #toprated ol').append('<li class="' + i + '">' + (i + 1) + '. ' + response.results[i].name + '</br>  <img class="' + i + '" src="' + response.results[i].background_image + '" alt=""></li>');
    }
    console.log(response.results.released);
    console.log(response);
  });
  //////////-------------------------------------------------------------------------/////////// 

  // AJAX CALLBACK PS4 (DESC,NAME,TOPRATED 5 GAMES)
  $.ajax(ps4).done(function (response) {
    $('#playstation4 .about h2').append(response.name);
    console.log(response);
  });

  $.ajax(topRatedPs4).done(function (response) {
    //create unordered list
    $('#playstation4 #toprated').append('<ol></ol>');
    //loop in the 5 most popular games + image of game
    for (var i = 0; i < 10; i++) {
      $('#playstation4 #toprated ol').append('<li class="' + i + '">' + (i + 1) + '. ' + response.results[i].name + '</br>  <img class="' + i + '" src="' + response.results[i].background_image + '" alt=""></li>');
    }
    console.log(response.results.released);
    console.log(response);
  });
  // HIDE SHOW FUNCTION //////
//////////-------------------------------------------------------------------------///////////


//////////////////-------------- SLIDER--------- ///////////////////

var slider = document.getElementById("sliderPs1");
var output = document.getElementById("yearValuePs1");
output.innerHTML = slider.value;


///////////////////////// PLAYSTATION 1 TOPRATED GAMES YEAR /////////////////////////////
slider.oninput = function() {
  output.innerHTML = this.value;
  
var year = document.getElementById("sliderPs1").value;
    makeCall(year);
    
    function makeCall(Y){
      var ps1Rating= {
        "async": true,
        "crossDomain": true,
        "url": "https://api.rawg.io/api/games?platforms=27&dates="+Y+"-01-01,"+Y+"-12-31&ordering=-rating",
        "method": "GET"
      }

      $.ajax(ps1Rating).done(function (response) {
        //create unordered list
        $('#playstation1 #toprated').append('<ol></ol>');
        //loop in the 5 most popular games + image of game
        for (var i = 0; i < 10; i++) {
          $('#playstation1 #toprated ol').append('<li class="' + i + '">' + (i + 1) + '. ' + response.results[i].name + '</br> <img class="' + i + '" src="' + response.results[i].background_image + '" alt=""></li>');
        }
        console.log(response.results.released);
        console.log(response);
      });
      $("#toprated").empty();
    }
    }

//////////-------------------------------------------------------------------------///////////
$('.showBlock').click(function () {
  var target = $(this).data("target");
  console.log("console clickedd", target);
  console.log("is traget defined?", $(target))
  $(target).toggle();
});

$('#myBtn').click(function () {
  $('#playstation1').hide();
  $('#playstation2').hide();
  $('#playstationP').hide();
  $('#playstation3').hide();
  $('#playstationVita').hide();
  $('#playstation4').hide();
});
});