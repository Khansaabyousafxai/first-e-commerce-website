import React from 'react'

export default function HeaderSection() {
    return (
        <>
            <div className="bg-dark">
            <div style={{width: '100vw' , height: '100vh'}}className="d-flex justify-content-center align-items-center">
                <div>
                   <img className='img-fluid' src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg" alt="" srcset="" />
                </div>
                <div className="container">
                    <h1 className="text-white">
                        Abdullah hun yar
                    </h1>
                    <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit sed atque quo omnis odit cupiditate doloremque voluptates iste facere?
                    </p>
                </div>

            </div>
            </div>
        </>
    )
}
