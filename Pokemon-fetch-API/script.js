async function fetchdata(){
  try{
    const pokemonname=document.getElementById("pokemonname").value.toLowerCase();
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);

    if(!response.ok){
      throw new Error("could not fetch Pokemon API");
    }
    const data=await response.json();
    const pokemonsprite=data.sprites.front_default;
    const imgelement=document.getElementById('pokemonsprite');

    imgelement.src=pokemonsprite;
    imgelement.style.display="block";
    imgelement.style.width="300px";
    imgelement.style.height="300px";
    imgelement.style.background="red";
    imgelement.style.marginLeft="100px";   

  }
  catch(error){
       console.error(error);

  }
}