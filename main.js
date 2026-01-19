// Câu 1:
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2:
let products = [
  new Product(1, "Laptop", 999.99, 10, "Electronics", true),
  new Product(2, "Smartphone", 699.99, 25, "Accessories", true),
  new Product(3, "Desk Chair", 89.99, 15, "Furniture", true),
  new Product(4, "Bookcase", 129.99, 5, "Furniture", false),
  new Product(5, "Headphones", 199.99, 30, "Electronics", true),
];

console.log(products);

// Câu 3:
var newProduct = products.map((item) => {
  return {
    name: item.name,
    price: item.price,
  };
});
console.log(newProduct);

// Câu 4:
var productsInStock = products.filter((item) => item.quantity > 0);
console.log(productsInStock);

// Câu 5:
var result = products.some((item) => item.price > 30);
console.log(result);
if (result) {
  console.log("Có sản phẩm có giá lớn hơn 30");
} else {
  console.log("Không có sản phẩm có giá lớn hơn 30");
}

// Câu 6:
var result = products.every((item) =>
  item.category === "Accessories" ? item.isAvailable === true : true,
);
console.log(result);
if (result) {
  console.log("Tất cả sản phẩm trong danh mục Accessories đều đang được bán");
} else {
  console.log(
    "Không phải tất cả sản phẩm trong danh mục Accessories đều đang được bán",
  );
}

// Câu 7:
var total = products.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
console.log("Tổng giá trị kho hàng: " + total);

// Câu 8:
for (let item of products) {
  console.log(
    `Tên sản phẩm: ${item.name} - Danh mục: ${item.category} - Trạng thái: ${item.isAvailable ? "Đang bán" : "Ngừng bán"}`,
  );
}

// Câu 9:
for (let index in products[0]) {
  console.log(`${index}: ${products[0][index]}`);
}
console.log(products[0]);

// Câu 10:
var result = products
  .filter((item) => item.isAvailable && item.quantity > 0)
  .map((item) => item.name);
console.log("Danh sách tên các sản phẩm đang bán và còn hàng: " + result);
