var form = document.getElementById('data-form');
var table = document.getElementById('data-table');
var tbody = table.querySelector('tbody');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.getElementById('gender').value;

    var foodInputs = document.querySelectorAll('input[name="food"]:checked');
    var foods = Array.from(foodInputs).map(input => input.value).join(', ');

    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;

    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foods}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    tbody.appendChild(newRow);

    form.reset();
});
