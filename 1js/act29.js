let personas = [
    { nombre: 'Luis', edad: 25 },
    { nombre: 'David', edad: 32 },
    { nombre: 'Ronaldo', edad: 45 },
  ];
  
  function agruparPorDecada(personas) {
    return personas.reduce((grupos, persona) => {
      let decada = Math.floor(persona.edad / 10) * 10;
      grupos[decada] = grupos[decada] || [];
      grupos[decada].push(persona);
      return grupos;
    }, {});
  }
  
  let personasPorDecada = agruparPorDecada(personas);
  console.log(personasPorDecada);