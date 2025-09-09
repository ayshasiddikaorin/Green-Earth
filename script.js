let cart = [];




const API = {
  plants: "https://openapi.programming-hero.com/api/plants",
  categories: "https://openapi.programming-hero.com/api/categories",
  byCategory: (id) => `https://openapi.programming-hero.com/api/category/${id}`,
  detail: (id) => `https://openapi.programming-hero.com/api/plant/${id}`,
};

async function fetchData() {
  try {
    // Example API (returns array of posts)
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await fetch(
      "https://openapi.programming-hero.com/api/plants"
    );
    const jsonData = await response.json();
    const data = jsonData.plants;
    console.log(data);
    // Target container
    const container = document.getElementById("card-container");

    // Loop through API data
    data.slice(0, 10).forEach((item) => {
      // showing only first 10
      const card = document.createElement("div");
      card.className = "card";
      console.log(item);
      card.innerHTML = `
            <div class="bg-white h-[400px] rounded-2xl shadow-lg overflow-hidden flex flex-col">
    <div class="h-48 w-full overflow-hidden">
      <img src="${item.image}" alt="${item.name}" class="w-full h-full p-3">
    </div>
    <div class="p-4 flex flex-col flex-1 gap-2">
      <h2 class="text-green-800 font-bold text-lg">${item.name}</h2>
      <p class="text-gray-600 text-sm">${item.description}</p>
      <div class="flex items-center justify-between mt-2">
        <span class="text-green-700 font-semibold">$${item.price}</span>
        <a href="#" class="bg-green-600 text-white px-3 py-1 rounded-lg shadow hover:bg-green-700 text-sm">Buy Now</a>
      </div>
      <button class="mt-3 w-full bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-600" onclick="addToCartFun(${item.id},${item.name},${item.price})">Add to Cart</button>
    </div>
  </div>
          `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

function addToCartFun(id, name, price) {

  let existingProduct = cart.find(item => item.id === id);

  if (existingProduct) {
    // If exists, increase price
    existingProduct.price += price;
  } else {
    // If not, add new product
    cart.push({ id, name, price });
  }

  // Show cart items in HTML
  displayCart();
}

function displayCart() {
  const container = document.getElementById("cart-container");
  container.innerHTML = ""; // Clear before update

  cart.forEach(item => {
    container.innerHTML += `
      <div class="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
        <span class="font-medium">${item.name}</span>
        <span class="text-green-700 font-semibold">$${item.price}</span>
      </div>
    `;
  });
}