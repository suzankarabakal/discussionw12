document.querySelector("#sameAddress").addEventListener("click", function() {
    if (this.checked) {
        document.getElementById("home").value = document.getElementById("bill").value;
        document.getElementById("home").readOnly = true;
    } else{
        document.getElementById("home").readOnly = false;
    }
})