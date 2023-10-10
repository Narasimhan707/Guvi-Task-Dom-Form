// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const tableBody = document.querySelector("tbody");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(form);

    // Create a new table row
    const newRow = document.createElement("tr");

    // Populate the table row with form data
    newRow.innerHTML = `
            <td>${formData.get("firstName")}</td>
            <td>${formData.get("lastName")}</td>
            <td>${formData.get("address")}</td>
            <td>${formData.get("pincode")}</td>
            <td>${formData.get("gender")}</td>
            <td>${Array.from(formData.getAll("food")).join(", ")}</td>
            <td>${formData.get("state")}</td>
            <td>${formData.get("country")}</td>
        `;

    // Append the new row to the table
    tableBody.appendChild(newRow);

    // Clear the form
    form.reset();
  });
});
