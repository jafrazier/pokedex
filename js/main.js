function playerName() {
  var name = prompt('hello trainer! what is your name?');
  document.getElementById('trainer').innerHTML = name;
  document.getElementById('player').classList.remove('hidden');
}
clickCount = 0;
function moreInfo() {
  clickCount += 1;
  if (clickCount % 2 == 0) {
    document.getElementById('more').classList.add('hidden');
  }else {
    document.getElementById('more').classList.remove('hidden');
  }
}
pokemon = {
  volcanion: {
    pokeLink: "https://pokeapi.co/api/v2/pokemon/721/",
    image: 'https://media0.giphy.com/media/89fmBQkmIDBja/giphy.gif'
  },
  drapion: {
    pokeLink: "https://pokeapi.co/api/v2/pokemon/452/",
    image: 'http://pa1.narvii.com/6219/09a1b603dcfa91664da8ea329e014baa1cb650cc_00.gif'

  },
  doublade: {
    PokeLink: "https://pokeapi.co/api/v2/pokemon/680/",
    image: 'https://thumbs.gfycat.com/ReadyFelineEyelashpitviper-size_restricted.gif'
  },
  carbink: {
    pokeLink: "https://pokeapi.co/api/v2/pokemon/703/",
    image: 'https://78.media.tumblr.com/dbf1a4c9f90a4b01fad269a148ec3f91/tumblr_n8wz87I80l1qbmz7eo1_400.gif'
  },
  archeops: {
    pokeLink: "https://pokeapi.co/api/v2/pokemon/567/",
    image: 'https://pa1.narvii.com/5743/481cc80e2d410b9a3bf146f4a0540d53336e96d5_hq.gif'
  },
  dhelmise: {
    pokeLink: "https://pokeapi.co/api/v2/pokemon/781/",
    image: 'https://78.media.tumblr.com/2e024610186b5144ad69ef0eaac5e802/tumblr_ovpbktm2bH1rd4ymxo6_500.gif'
  }
}
function getPoke(name) {
  var something = name;
  var somethingNew = pokemon[name];
  var pokeimg = somethingNew['image'];
  var final = somethingNew['pokeLink'];
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);
          // document.getElementById('pokeDisplay').src = myObj.sprites.front_default;
          document.getElementById('pokeDisplay').src = pokeimg;
          document.getElementById("name").innerHTML = myObj.name;
          document.getElementById("hp").innerHTML = myObj.stats[5].base_stat;
          document.getElementById("attack").innerHTML = myObj.stats[4].base_stat;
          document.getElementById("defence").innerHTML = myObj.stats[3].base_stat;
          document.getElementById("abilities").innerHTML = myObj.abilities[0].ability['name'];
          document.getElementById("priority").innerHTML = myObj.name;
          document.getElementById("power").innerHTML = myObj.name;
          document.getElementById("accuuracy").innerHTML = myObj.name;
        }
      };
      xhttp.open("GET", final, true);
      xhttp.send();
  }
