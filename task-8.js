
var arr =[3,5,10,15,23,22,25,35,56]
var result=[];
for(i in arr){
    if(arr[i] %5 ==0){
        result.push(arr[i])
        // result=result.length==0?arr[i]:result+","+arr[i]
    }
}
console.log(result)


var arr =["htmL","csS","javaScrIPT","react","angulaR","nodE","EXPREss"]
 result=[]
for (i in arr){
    // console.log(arr[i]);
    let t = arr[i][arr[i].length-1];
    if(t == t.toUpperCase()) {
        result.push(arr[i]);
    } 
}
console.log(result)

var arr=["html","css","js","react","angular"]
result=[]
for(i in arr){
    if([i]%2==0){
       let x = arr[i].toUpperCase()
        result.push(x)
    }
}
console.log(result)