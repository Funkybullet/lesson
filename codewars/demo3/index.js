const nums = ['c','a','z','y'];
console.log(nums.sort());//给字符排序
const nums2 = [1,10,2,28];  //sort常考问题
console.log(nums2.sort(function(a,b){
    console.log (a,b,a - b > 0);
    return a - b > 0;
    // console.log(a,b,'----------');
}));
