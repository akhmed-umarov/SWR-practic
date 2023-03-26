import useSWR from 'swr';
import { fetcher } from '../helper/fetcher';
import ProductItem from '../ProductItem/ProductItem';

export interface ProductItemType {
id: string, 
name: string,
age: string
}

const ProductList = () => {
    const { data , error } = useSWR<ProductItemType[]>('http://localhost:8080/products' , fetcher);


    return (
        <div className=' w-full'>
            {!data && !error && <p>Loading...</p>}
            {data && data.length > 0  ? (
                <div>
                    {data.length === 0 ? ( <p>Нет элементов</p> ) : (
                        data.map((product , index)=>( 
                            <ProductItem {...product} key={index} />
                        ))
                    )}
                </div>
            ) : ( 
                <div>
                    <h1>Somebody wrong...</h1>
                </div>
            )}
        </div>
    );
};

export default ProductList;