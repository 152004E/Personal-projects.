

const getInfo = async () => {
  let aprobados = document.querySelector(".num-aprobados")
  let desaprobados = document.querySelector(".num-desaprobados")
  try{
     let resultado = await axios("informacion.txt");
  aprobados.innerHTML = resultado.data.aprobados;
  desaprobados.innerHTML = resultado.data.desaprobados;
  }catch(e){
    console.log(e)
      aprobados.innerHTML = "la APi fallo repentinamente, vuelve a intentarlo mas tarde.";
  desaprobados.innerHTML = "la APi fallo repentinamente, vuelve a intentarlo mas tarde.";
  }
};

document.getElementById("getInfo").addEventListener("click", getInfo);
