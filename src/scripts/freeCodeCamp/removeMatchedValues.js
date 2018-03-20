export default function removeMatchedValues(arr) {
    let args = Array.from(arguments).slice(1);

   return arr.filter(item => {
       return !args.includes(item);
   })
};
