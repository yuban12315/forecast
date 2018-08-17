function string2arr(string) {
    return JSON.parse(string)
}
export {string2arr}

function arr2string(arr){
    return JSON.stringify(arr)
}

export {arr2string}


/*
* const arr=string2arr(this.$localStorage.get('cityName'))
                    arr[arr.length]=city.toString()
                    const str=arr2string(arr)*/
function add2storage(string,item){
    const arr=string2arr(string)
    arr[arr.length]=item.toString()
    return arr2string(arr)
}

export {add2storage}