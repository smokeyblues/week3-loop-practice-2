var problems = [
  ['rat', 'cat', 'butterfly', 'marmot'],
  ['rat', 'butterfly', 'ocelot'],
  ['ocelot', 'marmot', 'butterfly', 'cat', 'rat'],
  ['rat', 'cat', 'cat', 'butterfly', 'marmot', 'marmot', 'ocelot']
]

function letEmLoose() {
  for(var i=0; i < problems.length; i++) {
    console.log("\n\nProblem Set #" +(i+1));
    for (var j = 0; j < problems[i].length; j++) {
      console.log(problems[i][j])
    }
  }
}


