import { useSWRConfig } from "swr";
import { ProductItemType } from "../ProductList";
import { fetcher } from "../helper/fetcher";

const ProductItem = ({id , name , age}: ProductItemType) => {
    const {mutate} = useSWRConfig()

    const handlerAddCard = ()=>{ 
        mutate('http://localhost:8080/card' , fetcher('http://localhost:8080/card' , { 
           method: 'POST', 
           headers: {"Content-type": "application/json"},
           body: JSON.stringify({id , name , age}) 
        }))
    }

    const deleteProduct = (id: string)=>{ 
        mutate('http://localhost:8080/products' , fetcher(`http://localhost:8080/products/${id}`, {headers: {"Content-type": "application/json"},  method: 'DELETE'}))
        mutate('http://localhost:8080/card' , fetcher(`http://localhost:8080/card/${id}`, {headers: {"Content-type": "application/json"},  method: 'DELETE'}))
    }

    return (
        <div className=" my-20 bg-cyan-100 border-2 border-black w-1/2">
        <h1> My name {name}</h1>
        <h2> Mne {age} let</h2>
        <button onClick={handlerAddCard}> buy {name}</button>
        <button onClick={()=>deleteProduct(id)}>Delete me</button>
    </div>
    );
};

export default ProductItem;