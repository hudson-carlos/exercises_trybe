const testingScope = escopo => { 
    if (escopo === true) { 
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      return `${ifScope}, ótimo, fui utilizada no escopo !`;
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      return elseScope;
    }
}
console.log(testingScope(true));