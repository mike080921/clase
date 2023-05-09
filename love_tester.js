function test() {
    const nombre1 =document.getElementById("nombre1").value;
    const nombre2 =document.getElementById("nombre2").value;
    const porcentaje= calculateStringMatch(nombre1 + nombre2)
      alert("el porcentaje es " + porcentaje + "%");  

  }
  function calculateStringMatch(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
    }
    let normalizedValue = (hash % 100 + 100) % 100;
    return normalizedValue;
  }