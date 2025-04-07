function atualizarRelogio() {
  const agora = new Date();

  const segundos = agora.getSeconds();
  const minutos = agora.getMinutes();
  const horas = agora.getHours();

  const ponteiroSegundos = document.getElementById('seconds');
  const ponteiroMinutos = document.getElementById('minutes');
  const ponteiroHoras = document.getElementById('hours');

  const anguloSegundos = segundos * 6; // 360 / 60
  const anguloMinutos = minutos * 6 + segundos * 0.1; // 6° por minuto + ajuste conforme os segundos
  const anguloHoras = (horas % 12) * 30 + minutos * 0.5; // 30° por hora + ajuste dos minutos

  ponteiroSegundos.style.transform = `rotate(${anguloSegundos}deg)`;
  ponteiroMinutos.style.transform = `rotate(${anguloMinutos}deg)`;
  ponteiroHoras.style.transform = `rotate(${anguloHoras}deg)`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // chama ao iniciar
