function jogar () {playerchoice = prompt (
    "Qual foi sua escolha? 1- agua / 2- fogo / 3- terra / 4- ar"
  );
  cpuchoice = Math.floor(Math.random() * 4) + 1;

  // player agua, cpu agua --> empate
  // player fogo, cpu fogo --> empate
  // player terra, cpu terra --> empate
  // player ar, cpu ar --> empate
  // player agua, cpu terra --> empate
  // player terra, cpu agua --> empate

  if (playerchoice == cpuchoice) {
    alert("Empate!");
  }
if (playerchoice == 1) {
  if (cpuchoice == 3) {
    alert ("Empate!");
  }
  if (playerchoice == 3) {
    if (cpuchoice == 1) {
      alert ("Empate!");
    }
  }
}

  // player agua, cpu fogo --> player vence
  // player fogo, cpu terra --> player vence
  // player terra, cpu ar --> player vence
  // player ar, cpu agua --> player vence

  if (playerchoice == 1) {
    if (cpuchoice == 2) {
      alert("Player venceu!");
    }
    if (playerchoice == 1) {
      if (cpuchoice == 4) {
        alert("Player venceu!");
      }
    }
  }

if (playerchoice == 2) {
  if (cpuchoice == 1) {
    alert ("Player venceu!");
  }
  if (playerchoice == 2) {
    if (cpuchoice == 3) {
      alert ("Cpu Venceu");
    }
    if (playerchoice == 2) {
      if (cpuchoice == 4) {
        alert ("Cpu Vence");
      }
    }
  }
}

if (playerchoice == 3) {
    if (cpuchoice == 2) {
      alert("Player venceu!");
    }
    if (playerchoice == 3) {
      if (cpuchoice == 4) {
        alert("Player venceu!");
      }
    }
  }

if (playerchoice == 4) {
  if (cpuchoice == 1) {
    alert ("Player venceu!");
  }
  if (playerchoice == 4) {
    if (cpuchoice == 2) {
      alert ("Cpu Venceu");
    }
    if (playerchoice == 4) {
      if (cpuchoice == 3) {
        alert ("Player Vence");
      }
    }
  }
}



  

  alert("A escolha da Cpu foi: " + cpuchoice);}  
