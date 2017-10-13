const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink'];

const inventory = [
  {
    id:"Athletic",
    gear: {
      styles: ['Hockey Jerseys', 'Training Gear', 'Baseball Jerseys', 'Basketball Jerseys']
    }
  },
  {
    id:"Swimwear",
    gear:{
      styles: ['One Piece Swimsuits']
    }
  },
  {
    id:"Shirts",
    gear:{
      styles: ['SS Pocket Tee', 'LS Pocket Tee', 'SS Tee', 'LS Tee', 'Tank', 'Polo Shirts']
    }
  },
  {
    id:"Hats",
    gear:{
      styles: ['Embroidered Trucker', 'Embroidered Fitted', 'Embroidered Snap']
    }
  },
  {
    id:"Jackets",
    gear:{
      styles: ['Quarter Zip', 'Crewneck']
    }
  }
];

let proof = [];

function loadSelectors(){
  $('#selectors').empty();

  for (var i =0; i<inventory.length; i++){
    let newSelector = $('<button>');
    newSelector.addClass('btn btn-lg btn-danger selector');
    newSelector.text(inventory[i].id);
    newSelector.attr('category', inventory[i].id);
    $('#selectors').append(newSelector);
  }
  $('#selectors').append('<br>');

}

function checkNotSelected(selection){
  for (var i =0; i<inventory.length; i++){

      $('.selector').addClass('disabled');

  }
}


function loadStyles(selection){
  for(var i =0; i < inventory.length; i++){

    if (selection === inventory[i].id) {

      let styleArr = inventory[i].gear.styles;

      for (var j = 0; j<styleArr.length; j++){

        let newStyle = $('<button>');
        newStyle.addClass('btn btn-danger btn-large style');
        newStyle.text(styleArr[j]);
        newStyle.attr('style', styleArr[j]);
        $('#selectors').append(newStyle);
      }
      $('#selectors').append('<br>');
    }
  }
}

function loadColors(){
  $('#colorRow').empty();

  for(var i=0;i <colors.length; i++){

    let color=$('<button>');
    color.addClass('btn btn-default color '+colors[i]);
    color.text(colors[i]);
    color.attr('color-type', colors[i]);
    $('#colorRow').append(color);
  }
}

$(document).ready(function(){

  loadSelectors();


  $('body').on("click",'.selector', function(e){
    e.preventDefault();

    let selection = $(this).text();
    console.log(selection);
    checkNotSelected(selection);

    let newRequest = $('<li>');
    newRequest.text(selection);

    $('#requests').append(newRequest);
    proof.push(selection);

    loadStyles(selection);
  });

  $('body').on('click', '.style', function(e){
    e.preventDefault();

    let newstyle = $(this).text();
    console.log(newstyle);

    let newRequest = $('<li>');
    newRequest.text(newstyle);
    $('#requests').append(newRequest);
    proof.push(newstyle);
    loadColors();
  });

  $('body').on('click', '.color', function(e){
    e.preventDefault();

    let newColor = $(this).text();
    let newRequest = $('<li>');
    newRequest.text(newColor);
    $('#requests').append(newRequest);
    proof.push(newColor);
  });

  $('#reset').on('click', function(e){
    e.preventDefault();

    $('#selectors').empty();
    $('#requests').empty();
    proof=[];
    loadSelectors();


  });

  $('#submit').on('click', function(e){
    e.preventDefault();

    console.log(proof);
  })




});
