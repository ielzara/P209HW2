document.getElementById("pizza-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const size = document.querySelector('input[name="size"]:checked').value;
    const toppings = parseInt(document.getElementById("toppings").value);

    let price = 0;

    switch (size) {
        case "small":
            price = 7;
            break;
        case "medium":
            price = 10;
            break;
        case "large":
            price = 14;
            break;
    }

    if (toppings === 1) {
        price += 2;
    } else if (toppings === 2) {
        price += 3;
    }

    document.getElementById("price").innerHTML = "Total Price: $" + price.toFixed(2);
});
