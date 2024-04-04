//challenge 1 part 1
document.querySelector("#subscribe").addEventListener("click", function() {
    if (this.checked) {
        document.querySelector("#emailDiv").style.display = "block";
    } else{
        document.querySelector("#emailDiv").style.display = "none";
    }
})

//challenge 1 part 2
document.addEventListener("click", function() {
    let currentTime = new Date();
    alert("Current time: " + currentTime);
})


//challenge 2
document.querySelector("#sameAddress").addEventListener("click", function() {
    if (this.checked) {
        document.querySelector("#home").value = document.querySelector("#bill").value;
        document.querySelector("#home").readOnly = true;
    } else{
        document.querySelector("#home").readOnly = false;
    }
})

//challenge 3 THIS DOESNT WORK!!!
document.querySelector("#next").addEventListener("click", function() {
    if(document.querySelector('input[name="standing"]').checked == false && document.querySelector('input[name="gradDate"]').checked == false){
        alert("Please check the box to continue");
    }
})