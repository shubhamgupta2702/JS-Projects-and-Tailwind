function fetchData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            let success = true;
            if (!success) {
                resolve("Data retrieved SuccessFully")
            } else {
                reject("Data UnsuccessFull")
            }
        }, 3000);
    })
}

fetchData()
.then((data) => {
    console.log(data);
    let data2 = data.toUpperCase()
    console.log(data2);
    
})
.catch((error) => {
    console.error(error);
    
})