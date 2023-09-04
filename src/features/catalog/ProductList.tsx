import { Grid } from '@mui/material'
import { IProduct } from '../../app/models/product'
import ProductCard from './ProductCard'

interface productProps {
    products: IProduct[]
}

function ProductList({ products }: productProps) {
    return (
        <Grid container spacing={4}>
            {products.map((product) => (
                <Grid item xs={3}>
                    <ProductCard key={product.id} product={product} />
                </Grid>

            ))}
        </Grid>
    )
}

export default ProductList