const datas = [
    {
        name: "Kion", age : 23
    },
    {
        name : "Kushal", age : 22
    }
];


function get_datas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data,index)=>{
            output += `<li>${data.name}</li>`;
        })
        document.body.innerHTML = output;
    },1000);
}

function create_data(new_data){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            datas.push(new_data);
            let error  = false;
            if(!error){
                resolve();
            }
            else{
                reject(error);
            }
        },1000);
    })
}



create_data({name: "Vivek", age: 23}).then(get_datas);

