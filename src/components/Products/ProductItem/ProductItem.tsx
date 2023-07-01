import {useEffect, useState} from "react";
import {useHttp} from "../../../hooks/use-http";
import {Product} from "../../../models/Product";
import Card from "../../UI/Card/Card";

type ProductItemProps = Product

const ProductItem: React.FC<ProductItemProps> = props => {
    const {name, description, price} = props
    return (<Card classes='col-lg-4 d-flex flex-column'>
        <>
            <div>{name}</div>
            <div>{description}</div>
            <div>Cena: {price}</div>
        </>
    </Card>)
}

export default ProductItem