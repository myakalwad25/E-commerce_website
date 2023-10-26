import Hero from "./Hero";
import Features from "./features";
import Product_section from "./Product_section";
import { createContext, useState } from "react";
import { cart_list } from "./data";



export default function Home() {
    
    return (

        <div >
            <Hero/>
            <Features/>
            <Product_section heading ={'Feature Products'} subheadin={'Summer collections New Modern Design'} filter={'new_arrival'}/>
        </div>
    );
}