// Função para mostrar o pop-up
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Função para fechar o pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Event listener para o botão abrir o pop-up
document.getElementById("popupButton").addEventListener("click", openPopup);

// Event listener para o botão fechar o pop-up
document.getElementById("close").addEventListener("click", closePopup);
