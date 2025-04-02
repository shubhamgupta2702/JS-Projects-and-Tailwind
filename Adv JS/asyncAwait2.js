function postData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Fetched Post Data")
        }, 3000);
    })
}

function commentData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            reject("Cannot Fetched Comment Data")
        }, 3000);
    })
}

async function fetchingBlogData() {
    try {
        console.log("Fetching Data..");
        const postData1 = await postData();
        const commentData1 = await commentData();
        console.log(postData1);
        console.log(commentData1);
        console.log("Data Fetching Successfull");
    } catch (error) {
        console.log("Error Fetching Data" , error);
        
    }
}

fetchingBlogData();