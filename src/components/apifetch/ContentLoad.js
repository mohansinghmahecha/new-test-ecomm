import { useState } from "react";
import Card from "./Card";
import "./Card.css"


export default function ContentLoad(props) {
    const { newdata } = props;
    const [datapass, setDataPass] = useState([]);
    const [hasLoadedInitialData, setHasLoadedInitialData] = useState(false); 
    const productsPerPage = 4;

    function loadMore() {
       
        let nextIndex = hasLoadedInitialData ? datapass.length : 0;

        // Determine the slice of new data to show based on the next index
        const nextProductsToShow = newdata.slice(nextIndex, nextIndex + productsPerPage);

        // Update datapass with new products
        setDataPass(prev => [...prev, ...nextProductsToShow]);
        // for changes only : setDataPass(nextProductsToShow);

        // Ensure we mark that initial data has been loaded
        if (!hasLoadedInitialData) {
            setHasLoadedInitialData(true);
        }
    }

    return (
        <div  className="main">
           
            {hasLoadedInitialData && datapass.map((product, index) => (
                <div key={index}><Card nTitle={product.title} nImage={product.image} nPrice={product.price} />
                    {/* <p>{product.title}</p>
                    <p>{product.price}</p> */}
                </div>
            ))}
            <div className="btn">
            <button  onClick={loadMore}>Load More</button>

            </div>
        </div>
    );
}
