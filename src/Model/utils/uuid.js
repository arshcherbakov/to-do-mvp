// const generatorId = {
//   id: 0,
//   get getId() {
//     return this.id;
//   },

//   [Symbol.iterator]() {
//     return {
//       next: () => {
//         return { value: this.id++, done: false }
//       }
//     }
//   }
// }

const uuid = () => {
  // generatorId[Symbol.iterator]().next();

  return crypto.randomUUID();
}

export default uuid;