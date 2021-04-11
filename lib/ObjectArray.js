const filter = (arr, field, value) => {    
    let result = []
    for (let item of arr) {
        if (item[field] === value) {
            result.push(item)
        }
    }
    return result
}

// const filter = (arr, field, value) => {
//     return arr.filter((item) => {
//         if (item[field] === value) {
//             return true
//         } else {
//             return false
//         }
//     })
// }

// const filter = (arr, field, value) => arr.filter(item => item[field] === value)

// const group = (arr, field) => {
//     const dictionary = {}
//     for (let item of arr) {
//         if (!dictionary[item[field]]) {
//             dictionary[item[field]] = {
//                 [field]: item[field],
//                 items: []
//             }
//         }
//         dictionary[item[field]].items.push(item)
//     }
//     //return dictionary
//     return Object.values(dictionary);
//}

const group = (elems, field) =>{
    let dictionary = {};
    let result = [];
    for(let elem of elems){
        let elemVal = elem[field]
        if(!dictionary[elemVal]){
            dictionary[elemVal] = []
        }
        dictionary[elemVal].push(elem)
    }
    for(let item in dictionary){
        result.push({
            [field]: item,
            items : dictionary[item] 
        })
    }
    return result
}

const sort =(arr, field) =>{
    return arr.sort((item_1, item_2)=> {
        // if (item_1[field] > item_2[field]) {
        //     return 1;
        // } else {
        //     return -1;
        // }

        return (item_1[field] > item_2[field]) ? 1 : -1
    })
    
}

const aggretate = (arr, field, value)=>{
    if(value === "count"){
        const groups = group(arr, field)
        return groups.map((groupItem)=>{
            return {
                [field] : groupItem[field],
                count : groupItem.items.length
            }
        })
        // return group(arr, field).map((groupItem)=>({
        //     [field] : groupItem[field],
        //     count : groupItem.items.length
        // }))
    }
}
module.exports = {
    filter,
    group,
    sort,
    aggretate
}