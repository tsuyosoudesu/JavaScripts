let a =[125,100,250,555,44,350];
console.log('billls',a);
let bills = [125,100,250,555,44,350];
a.forEach((item, index, arr) => {
    if(a[i]>=50 && a[i]<=300){
        arr[index] = item * 0.15;
    }
    else{
        arr[index] = item * 0.2;
    }
    
});


let tips = a.slice(0);
console.log('tips',tips);
let total = [];
for(let i=0;i<tips.length;i++){
    total[i] = bills[i] +  tips[i];

}
console.log('total', total);


/*let bills=[125,100,250,555,44,350];

console.log('bills',bills);



let tips=bills.map(e=>{

    if(e>=50 && e<=300){

        return e*0.15;

    }else {

        return e*0.2;

    }

});



console.log('tips',tips);





let total=[];

for(let i=0;i<bills.length;i++){

    total[i]=bills[i]+tips[i];

}

console.log('total',total);*/