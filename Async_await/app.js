
// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve('ticket');
//     }, 3000)
// });



// const getPopcorn = promiseWifeBringingTicks.then((t) =>{
//     console.log('wife: I ahve the tickets');
//     console.log('Husband : we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject) => resolve(`${t} popcorn`) );
// });

// const getButter =getPopcorn.then((t) => {
//     console.log('Husband : I have got some popcorns');
//     console.log('Husband : we should go in');
//     console.log('wife: no i need butter');
//     return new Promise((resolve,reject) => resolve(`${t} butter`) );
// });
// getButter.then((t)=> console.log(t))

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');


console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('ticket');
        }, 3000)
    });
    
    const getPopcorn = promiseWifeBringingTicks.then((t) =>{
        return new Promise((resolve,reject) => resolve(`${t} popcorn`) );
    });

    const getButter =getPopcorn.then((t) => {
        return new Promise((resolve,reject) => resolve(`${t} butter`) );
    });

    const getColdDrinks = getButter.then((t) =>{
        return new Promise((resolve,reject) =>
        resolve(`${t} ColdDrinks`)
        );
    });

    const addColdDrinks = getColdDrinks.then((t) =>{
        return new Promise((resolve,reject) =>
        resolve(`${t} Added ColdDrinks`)
        );
    })
    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: I ahve the ${ticket}`);
    console.log('Husband : we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`'Husband : I have got some ${popcorn}`);
    console.log('Husband : we should go in');
    console.log('wife: no i need butter');

    let butter = await getButter;
    
    console.log(`Husband : I have got some ${butter}`);
    console.log('Husband : we should go in');
    console.log('wife: no i need ColdDrinks');
    let ColdDrinks =await getColdDrinks;

    console.log(`Husband : I have Added some ${ColdDrinks}`);
    console.log('Husband : we should go in');
    console.log('wife: Yes Thanks You');
    console.log("We should go in");
    let Add = await addColdDrinks;
    return ticket;
}
preMovie().then((m)=>console.log(m));

console.log('person4: shows ticket');
console.log('person5: shows ticket');