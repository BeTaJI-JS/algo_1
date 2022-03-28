function powNum(x,n) {
    let res = 0
   for(let i = 1; i <= n; i+=1){
     res = res * x
     console.log(res)
   }
   return res
 }
 
 console.log(powNum(2,5))