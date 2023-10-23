


document.getElementById("btnGuardar").addEventListener("click", function() {
    const valorInput = document.getElementById("inputText").value;
    const urlNuevaPagina = `2daPagina.html?texto=${encodeURIComponent(valorInput)}`;
    window.location.href = urlNuevaPagina;
});

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const texto = urlParams.get("texto");
    
    if (texto) {
        document.getElementById("nombres").textContent = texto;
    }
}
