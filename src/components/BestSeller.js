import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { apiGetProducts } from "../apis/product";
// import required modules
import { Autoplay, Navigation, Grid, Pagination } from "swiper/modules";
import CardProduct from "./CardProduct";
const tabs = [
    { id: 1, name: "Best Seller" },
    { id: 2, name: "New Arrivals" },
];

const BestSeller = () => {
    const [bestSellers, setBestSellers] = useState(null);
    const [newProducts, setNewProducts] = useState(null);
    const [activedTab, setActivedTab] = useState(1);
    const [products, setProducts] = useState(null);
    const fetchProducts = async () => {
        const response = await Promise.all([
            apiGetProducts({ sort: "-sold" }),
            apiGetProducts({ sort: "-createdAt" }),
        ]);
        if (response[0]?.success) {
            setBestSellers(response[0].products);
            setProducts(response[0].products);
            console.log(response, "success");
        }
        if (response[1]?.success) setNewProducts(response[1].products);
        setProducts(response[0].products);
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    useEffect(() => {
        if (activedTab === 1) setProducts(bestSellers);
        if (activedTab === 2) setProducts(newProducts);
    }, [activedTab]);
    return (
        <Fragment>
            <div className="flex flex-1 items-center justify-between w-full">
                <p className="text-base leading-6 text-[#4A5568]">
                    Don't miss this opportunity at a special discount just for
                    this week.
                </p>
                {/* Tab */}
                <div className="flex items-center gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`text-sm capitalize flex px-3 py-2 items-center justify-center  border-[1.5px] border-solid border-[#0DA487] rounded-full text-[#0DA487] hover:bg-[#0DA487] hover:text-white transition duration-300 ${
                                activedTab === tab.id
                                    ? "bg-[#0DA487] text-white"
                                    : ""
                            }`}
                            onClick={() => setActivedTab(tab.id)}
                            // onClick={(event) => {
                            //     console.log("Click event:", event);
                            //     console.log("Tab ID:", tab.id);
                            //     setActivedTab(tab.id);
                            // }}

                            // debug console.log onclick
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-[975px] 2xl:w-[1188px] border border-solid border-[rgba(74, 85, 104, 0.30)] rounded-[10px]">
                <Swiper
                    slidesPerView={3}
                    grid={{
                        rows: 2,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Grid, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {products?.map((product) => (
                        <SwiperSlide>
                            <CardProduct
                                key={product.id}
                                productData={product}
                                isNew={activedTab === 1 ? false : true}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Fragment>
    );
};

export default BestSeller;
