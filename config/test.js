/**
 * apply call
 */
//function juggle(){
//  var result = 0;
//  for (var n = 0; n < arguments.length; n++){
//    result += arguments[n];
//  }
//  this.result = result;
//}
//var ninja1 = {};
//var ninja2 = {};
//juggle.apply(ninja1, [1, 2, 3, 4]);
//juggle.call(ninja2, 5, 6, 7, 8);
//assert(ninja1.result === 10, "juggled via apply");
//assert(ninja2.result === 26, "juggled via call");
/**
 * 2
 * @param list
 * @param callback
 */
//function forEach(list, callback){
//  for (var n = 0; n < list.length; n++){
//    callback.call(list[n], n);
//  } }
//var list = ['shuriken', 'katana', 'nunchucks']; forEach(
//  list,
//
//  function(index){
//    console.log(index);
//    console.log(this);
//    assert(this == list[index], "Got the expected value of "+
//      list[index]);
//  });

//Function.prototype.partial = function(){
//  var fn = this, args = Array.prototype.slice.call(arguments);
//  return function(){
//    var arg = 0;
//    for (var i = 0; i < args.length && arg < arguments.length; i++){
//      if (args[i] === undefined){
//        args[i] = arguments[arg++];
//      }
//
//    }
//    return fn.apply(this, args);
//  }
//}
//
//var delay = setTimeout.partial(undefined, 10);
//delay(function(){
//  assert(true,"A call to this function will be delayed 10 ms");
//})
//
//
//var bindClick = document.body.addEventListener.partial("click", undefined, false);
//
//bindClick(function(){
//  assert(true, "Click event bound via curried function.");
//})

Function.prototype.memoized = function(key){
  this._values = this._values || {};
  console.log(this._values);
  return this._values[key] !== undefined ?
    this._values[key] :
    this._values[key] = this.apply(this, arguments);
}

// 这里得memoize就是利用闭包的特性，来隐性的更改了ipPrime的行为
Function.prototype.memoize = function(){
  var fn = this;                              //#1
  return function(){                          //#2
    return fn.memoized.apply(fn, arguments);
  }
}

var isPrime = (function ( num ){
  var prime = num != 1;
  for ( var i = 2; i < num; i++)
  {
    if (num % i == 0){
      prime = false;
      break;
    }
  }
  return prime;
}).memoize();
console.log(isPrime(5));
