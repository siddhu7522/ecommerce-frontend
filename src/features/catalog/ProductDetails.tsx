import { Grid, Typography, Divider, TableContainer, Table, TableBody, TableCell, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../../app/models/product'
import agent from '../../app/api/agent'
import NotFound from '../../app/errors/NotFound'
import LoadingComponent from '../../app/layout/LoadingComponent'

function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<IProduct | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    id && agent.Catalog.details(parseInt(id))
      .then(res => setProduct(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
   return(
    <LoadingComponent message= "Loading Product.."/>
   )
  }
  return (
    <Grid container spacing={6}>
      {product ? (
        <>
          <Grid item xs={6}>
            <img src={product.pictureUrl} style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3">{product.name}</Typography>
            <Divider sx={{mb:2}}/>
            <Typography variant="h4" color="secondary">{product.price} Rs</Typography>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>{product.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>{product.type}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Brand</TableCell>
                    <TableCell>{product.brand}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Quantity in Stock</TableCell>
                    <TableCell>{product.quantityInStock}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </>
      ) : (
        <NotFound/>
      )
      }
    </Grid>
  )
}

export default ProductDetails