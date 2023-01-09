function showCard(event) {
    let card = document.getElementById("card");
    let text = event.target.nextElementSibling;
    document.getElementById("card-text").innerHTML = text.innerHTML;
    text.style.display = "none";
    card.style.display = "flex";
  }

  let card = document.getElementById("card");
  card.addEventListener("click", function() {
    this.style.display = "none";
    let text = document.getElementById("card-text");
    let siblings = text.parentElement.parentElement.children;
    for (let i = 0; i < siblings.length; i++) {
      if (siblings[i].tagName == "P") {
        siblings[i].style.display = "";
      }
    }
  });