//Sample to crete a post
function createPost(post){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`Post created: ${post}`);
            resolve(post);
        },1000);
    });
}


//Sample function to simulate updating last user
function updateLastUserActivityTime(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            const lastActivityTime = new Date();
            console.log(`Last Activity time update: ${lastActivityTime}`);
            resolve(lastActivityTime);
        },1000);
    });
}

//Function to simulate deleting post
function deletePost(post){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`Post deleted: ${post}`);
            resolve(post);
        },1000);
    });
}

//fnction to demonstarte squence of action
async function demo(){
    try{
        //step 1 : create post
        const createdPost = await createPost('This is a new post');

        //step2: update the last user activity
        const lastActivityTime = await updateLastUserActivityTime();

        //step 3: Log all ppost and last activyt time
        console.log(`All Posts: [${createdPost}]`);
    console.log(`Last Activity Time: ${lastActivityTime}`);

        //step 4 Delet last ost
        const deletedPost = await deletePost(createdPost);

        // Step 5: Log the remaining posts after deletion
        console.log(`Remaining Posts: [${deletedPost}]`);

    }catch(error){
        console.error(`Error: ${error.message}`);
    }
}

demo();