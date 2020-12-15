  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.backdropRef.addEventListener("click", logBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  function logBackdropClick() {
    console.log("Это клик в бекдроп");
  }