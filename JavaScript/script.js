// Navigator 
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
        sidemenu.style.right = "0";
    }

function closemenu(){
        sidemenu.style.right = "-50%";
    }

// Hiding and revealing cards 
var isHidden = false;

function toggleItems() {
    var itemList = document.getElementById('itemList');
    var items = Array.from(itemList.children).slice(4);

    items.forEach(function(item) {
        item.classList.toggle('hidden', isHidden);
    });

    isHidden = !isHidden;
    updateButtonText();
}

function updateButtonText() {
    var button = document.getElementById('toggleButton');
    button.textContent = isHidden ? 'more>>' : 'less<<';
}

