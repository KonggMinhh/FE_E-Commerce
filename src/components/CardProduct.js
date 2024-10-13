import React from "react";

const CardProduct = ({productData}) => {
    return (
        <article>
            <img src={productData?.images[0] || ""} alt="" />
        </article>
    );
};

export default CardProduct;
