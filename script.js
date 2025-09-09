let cart = [];

const API = {
  plants: "https://openapi.programming-hero.com/api/plants",
  categories: "https://openapi.programming-hero.com/api/categories",
  byCategory: (id) => `https://openapi.programming-hero.com/api/category/${id}`,
  detail: (id) => `https://openapi.programming-hero.com/api/plant/${id}`,
};

async function fetchData(id = "") {
  try {
    if (id.trim() > 0) {
      const response = await fetch(
        `https://openapi.programming-hero.com/api/category/${categoryId}`
      );
    } else {
      const response = await fetch(
        "https://openapi.programming-hero.com/api/plants"
      );
    }

    const jsonData = await response.json();
    const data = jsonData.plants;

    const container = document.getElementById("card-container");

    data.slice(0, 10).forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition duration-300">
 
    <div class="h-48 w-full overflow-hidden flex items-center justify-center bg-gray-100">
      <img src="${item.image}" 
           alt="${item.name}" 
           class="w-full h-full object-cover">
    </div>

    <div class="p-4 flex flex-col flex-1 gap-2">
      <h2 class="text-green-800 font-bold text-lg line-clamp-1">${item.name}</h2>
      <p class="text-gray-600 text-sm line-clamp-2">${item.description}</p>
      
      <div class="flex items-center justify-between mt-2">
        <span class="text-green-700 font-semibold">$${item.price}</span>
        <a href="#" 
           class="bg-green-600 text-white px-3 py-1 rounded-lg shadow hover:bg-green-700 transition text-sm">
           Buy Now
        </a>
      </div>
      
      <button 
        class="mt-3 w-full bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-600 transition"
        onclick="addToCartFun(${item.id}, '${item.name}', ${item.price})">
        Add to Cart
      </button>
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
  alert("rrr");
  let existingProduct = cart.find((item) => item.id === id);

  if (existingProduct) {
    existingProduct.price += price;
  } else {
    cart.push({ id, name, price });
  }

  displayCart();
}

function displayCart() {
  const container = document.getElementById("cart-container");
  const total_container = document.getElementById("total_amount");
  container.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    container.innerHTML += `
      <div class="flex justify-between bg-[#F0FDF4] p-2 rounded-lg">
        <div class="flex flex-col">
          <span class="text-sm">${item.name}</span>
          <span class="font-thin text-sm"> $${item.price}</span>
        </div>
        <button class="font-thin text-red-500"    onclick="removeItem(${item.id})">x</button>
      </div>
    `;
    total_container.innerHTML = "";
    total_container.innerHTML = `
        <span>Total</span>
        <span>$${total.toFixed(2)}</span>
    `;
  });
}

function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);
  displayCart();
}

async function fetchCategories() {
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/categories"
    );
    const data = await response.json();

    const categories = data.categories;

    const listContainer = document.getElementById("categories-list");
    listContainer.innerHTML = "";

    categories.forEach((cat) => {
      console.log(cat);
      const li = document.createElement("li");
      li.textContent = cat.category_name;
      li.className = "hover:underline cursor-pointer";
      li.onclick = () => fetchData(cat.id);
      listContainer.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

async function fetchCategoryItems(categoryId) {
  try {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/category/${categoryId}`
    );
    const data = await response.json();
    console.log("Category Data:", data);
  } catch (error) {
    console.error("Error fetching category items:", error);
  }
}

fetchCategories();
