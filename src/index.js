const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {resolve("OK")}, 2000);
});

// minhaPromise()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {

//   });

// async function executaPromise(){
//   console.log(await minhaPromise());//await so pode ser usado dentro de funções assincronas
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// }

const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executaPromise();//Se torna uma promise, da pra usar .then nela