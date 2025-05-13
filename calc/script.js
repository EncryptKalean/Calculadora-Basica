var equação = "",
        ultimaEqua = "",
        visor = document.getElementById("tela");

      document.querySelectorAll("li").forEach((t) => {
        t.addEventListener("click", () => {
          let tecla = t.textContent;
          if (tecla == "<") {
            equação = equação.slice(0, -1);
          } 
          else if (tecla == "=" && equação != "") {
            ultimaEqua = eval(equação);
            equação = "";
            visor.textContent = ultimaEqua;
          } 
          else if (tecla == "+" && equação == "") {
            equação = ultimaEqua + tecla;
          } 
          else if (tecla != "c" && tecla != "=") {
            equação += tecla;
          } 
          else if (tecla == "c") {
            equação = "";
          }
          if (tecla != "=") {
            visor.textContent = equação;
          }
        });
      });