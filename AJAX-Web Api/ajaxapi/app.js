// fetch('https://swapi.dev/api/people/1')
//     .then((res)=>{
//         if(!res.ok){
//             throw ("Error could not be acces");
//         }
//         return res.json();
//     })


//     .then((data)=>{
//         console.log('JSON 1',data);
//         return fetch('https://swapi.dev/api/people/1')
//     })

//     .then((res)=>{
//         console.log('request 2')
//         if(!res.ok){
//             throw ("Error could not be acces");
//         }
//         return res.json();
//     })

//     .then((data)=>{
//         console.log(data);
//     })


//     .catch((err)=>{
//         console.log('error',err);
//     });


// ini lebih simple daripada kalo pakai then catch

// const LoadPeople = async()=>{
//     try{
//         const res = await fetch('https://swapi.dev/api/people/1')
//         const data = await res.json();
//         console.log(data);
    
    
//         const res2 = await fetch('https://swapi.dev/api/people/2')
//         const data2 = await res2.json();
//         console.log(data2);
//     }catch(error){
//         console.log('ada error',error)
//     }
   
// };


// LoadPeople();


// menggunkan library axios fetch data API
// axios.get('https://swapi.dev/api/people/1').then((res)=>{
//     console.log(res)
//     alert("good")
// })
// .catch((err)=>{
//     alert('Error',err)
//     console.log(err);
// })


const getpeople = async(id)=>{
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data)
    }catch(error){
        console.log(error);
        console.log(error.message);
        console.log(error.response);
    }
}