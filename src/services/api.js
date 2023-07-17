import axios from 'axios';
import { config } from './config';

let token = ""
let bearerToken = {
    headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem("token")
    }
}

if (sessionStorage.getItem("token") !== null) {
    token = bearerToken
} else {
    token = token
}


export const getListAgent = async () => {
    const data = await axios.get(`${config.baseURL}/agent`)
    return data
};

export const deleteAgent = async (id) => {
    const data = await axios.delete(`${config.baseURL}/agent/${id}`)
    return data
};


export const postAgent = async (params) => {
    let data
    await axios.post(`${config.baseURL}/agent`, params).then((res) => {
        data = res.data
    }).catch((err) => {
        data = err.response.data
    })
    return data
};



export const getProductList = async (data) => {
    console.log(data,"ini data di api");
    const productList = await axios.get(`https://indomine-cms.cranium.id/api/search-product/${data}`)
    return productList
};