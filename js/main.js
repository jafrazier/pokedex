function playerName() {
  var name = prompt('hello trainer! what is your name?');
  if (name === 'john') {
    document.getElementById('default').classList.add('hidden');
    document.getElementById('player').classList.remove('hidden');
    document.getElementById('player2').classList.add('hidden');
    document.getElementById('body').classList.add('body');
    document.getElementById('body').classList.remove('body2');
    document.getElementById('trainer').innerHTML = name;
    document.getElementById('pokeDisplay').src ="https://zippy.gfycat.com/NeighboringMisguidedBlackandtancoonhound.gif";
    document.getElementById('name').innerHTML = '';
    document.getElementById('hp').innerHTML = '';
    document.getElementById('attack').innerHTML = '';
    document.getElementById('defence').innerHTML = '';
    document.getElementById('abilities').innerHTML = '';
    document.getElementById('priority').innerHTML = '';
    document.getElementById('power').innerHTML = '';
    document.getElementById('accuuracy').innerHTML = '';
  } if (name === 'jenn') {
    document.getElementById('default').classList.add('hidden');
    document.getElementById('player2').classList.remove('hidden');
    document.getElementById('player').classList.add('hidden');
    document.getElementById('body').classList.add('body2');
    document.getElementById('body').classList.remove('body');
    document.getElementById('trainer').innerHTML = name;
    document.getElementById('pokeDisplay').src ="https://zippy.gfycat.com/NeighboringMisguidedBlackandtancoonhound.gif";
    document.getElementById('name').innerHTML = '';
    document.getElementById('hp').innerHTML = '';
    document.getElementById('attack').innerHTML = '';
    document.getElementById('defence').innerHTML = '';
    document.getElementById('abilities').innerHTML = '';
    document.getElementById('priority').innerHTML = '';
    document.getElementById('power').innerHTML = '';
    document.getElementById('accuuracy').innerHTML = '';
  } if (name !== 'jenn' && name !== 'john') {
    document.getElementById('default').classList.remove('hidden');
    document.getElementById('player').classList.add('hidden');
    document.getElementById('player2').classList.add('hidden');
    document.getElementById('body').classList.remove('body');
    document.getElementById('body').classList.remove('body2');
    document.getElementById('trainer').innerHTML = name;
    document.getElementById('pokeDisplay').src ="https://zippy.gfycat.com/NeighboringMisguidedBlackandtancoonhound.gif";
    document.getElementById('name').innerHTML = '';
    document.getElementById('hp').innerHTML = '';
    document.getElementById('attack').innerHTML = '';
    document.getElementById('defence').innerHTML = '';
    document.getElementById('abilities').innerHTML = '';
    document.getElementById('priority').innerHTML = '';
    document.getElementById('power').innerHTML = '';
    document.getElementById('accuuracy').innerHTML = '';
  }
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
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/721/',
    image: 'https://media0.giphy.com/media/89fmBQkmIDBja/giphy.gif'
  },
  drapion: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/452/',
    image: 'http://pa1.narvii.com/6219/09a1b603dcfa91664da8ea329e014baa1cb650cc_00.gif'
  },
  doublade: {
    PokeLink: 'https://pokeapi.co/api/v2/pokemon/680/',
    image: 'https://thumbs.gfycat.com/ReadyFelineEyelashpitviper-size_restricted.gif'
  },
  carbink: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/703/',
    image: 'https://78.media.tumblr.com/dbf1a4c9f90a4b01fad269a148ec3f91/tumblr_n8wz87I80l1qbmz7eo1_400.gif'
  },
  archeops: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/567/',
    image: 'https://pa1.narvii.com/5743/481cc80e2d410b9a3bf146f4a0540d53336e96d5_hq.gif'
  },
  monferno: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/391/',
    image: 'https://vignette.wikia.nocookie.net/degrassi/images/1/14/Monferno.gif/revision/latest?cb=20180109132555'
  },
  deoxys: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/386/',
    image: 'http://pa1.narvii.com/6378/149c983a39670216e0f4cfda203d8b1ef75e4658_00.gif'
  },
  pangoro: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/675/',
    image: 'https://pa1.narvii.com/6292/b5d761a427a1170d3203147040df81efcc46e792_hq.gif'
  },
  escavalier: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/589/',
    image: 'https://pa1.narvii.com/6295/75cd9820860d9f684e170a04e028731ec68ab0a8_hq.gif'
  },
  golett: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/622/',
    image: 'https://78.media.tumblr.com/16be0c0189b5879daddb725a920a3fe5/tumblr_mzb2y9rGvQ1qd87hlo1_500.gif'
  },
  xerneas: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/716/',
    image: 'https://pa1.narvii.com/6353/f9092d8f992b3143e813efd10df9b0b6fde13c40_hq.gif'
  },
  bulbasaur: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/1/',
    image: 'https://i.gifer.com/Bg1m.gif'
  },
  charmander: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/4/',
    image: 'https://78.media.tumblr.com/5691bb4f30bf67cf81a97a04480dc878/tumblr_nb13rgQFTF1rsrk2xo1_500.gif'
  },
  squirtle: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/7/',
    image: 'https://media.tenor.com/images/f0508032a2d3022a463c1c885c171711/tenor.gif'
  },
  caterpie: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/10/',
    image: 'https://pa1.narvii.com/6479/39b5f25bd8121ce82a492e3a21ccad004d28d38f_hq.gif'
  },
  weedle: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/13/',
    image: 'https://pa1.narvii.com/6247/675bdf388887f87be4e1cfc1e58e5253c15f23b3_hq.gif'
  },
  pidgey: {
    pokeLink: 'https://pokeapi.co/api/v2/pokemon/16/',
    image: 'http://gifimage.net/wp-content/uploads/2018/04/pidgey-gif-6.gif'
  },
}
function get(name) {
  var pokemonName = pokemon[name];
  var pokeImg = pokemonName['image'];
  var url = pokemonName['pokeLink'];
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);
          // document.getElementById('pokeDisplay').src = myObj.sprites.front_default;
          document.getElementById('pokeDisplay').src = pokeImg;
          document.getElementById('name').innerHTML = myObj.name;
          document.getElementById('hp').innerHTML = myObj.stats[5].base_stat;
          document.getElementById('attack').innerHTML = myObj.stats[4].base_stat;
          document.getElementById('defence').innerHTML = myObj.stats[3].base_stat;
          document.getElementById('abilities').innerHTML = myObj.abilities[0].ability['name'];
          document.getElementById('priority').innerHTML = myObj.name;
          document.getElementById('power').innerHTML = myObj.name;
          document.getElementById('accuuracy').innerHTML = myObj.name;
        }
      };
      xhttp.open('GET', url, true);
      xhttp.send();
  }
