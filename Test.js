var arr11 =['a','b','y','t']
var arr12 =['g','h','m','z']


const containsCommonItems2 = (arr1,arr2)=>{
    // creating an object and filling it with arr1 to properties
   var obj ={}
   arr1.forEach(item=>{
       obj[item]=true;
   })

   for(let i=0; i<arr2.length ; i++){
      if(obj[arr2[i]]===true){
          return true;
      }
   }
    return false;
}
//1- Finding a matching char in other array
console.log("Result :",containsCommonItems2(arr11,arr12));

//2- Reversing the String
var str1 ="Hello World..!!"
var str2="";
for(let i=str1.length-1 ;i>=0 ;i-- ){
    str2=str2+str1[i];
}
console.log("str2 :"+str2)
console.log("Reverse of str1 :",str1.split('').reverse().join(''));

//3- merge the the two arrays and sort them
var numArr1 = [4,3,1,5,6]
var numArr2 = [3,5,7,8]

numArr2.forEach(item =>{
    numArr1.push(item)
})
//[4,3,1,5,6,3,5,6,8]
console.log("numArr1 :"+numArr1);

for(let i=0 ; i<numArr1.length-1; i++){
     //   
    if(numArr1[i]>numArr1[i+1]){
        let temp = numArr1[i];
        numArr1[i]=numArr1[i+1];
        numArr1[i+1]=temp;
        i=0;
    }
}
console.log("Sorted Array :",numArr1)



