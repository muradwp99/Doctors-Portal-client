import React from 'react';
import clock from '../../assets/icons/clock.svg'

const Info = () => {
    return (
        <div>
            <div className="container">
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={clock} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;