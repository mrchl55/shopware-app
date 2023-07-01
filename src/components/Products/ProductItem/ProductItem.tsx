import {useEffect, useState} from "react";
import {useHttp} from "../../../hooks/use-http";
import {Product} from "../../../models/Product";

type ProductItemProps = Product

const ProductItem: React.FC<ProductItemProps> = props => {
    const {name, description, price} = props
    return <li>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
    </li>
}

export default ProductItem