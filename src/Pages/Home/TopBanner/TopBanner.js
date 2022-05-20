import React from 'react';
import chair from '../../../assets/images/chair.png';
import '../TopBanner/TopBanner.css';

const TopBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-xl w-15 rounded-lg shadow-xl" />
                    <div className="mx-5">
                        <h1 className="text-[#3A4256] text-4xl font-bold">Your New Smile Starts <span><br /> Here</span></h1>
                        <p className="py-4 text-[#3A4256] text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-none text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;