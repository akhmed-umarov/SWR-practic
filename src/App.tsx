import Card from "./Card/Card"
import CreateProduct from "./CreateProduct/CreateProduct"
import ProductList from "./ProductList"

function App() {
  return (
    <div className=" text-red-500 text-3xl flex flex-1 w-screen justify-between">
      <ProductList/>
      <div>
      <Card/>
      <CreateProduct/>
      </div>
    </div>
  )
}

export default App
