// var a = 123
// console.log(a)



// test()
// function test() {
//     console.log('hello world')
// }

function fn(a) {
    console.log(a)
    var a = 123;
    console.log(a)
    function a() {}
    console.log(a)
    var b = function() {}
    console.log(b)
    function b() {}
}
fn(1)