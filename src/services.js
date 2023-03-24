async function postData(url, data) {
    const res = await fetch(url, {
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

let getList = await getResoursce("staffList");
let tagList = await getResoursce("tagList")

export{getList, tagList};

export{postData};
