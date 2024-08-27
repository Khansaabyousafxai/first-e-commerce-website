import React from 'react'

export default function HeaderSection() {
    return (
        <>
            <div className="bg-dark">
            <div style={{width: '100vw' , height: '100vh'}}className="d-flex justify-content-center align-items-center">
                <div>
                   <img className='img-fluid' src="https://cdn.dribbble.com/userupload/6630453/file/original-e8c864a9462d4120ed1c07b279cbd969.png?resize=320x240&vertical=center" alt="" srcset="" />
                </div>
                <div className="container">
                    <h1 className="text-white">
                        Shoping for everyone
                    </h1>
                    <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorem libero consectetur saepe blanditiis. Quod consequuntur illum aliquid veniam harum placeat pariatur, quas perferendis adipisci officiis nisi, fugiat excepturi numquam sit deserunt mollitia quasi? Labore aliquam molestiae consequuntur doloribus ratione!
                    </p>
                </div>

            </div>
            </div>
        </>
    )
}
