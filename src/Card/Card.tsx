import useSWR from "swr";
import { fetcher } from "../helper/fetcher";
import { ProductItemType } from "../ProductList";

const Card = () => {
    const {data , error , mutate} = useSWR<ProductItemType[]>('http://localhost:8080/card' , fetcher);

    return (
        <div className=" w-1/3 ">
            {!data && !error && <p>Loading...</p>}
            {data && data.length > 0 ? ( 
                data.map(({id , name ,  age})=>( 
                    <div key={id} className=' mt-10 border-2 bg-red-300'>
                    <h1>{name}</h1>
                    <h2>{age} age</h2>
                    <button onClick={async ()=>{ 
                        await mutate(fetcher(`http://localhost:8080/card/${id}` , {method: 'DELETE'}))
                    }}>Delete {id}</button>
                    </div>
                ))
            ) : ( 
                <p>Пусто</p>
            )}
        </div>
    );
};

export default Card;