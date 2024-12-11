import axios from './axios_client'

export default async function product() {

    return axios.get('products?&select=title,price,thumbnail,description,category,discountPercentage,stock',
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
).then((res) => {
        return res
    }).catch((err) =>{
        console.error(err)
    })
    
}