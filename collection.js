var productsection = document.getElementById("product")
var searchbar = document.getElementById("search")
var allproduct = productsection.querySelectorAll("div")


searchbar.addEventListener("keyup", function () {
    var searchvalue = event.target.value.toUpperCase()


    for (count = 0; count < allproduct.length; count = count + 1) {
        var productname = allproduct[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(searchvalue) < 0) {
            allproduct[count].style.display = "none"
        }
        else {
            allproduct[count].style.display = "block"
        }
    }
})