import { useEffect, useState } from "react";

const TopItems = () => {

    const [categories, setCategories] = useState([])
    function dataLoading() {
        fetch("https://fakestoreapi.com/products/categories").then((d) => d.json()).then((json) => {
            setCategories(json)
        })
    }
    const [productList, setProductList] = useState([])
    function productLoading() {
        fetch('https://fakestoreapi.com/products?limit=4').then(e => e.json()).then((elements) => {
            setProductList(elements)
           
        })
    }
    useEffect(
        () => {
            dataLoading();
            productLoading();
        }, []);







    return (
        <div>

            <h1 className="text-heading">Top Items</h1>
            {categories === "" ? <p>Loading...</p> : <div className="top-items h-[250px] ">
                <div className="top-items-list">
                    {
                        categories.map(
                            (ele, index) => {
                                return (

                                    <p key={index} className="data"> {ele} </p>


                                )
                            }
                        )

                    }

                </div>

            </div>}

            <h1 className="text-heading">products are featured</h1>

            <div className="product-main">
                {
                    productList.map(
                        (e) => {
                            const { image, title, price } = e;
                            return (
                                <div className="product" >
                                    <div className="imgtest" style={{ width: "100%", height: "10%" }}>
                                        <div className="product-list">
                                            {/* <img src={image}  /> */}
                                            <img src={image} alt={`${title}`} />
                                        </div>
                                    </div>


                                    <div>
                                        <p id="actionsTitle">Iphone: <span className="actionSTitle">{title}</span> </p>
                                        <p id="actionsTitle">Price: <span className="actionSTitle">{price}</span></p>
                                    </div>
                                </div>



                            )
                        }
                    )
                }



<div className="line"></div>
            </div>
            {/*  */}




        </div>




    )

}
export default TopItems