let openBtn = document.querySelectorAll(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");
const form = document.querySelector(".modal-content");

function openModal() {
	modal.classList.remove("hide");
}

function closeModal(e, clickedOutside) {
    e.preventDefault();
    form.reset()
	if (clickedOutside) {
		if (e.target.classList.contains("modal-overlay"))
			modal.classList.add("hide");
	} else modal.classList.add("hide");
}


openBtn.forEach(function(button) {
    button.addEventListener("click", openModal );
  });
modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);
