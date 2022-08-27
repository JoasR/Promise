const userData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if(error){
                reject("Sorry, something clearly went wrong, Please try again later")
            } else{
                const data = {
                    name: "Joas",
                    lastName: "Röthig",
                    country: "Netherlands",
                    age: 24
                }
                resolve(data);
            }
        }, 3000)
    })
}

userData()
.then(( succes ) => console.log(succes))
.catch(( error ) => console.log(error))