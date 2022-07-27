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
            output += `
            <ul>
            <li>${data.name}</li>
            <li>${data.age}</li>
            </ul>`;
        })
        //document.body.innerHTML = output;
        document.getElementById('overview').innerHTML = output;
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


//If the promise returns 'resolve', then the promise is resolved, then it will take the 'then' function , otherwise if the promise returns 'reject'
//then it will catch the error 
create_data({name: "Vivek", age: 23}).then(get_datas).catch((error) =>{
    console.log(error);
});

async function start(){
    await create_data({name: "Nigel", age: 23});
    get_datas();

}

start();