async function postData(url, data) {
    const res = await fetch(url, {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: data
    });

    return await res.json();  
};

async function getResoursce () {
    const res = await fetch("http://localhost:3000/staffList")
    .then(res => res.json())
    .then(data =>  data);

    return res;
}

const getList = await getResoursce()

export{getList};

export{postData};
