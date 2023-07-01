import {Product} from "../../../models/Product";
import Card from "../../UI/Card/Card";

type ProductItemProps = Product

const ProductItem: React.FC<ProductItemProps> = props => {
    const {name, description, price} = props
    return (<Card classes='col-lg-4 d-flex flex-column p-4'>
        <>
            <div><b>{name}</b></div>
            <div className='my-2'>{description}</div>
            <div className='d-flex justify-content-between'><span>Cena:</span> <b>{price}</b></div>
        </>
    </Card>)
}

export default ProductItem