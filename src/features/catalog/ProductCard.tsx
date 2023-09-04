import { CardContent, Button, Card, CardActions, CardMedia, Typography, CardHeader, Avatar } from '@mui/material'
import { IProduct } from '../../app/models/product'
import { Link } from 'react-router-dom'

interface productProps {
    product: IProduct
}

function ProductCard({ product }: productProps) {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx:{fontWeight:"bold", color:"primary.main"}
                }}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: "contain" }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color="secondary" variant="h5">
                    {product.price} Rs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add To Cart</Button>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard