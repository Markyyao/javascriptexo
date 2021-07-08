

// Find the Smallest and Biggest Numbers

function minMax(arr){

    var returnArr = [];
    var min = arr[0];
    var max = arr[0];

    for(var i=1; i<arr.length; i++){

        if(min<arr[i]){
            if(max<arr[i]){
                max=arr[i]
            }   
        }else{
            min=arr[i]
        }
    }

    resultat.push(min);
    resultat.push(max);
    
    return returnArr;
}

// Equal number

var Egalite = function(a,b){
    if(a==b){
        return true
    }else{
        return false
    }
}

// Filter string from numbers

function filterArray(arr) {
	var T =[]
	for(var i=0; i<arr.length; i++){
		if((typeof arr[i]) == "number"){
			T.push(arr[i])			
		}
	}
	return T
}

// Absolute SUM

function getAbsSum(arr) {
	var sum=0;
	for(var i=0; i<arr.length; i++){
		if(arr[i]<0){
			sum = sum+Math.abs(arr[i])
		}else{
			sum = sum+arr[i]
		}
	}
	return sum
} 

// Number of True

function countTrue (arr) {
    cpt = 0
    for (var i = 0; i<arr.length; i++){
        if(arr[i] == true){
            cpt = cpt + 1
        }
    }
    return cpt
}
countTrue([true, 5, false, true, true, true, 5])
console.log(cpt)

// Keys values into array

function objectToArray(obj) {
	return Object.entries(obj);
}

// People budgets

function getBuget (arr){
    sum = 0
    for(var i = 0; i<arr.length; i++){
        sum = sum + arr[i].budget
    }
    return sum
}
getBuget([
    {name:"john",age:21,budget:23000},
    {name:"steve",age:32,budget:40000},
    {name:"martin",age:16,budget:2700}
])
console.log(sum)

peapleAge()