let rectangle = {
    width: 12,
    height: 5,
    getArea: function() {
      return rectangle.width * rectangle.height;
    }
};
let r = rectangle.getArea();
console.log(r);
