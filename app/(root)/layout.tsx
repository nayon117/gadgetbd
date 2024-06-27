import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "GadgetBd Store",
    description: "GadgetBd Ecommerce Store",
};

const HomeLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <section className='background-light850_dark100 relative'>
             <ToasterProvider />
            <Navbar />
            <div className='min-h-screen px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
                <div className="mx-auto w-full max-w-screen-xl">
                {children}
                </div>
            </div>
            <Footer/>
        </section>
    )
}
export default HomeLayout;