function fetchUserData (){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve({name: "Shubham" , url: "https://youtube.com"})
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log("fetching user Data");
        const userdata = await fetchUserData()
        console.log(userdata);
        console.log("User  Fetched data successfully");
        
        
        
    } catch (error) {
        console.log("Error Fetching Data" , error);
        
    }
}
getUserData();