import './Product_section.css';
import Product_card from './Product_card';
import { products_list } from './data';

function Product_section() {

    const new_product_list = products_list.filter((product)=>{
        if(product.code === "new_arrival") {
            return product;
        }}).map((product)=>{
        return (
            <Product_card item={product} />
        );
    })

    return (
        <>
        <div className='section_heading'>
            <h1>{"Feature Products"}</h1>
            <h3>{"Summer collections New Modern Design"}</h3>
        </div>
        <div className="product_gallery">
            {new_product_list}
           
        </div>
        </>
        
    );
}

export default Product_section;