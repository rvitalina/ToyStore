var checkbox = document.getElementById("terms-of-use");
var modalContainer = document.getElementById("modal-container");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        modalContainer.style.display = "flex";
        document.body.classList.add("no-scroll"); 
    } else {
        modalContainer.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
});

function closeModal() {
    modalContainer.style.display = "none";
    //checkbox.checked = false; 
    document.body.classList.remove("no-scroll");
}
