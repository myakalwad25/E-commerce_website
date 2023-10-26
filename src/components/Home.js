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
            <Product_section/>
        </div>
    );
}