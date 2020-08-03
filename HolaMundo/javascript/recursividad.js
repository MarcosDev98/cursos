
/**
 * RECURSIVIDAD!!!
 * 
 * las funciones recursivas se llaman a si mismas una y 
 * otra vez hasta que se cumple una condicion especifica.
 * 
 */


/* const conteoRegresivo = (a) =>{

if (a<0) return
console.log(a)
return conteoRegresivo(a-1)
}

conteoRegresivo(10)
 */
/* import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios'; */


const axios = require('axios');



const llamarApi = async (url, llamados = 0) => {
    try{
        const {data} = await axios.get(url)

        console.log(data)
        return data
    } catch(e){
        if (llamados > 5){
            return ''
        }

        console.log(e);
        return llamarApi(url, llamados + 1)
    }    
}

llamarApi('https://jsonplaceholder.typicode.com/users')
