let personas = [
    { nombre: 'Ronal', edad: 25 },
    { nombre: 'Mess', edad: 32 },
    { nombre: 'Ney', edad: 45 },
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