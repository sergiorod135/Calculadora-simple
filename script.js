document.getElementById("calculate").addEventListener("click", function () {
    const operand1 = parseFloat(document.getElementById("operand1").value);
    const operand2 = parseFloat(document.getElementById("operand2").value);
    const operator = document.getElementById("operator").value;
  
    if (isNaN(operand1) || isNaN(operand2)) {
      document.getElementById("result").textContent = "";
      document.getElementById("error-message").textContent = "No es número válido";
    } else {
      document.getElementById("error-message").textContent = "";
  
      let result;
      
      switch (operator) {
        case "add":
          result = operand1 + operand2;
          break;
        case "subtract":
          result = operand1 - operand2;
          break;
        case "multiply":
          result = operand1 * operand2;
          break;
        case "divide":
          if (operand2 === 0) {
            document.getElementById("result").textContent = "";
            document.getElementById("error-message").textContent = "No se puede dividir por cero";
            return;
          }
          result = operand1 / operand2;
          break;
        default:
          result = "Operación no válida";
      }
  
      if (!isFinite(result)) {
        document.getElementById("result").textContent = "";
        document.getElementById("error-message").textContent = "Resultado fuera de rango";
      } else {
        document.getElementById("error-message").textContent = "";
        document.getElementById("result").textContent = `Resultado: ${result}`;
      }
    }
  });