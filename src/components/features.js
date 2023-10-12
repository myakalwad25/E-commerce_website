import {features } from "./data.js";



function   Features() {
    
   
    const feature_list = features.map((feature) => {
        return (
            <li key={feature.key}>
                <div className="fea_box ">
                    <div className="fea_img"><img src={feature.featur_img}></img> </div>
                    <div className="fea_text">{feature.features_name}</div>   
                </div>
            </li>
            

        );
    })

    return (
       <section className="features_container">
        <ul>
           { feature_list}
        </ul>
       </section>
    );
}

export default Features;