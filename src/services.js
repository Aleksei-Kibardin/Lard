async function postData(data) {
    const res = await fetch("http://localhost:3000/staffList", {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: data
    });

    return await res.json();  
};

async function getResoursce (value) {
    const res = await fetch(`http://localhost:3000/${value}`)
    .then(res => res.json())
    .then(data =>  data);

    return res;
}

const getList = await getResoursce("staffList");
const tagList = await getResoursce("tagList")
const countriesList = await getResoursce("countries")
const gendersList = await getResoursce("genders")
const positionsList = await getResoursce("positions")
const types_contractList = await getResoursce("types_contract")

export{getList, tagList, countriesList, gendersList, positionsList, types_contractList};

export{postData};
