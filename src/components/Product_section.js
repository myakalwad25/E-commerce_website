import './Product_section.css';
import ProductCard from './ProductCard';
import { products_list } from './data';

function Product_section(props) {

    const new_product_list = products_list.filter((product)=>{
        if(product.code === props.filter) {
            return product;
        }}).map((product)=>{
        return (
            <ProductCard key={product.key} item={product} />
        );
    })

    return (
        <>
        <div className='section_heading'>
            <h1>{props.heading}</h1>
            <h3>{props.subheading}</h3>
        </div>
        <div className="product_gallery">
            {new_product_list}
           
        </div>
        </>
        
    );
}

export default Product_section;