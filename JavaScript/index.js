// create a functiona that takes an array of objects as input, 
// and returns the user whose age > 18 and are male

function solve(arr) {
        let arr2 = []; //initialize a new array
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].gender == "male" && arr[i].age > 18) {
                arr2.push(arr[i])
          }
        }
        //initialize a new array, push to new array
        return arr2;

        // you can use the filter function inside an array
}

const user = [{
        name: 'Jhon',
        age: 22,
        gender: "male"
}, {
        name: 'jane',
        age: 21,
        gender: "female"


}]
const ans = solve(user);
console.log(ans);                                                               