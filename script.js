// --- CÂU 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

//  CÂU 2 
const products = [
    new Product(1, "iPhone 15 Pro", 28000000, 10, "Phone", true),
    new Product(2, "MacBook M3 Max", 45000000, 5, "Laptop", true),
    new Product(3, "Chuột Magic Mouse", 2000000, 0, "Accessories", false),
    new Product(4, "Bàn phím cơ AKKO", 1500000, 20, "Accessories", true),
    new Product(5, "Samsung S24 Ultra", 32000000, 7, "Phone", true),
    new Product(6, "Tai nghe Sony XM5", 8000000, 15, "Accessories", true)
];

console.log("--- KẾT QUẢ 10 CÂU HỎI ---");

// Câu 3
const cau3 = products.map(p => ({ name: p.name, price: p.price }));
console.log("Câu 3:", cau3);

// Câu 4
const cau4 = products.filter(p => p.quantity > 0);
console.log("Câu 4:", cau4);

// Câu 5
const cau5 = products.some(p => p.price > 30000000);
console.log("Câu 5:", cau5);

// Câu 6
const cau6 = products.filter(p => p.category === "Accessories").every(p => p.isAvailable);
console.log("Câu 6:", cau6);

// Câu 7
const cau7 = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("Câu 7:", cau7.toLocaleString() + " VND");

// Câu 8
console.log("Câu 8:");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Bán" : "Không bán"}`);
}

// Câu 9
console.log("Câu 9:");
for (let key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}

// Câu 10
const cau10 = products.filter(p => p.isAvailable && p.quantity > 0).map(p => p.name);
console.log("Câu 10:", cau10);