var each = function (obj, callback) {
  var value,
    i = 0,
    length = obj.length,
    isArray = Array.isArray(obj); // isArraylike 函数未实现，可以翻阅 jQuery 源代码
  if (isArray) {
    // 迭代类数组
    for (; i < length; i++) {
      callback.call(obj[i], i, obj[i]);
    }
  } else {
    for (i in obj) {
      // 迭代 object 对象
      value = callback.call(obj[i], i, obj[i]);
    }
  }
  return obj;
};
var appendDiv = function (data) {
  each(data, function (i, n) {
    var div = document.createElement("div");
    div.innerHTML = n;
    document.body.appendChild(div);
  });
};
appendDiv([1, 2, 3, 4, 5, 6]);
appendDiv({ a: 1, b: 2, c: 3, d: 4 });
