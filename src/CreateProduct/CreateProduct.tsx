import { useState } from "react";
import { useSWRConfig } from "swr";
import { fetcher } from "../helper/fetcher";
import { ProductItemType } from "../ProductList";
const CreateProduct = () => {
    const [name , setName ] = useState("");
    const [age , setAge ] = useState("");
    const [id , setId] = useState("10");
    const { mutate } = useSWRConfig(); 

    const createProduct = ({id , name , age}: ProductItemType)=>{ 
        setId(String(Math.round(Math.random()*5+Math.random()*12 + Math.random()*30)))
        mutate('http://localhost:8080/products' , fetcher('http://localhost:8080/products' , { 
           method: 'POST', 
           headers: {"Content-type": "application/json"},
           body: JSON.stringify({id , name , age}) 
        }))
        setName(''); 
        setAge('');
        setId(()=>String(Math.round(Number(id)*Math.random()*5+Math.random()*12 + Math.random()*30)))
    }
    return (
        <div>
            <h1>Создайте новый продукт</h1>
            <input type="text" id="name" onChange={(el)=>{setName(el.target.value)}} placeholder="Введите имя" value={name}/>
            <input type="text" id="age" placeholder="Введите возраст" value={age} 
            onChange={(el)=>{ setAge(el.target.value)}}/>
            <button onClick={()=>createProduct({id, name , age})}>Cоздать</button>
        </div>
    );
};

export default CreateProduct;