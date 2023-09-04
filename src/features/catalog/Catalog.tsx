import React ,{useState, useEffect} from 'react'
import { IProduct } from '../../app/models/product'
import ProductList from './ProductList'
import agent from '../../app/api/agent'
import LoadingComponent from '../../app/layout/LoadingComponent'


function Catalog() {
    const [products, setProducts] = useState<IProduct[]>([])
    const[loading, setLoading]=useState(true)
  useEffect(() => {
   agent.Catalog.list().then(products=>setProducts(products))
   .catch(error=>console.log(error))
   .finally(()=>setLoading(false))

  }, [])
  if(loading){
    return(
      <LoadingComponent message= "Loading Products ...."/>
    )
  }
    return (
        <>
           <ProductList products={products}/>
        </>
    )
    
}

export default Catalog