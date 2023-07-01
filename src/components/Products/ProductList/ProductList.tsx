import {useEffect, useState} from "react";
import {useHttp} from "../../../hooks/use-http";
import {Product} from "../../../models/Product";
import ProductItem from "../ProductItem/ProductItem";

type ProductListProps = {}

const ProductList: React.FC<ProductListProps> = props => {
    const {isLoading, error, sendRequest} = useHttp()
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const getProucts = async () => {
            try {
                const productsData = await sendRequest('https://demo.crehler.dev/store-api/product-listing/e435c9763b0d44fcab67ea1c0fdb3fa0', 'POST', JSON.stringify({}), {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'sw-access-key': 'SWSCMDV3N2DIOUNZTKNNCTBBCW'

                })
                console.log('productsData', productsData)
                const mappedProductsData = productsData.elements.map((p: any) => {
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


    }, [sendRequest])
    return <ul>
        {products.map(p => <ProductItem id={p.id} key={p.id} name={p.name} description={p.description}
                                        price={p.price}/>)}
    </ul>
}

export default ProductList