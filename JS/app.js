document.getElementById('texto1').addEventListener('focus', tomarFoco)
document.getElementById('texto2').addEventListener('focus', tomarFoco)

function tomarFoco(e) {
    e.target.style.color = '#f00'
}