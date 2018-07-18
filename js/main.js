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
function volcanion() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      // document.getElementById('pokeDisplay').src = myObj.sprites.front_default;
      document.getElementById('pokeDisplay').src = 'https://media0.giphy.com/media/89fmBQkmIDBja/giphy.gif';
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
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/721/", true);
  xhttp.send();
}
function drapion() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      // document.getElementById('pokeDisplay').src = myObj.sprites.front_default;
      document.getElementById('pokeDisplay').src = 'http://pa1.narvii.com/6219/09a1b603dcfa91664da8ea329e014baa1cb650cc_00.gif';
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
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/452/", true);
  xhttp.send();
}
function doublade() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      // document.getElementById('pokeDisplay').src = myObj.sprites.front_default;
      document.getElementById('pokeDisplay').src ='https://pa1.narvii.com/6474/00d2b4f63883f8c62389e8b57c68d7d618197cb6_hq.gif';
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
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/680/  ", true);
  xhttp.send();
}
function carbink() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      // document.getElementById('pokeDisplay').src = myObj.sprites.front_default;
      document.getElementById('pokeDisplay').src = 'https://78.media.tumblr.com/d027bed6a01a7d355a3914fa451639c1/tumblr_n8wudzKShb1r8sc3ro1_500.gif ';
      document.getElementById("name").innerHTML = myObj.name;
      document.getElementById("hp").innerHTML = myObj.stats[5].base_stat;
      document.getElementById("attack").innerHTML = myObj.stats[4].base_stat;
      document.getElementById("defence").innerHTML = myObj.stats[3].base_stat;
      document.getElementById("abilities").innerHTML = myObj.abilities[1].ability['name'];
      document.getElementById("priority").innerHTML = myObj.name;
      document.getElementById("power").innerHTML = myObj.name;
      document.getElementById("accuuracy").innerHTML = myObj.name;

    }
  };
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/703/", true);
  xhttp.send();
}
function archeops() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      // document.getElementById('pokeDisplay').src = myObj.sprites.front_default;
      document.getElementById('pokeDisplay').src = 'https://pa1.narvii.com/5743/481cc80e2d410b9a3bf146f4a0540d53336e96d5_hq.gif';
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
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/567/", true);
  xhttp.send();
}
function dhelmise() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      // document.getElementById('pokeDisplay').src = myObj.sprites.front_default;
      document.getElementById('pokeDisplay').src = 'https://78.media.tumblr.com/2e024610186b5144ad69ef0eaac5e802/tumblr_ovpbktm2bH1rd4ymxo6_500.gif';
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
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/781/", true);
  xhttp.send();
}
