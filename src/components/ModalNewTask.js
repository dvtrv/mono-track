export const ModalNewTask = ({ action }) => {
  return /* html */ `
  <dialog data-action="${action}" class="modal">

    <div class="modal-box">
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">Press ESC key or click outside to close</p>
    <!--aditional "close" button-->
        <form class="modal-action">
            <button class="btn">close</button>
        </form>

    </div>
        <!--outside the modal "close" button-->
    <form class="modal-backdrop">
        <button>close</button>
    </form>

  </dialog>
  `;
};
