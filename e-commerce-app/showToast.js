export function showToast(opr, id) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    if (opr === "add") {
        toast.textContent = `Product with ID ${id} has been added.`;
    } else {
        toast.textContent = `Product with ID ${id} has been deleted.`;
    }
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 2500);
}