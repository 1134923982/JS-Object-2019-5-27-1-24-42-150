var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
var sum=0;
for(key in fruit){
  sum+=fruit[key];
}
console.log(sum);
