import {useEffect, useState, useContext} from "react";
import {useHttp} from "../../../hooks/use-http";
import {Product} from "../../../models/Product";
import ProductItem from "../ProductItem/ProductItem";
import {SearchContext} from "../../../App";
import Spinner from 'react-bootstrap/Spinner';

type ProductListProps = {}

const ProductList: React.FC<ProductListProps> = props => {
    const {searchQuery, sortBy} = useContext(SearchContext)
    const {isLoading, error, sendRequest} = useHttp()
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const getProucts = async () => {
            let queryURI = 'product-listing/e435c9763b0d44fcab67ea1c0fdb3fa0'
            let queryBody: {
                order?: string,
                search?: string
            } = {
                order: sortBy,
            }
            if (searchQuery?.length) {
                queryURI = 'search'
                queryBody = {
                    ...queryBody,
                    search: searchQuery,
                }
            }
            try {
                const productsData = await sendRequest(`https://demo.crehler.dev/store-api/${queryURI}`, 'POST', JSON.stringify(queryBody), {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'sw-access-key': 'SWSCMDV3N2DIOUNZTKNNCTBBCW'

                })
                const mappedProductsData = await productsData.elements.map((p: any) => {
                    return {
                        id: p.id,
                        name: p.name || p.translated.name,
                        description: p.description || p.translated.description,
                        price: p.calculatedPrice.unitPrice

                    }
                })
                setProducts(mappedProductsData)
            } catch (err: any) {
                console.log(err)
            }
        }
        getProucts()

    }, [sendRequest, searchQuery, sortBy])
    if (isLoading) {
        return <div className='d-flex justify-content-center'><Spinner/></div>
    }
    if (error) {
        return <p className='d-flex justify-content-center'>Error occured</p>
    }
    if (!products?.length) {
        return <p className='d-flex justify-content-center'>No products found</p>
    }

    return <div className='row'>
        {products.map(p => <ProductItem id={p.id} key={p.id} name={p.name} description={p.description}
                                        price={p.price}/>)}
    </div>
}

export default ProductList