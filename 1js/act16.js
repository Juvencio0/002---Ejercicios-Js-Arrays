let personas = [
    { nombre: 'Irving', edad: 19 },
    { nombre: 'Alan', edad: 20 },
    { nombre: 'Pablo', edad: 35 },
  ];
  
  let personaBuscada = personas.find(persona => persona.edad === 35);
  
  console.log(personaBuscada);