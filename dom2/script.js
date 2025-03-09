document.addEventListener("DOMContentLoaded", () => {
  updateTotal(); // Ensure the total is correct on page load

  // Event delegation to handle all cart interactions
  document
    .querySelector(".list-products")
    .addEventListener("click", (event) => {
      const target = event.target;
      const product = target.closest(".card-body"); // Find the closest product card

      if (!product) return;

      const quantityElement = product.querySelector(".quantity");
      const unitPriceElement = product.querySelector(".unit-price");
      let quantity = parseInt(quantityElement.innerText);
      let unitPrice = parseInt(unitPriceElement.innerText.replace("$", "")); // Convert price to number

      // ✅ Increase Quantity
      if (target.classList.contains("fa-plus-circle")) {
        quantity++;
        quantityElement.innerText = quantity;
        updateTotal();
      }

      // ✅ Decrease Quantity (Ensure it doesn't go below 0)
      if (target.classList.contains("fa-minus-circle")) {
        if (quantity > 0) {
          quantity--;
          quantityElement.innerText = quantity;
          updateTotal();
        }
      }

      // ✅ Delete Item
      if (target.classList.contains("fa-trash-alt")) {
        product.parentElement.remove(); // Remove product card
        updateTotal();
      }

      // ✅ Like (Toggle Heart Color)
      if (target.classList.contains("fa-heart")) {
        target.classList.toggle("liked"); // Toggle class
        target.style.color = target.classList.contains("liked")
          ? "red"
          : "black";
      }
    });

  // ✅ Function to Update Total Price
  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".card-body").forEach((product) => {
      const quantity = parseInt(product.querySelector(".quantity").innerText);
      const unitPrice = parseInt(
        product.querySelector(".unit-price").innerText.replace("$", "")
      );
      total += quantity * unitPrice;
    });
    document.querySelector(".total").innerText = total + " $";
  }
});
