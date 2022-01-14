// Ativação
window.onload = function () {
  // Variáveis
  // Da formula
  var seconds = 00;
  var miles = 00;
  // De apresentação
  var appendSeconds = document.getElementById("seconds");
  var appendMiles = document.getElementById("miles");
  var register = document.getElementById("log");
  // Dos botões
  var start_btn = document.getElementById("start");
  var stop_btn = document.getElementById("stop");
  var reset_btn = document.getElementById("reset");
  var stamp_btn = document.getElementById("stamp");
  // Do método
  var interval;

  // Ações
  // Inicia a Contagem
  start_btn.onclick = function () {
    interval = setInterval(myTimer, 10);
  };
  // Pausa
  stop_btn.onclick = function () {
    clearInterval(interval);
  };
  // Reseta o tempo
  reset_btn.onclick = function () {
    clearInterval(interval);
    miles = "00";
    seconds = "00";
    appendMiles.innerHTML = miles;
    appendSeconds.innerHTML = seconds;
    register.value = "";
    
  };
  // Marca o tempo
  stamp_btn.onclick = function () {
    var val = appendSeconds.innerHTML + ":" + appendMiles.innerHTML + "\r\n";
    register.value += val;
    // Aqui vc ñ esta reatribuindo mas reatribuindo e acrescentando.
    console.log(val);
  };
  // Saber que textarea só aceita string e que eu estava tentando colocar HtmlElements nela. Por isso quebra de linha nao funcionava. E tive que adicionar outro valor a variavel.

  // A formula
  function myTimer() {
    // Milesegundos
    // acrescenta valor
    miles++;
    // add o zero a miles
    if (miles <= 9) {
      appendMiles.innerHTML = "0" + miles;
    }
    // reinicia no nove
    if (miles > 9) {
      appendMiles.innerHTML = miles;
    }

    // Segundos
    // acrescenta, add e zera miles
    if (miles > 59) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      miles = 0;
      appendMiles.innerHTML = "0" + 0;
    }
    // reinicia no nove
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
