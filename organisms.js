const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  console.log(mockUpStrand())
  
  function pAequorFactory(specimenNum, dna) {
    return {
      specimenNum,
      dna,
      mutate() {
        let randIndex = Math.floor(Math.random() * this.dna.length);
        let oldBase = this.dna[randIndex];
        let bases = ['A', 'T', 'C', 'G'];
        bases.splice(bases.indexOf(oldBase), 1);
        let newBase = bases[Math.floor(Math.random() * 3)]
        return this.dna.splice(randIndex, 1, newBase)
      },
      compareDNA(organism) {
        let count = 0
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === organism.dna[i]) {
            count ++
          }
        }
        let percent = (count * 100) / this.dna.length
        console.log(`the dna from organism1 and organism2 are ${percent}%`)
      },
      willLikelySurvive() {
        const cAndGBases = this.dna.filter(i => i === 'C' || i === 'G')
        if ((cAndGBases.length/this.dna.length) >= 0.6) {
          return true;
        } else {
          return false;
        }
      },
    }
  }
  
  let instances = []
  let i = 0
  while (instances.length < 30) {
    let instance1 = pAequorFactory(i, mockUpStrand())
    if (instance1.willLikelySurvive() === true) {
      instances.push(instance1)
      i ++;
    }
  }
  
  console.log(instances)
  
  
