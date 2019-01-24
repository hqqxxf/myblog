/**
 * Created by hqq on 2017/1/4.
 */

//Array.prototype.forEach = function(fn, callback){
//  var _this = this;
//  for(var i=0; i<_this.length; i++){
//    fn.call(callback||null,_this[i], i);
//  }
//};
//var arr = [1,2,4];
//arr.forEach(function(item, index){
//  console.log(item, index);
//  console.log(this);
//});


//Object.prototype.keys = function(){
//  var keys = [];
//  for (var i in this)
//    if (this.hasOwnProperty(i))
//      keys.push(i);
//  return keys;
//};
//var obj = {a:1, b:2, c:3};
//console.log(obj.keys().length);
/**
 * 创建一个数组的复制品，最简单的就是MyArray.prototype = new Array();
 * 但是在 IE 中，浏览器不允许 Array 被子类化
 */
//function MyArray(){}
//MyArray.prototype.length = 0;
//(function(){
//  var methods = ['push', 'pop', 'shift', 'unshift', 'slice', 'splice','join'];
//  for (var i = 0; i< methods.length; i++)
//    (function(name){
//  //var name = methods[i];
//      MyArray.prototype[name] = function(){
//        console.log(this, arguments);
//        return Array.prototype[name].apply(this, arguments);
//      };
//    })(methods[i]);
//})();
//
//var mine = new MyArray();
//mine.push(1,2,3);
//console.log(mine.length == 3);
//console.log(!(mine instanceof Array));

/**
 * 普通函数调用强制转成new出来的对象
 * @returns {User}
 * @constructor
 */
//function User(){
//  if (! (this instanceof arguments.callee)){
//    var u = new User();
//    return u;
//  }
//}
//User();
var s = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
console.log(s);
