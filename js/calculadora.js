function calcularCalorias() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const edad = document.getElementById("edad").value;
    const sexo = document.getElementById("sexo").value;
    const actividad = document.getElementById("actividad").value;
  
    let tasaMetabolicaBasal;
    if (sexo === "masculino") {
      tasaMetabolicaBasal = 10 * peso + 6.25 * altura - 5 * edad + 5;
    } else {
      tasaMetabolicaBasal = 10 * peso + 6.25 * altura - 5 * edad - 161;
    }
  
    const caloriasDiarias = tasaMetabolicaBasal * actividad;
    document.getElementById("resultado").value = caloriasDiarias.toFixed(2);
  }
  