function validarDia() {
    let days = document.getElementById('day').value;
    if (days < 1 || days > 31) { // Verifica se o dia está dentro do intervalo desejado
        alert("Por favor, digite um número entre 1 e 31.");
    } else {
        colorirDia(); // Se o dia estiver dentro do intervalo, chama a função para colorir o dia
    }
}
 
function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendarTable'); // Alterei o ID aqui para corresponder ao ID do primeiro elemento <table>
    let td = calendar.getElementsByTagName('td')[(parseInt(days)-1)];
td.style.backgroundColor = color;
}