module.exports = function createDreamTeam( members ) {
  //throw 'Not implemented';
  // remove line with error and write your code here

  if(Array.isArray(members) === false){
    return false;
  }

  let res = "";
  for (let i = 0; i < members.length; i++){
    let prover = members[i];
    if(typeof prover === 'string'){
      prover = prover.trim();
      res= res +prover[0].toUpperCase();
    }
  }
  return res.split("").sort().join('');
};