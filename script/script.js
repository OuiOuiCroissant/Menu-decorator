function Order () {
  this.cost = function() {return 0;};
}

function latte (order) {
  var latte_price = 35;
  if (document.getElementById('latte').value.length == 0) {
    var _latte = 0;
  } else {
    var _latte = parseInt(document.getElementById('latte').value);
  }
  var v = order.cost();
  order.cost = function(){
    return v + latte_price * _latte;
  };
}

function cappucino (order) {
  var cappucino_price = 30;
  if (document.getElementById('cappucino').value.length == 0) {
    var _cappucino = 0;
  } else {
    var _cappucino = parseInt(document.getElementById('cappucino').value);
  }
  var v = order.cost();
  order.cost = function(){
    return v + cappucino_price * _cappucino;
  };
}

function espresso (order) {
  var espresso_price = 25;
  if (document.getElementById('espresso').value.length == 0) {
    var _espresso = 0;
  } else {
    var _espresso = parseInt(document.getElementById('espresso').value);
  }
  var v = order.cost();
  order.cost = function(){
    return v + espresso_price * _espresso;
  };
}

 function filter (order) {
   var filter_price = 30;
   if (document.getElementById('filter').value.length == 0) {
     var _filter = 0;
   } else {
     var _filter = parseInt(document.getElementById('filter').value);
   }
   var v = order.cost();
   order.cost = function(){
    return v + filter_price * _filter;
   };
 }

 function flat (order) {
   var flat_price = 40;
   if (document.getElementById('flat').value.length == 0) {
     var _flat = 0;
   } else {
     var _flat = parseInt(document.getElementById('flat').value);
   }
   var v = order.cost();
   order.cost = function(){
    return v + flat_price * _flat;
   };
 }


function getBill(){
  var bill = new Order();
  latte(bill);
  cappucino(bill);
  espresso(bill);
  filter(bill);
  flat(bill);

  document.getElementById("container2").style.display = "block";

  document.getElementById('totalCost').innerHTML = bill.cost();
};

function exit() {
  document.getElementById("container2").style.display = "none";
};
