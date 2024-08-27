import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import ImageSection from '../Components/imageSection'

export default function ProductPage()
 {
  const { productID } = useParams()
  const [product, setProduct] = useState({})
  const [review, setReview] = useState("")
  const [ratingstar, setratingstar] = useState(0)
  const [productQuantity, setprocutQuantity] = useState(1)


  const submitReview = () => {
    const payload = {
      productID: productID,
      review: review,
      rating: ratingstar
    }
    console.log(payload)

    Swal.fire({
      title: 'successfully submitted!',
      text: 'thanks for reviewing our product',
      icon: 'succes',
      confirmButtonText: 'Continue shopping'
    })

  }


  const ratingChanged = (newRating) => {
    setratingstar(newRating)
  }
 
  

  const addToCart = () => {
    const payload ={

      ...product,
      productQuantity,
      totalprice : product.price*productQuantity
    }
    console.log(payload)

    Swal.fire({
      title: 'Added to Cart!',
      text: 'Check your Cart for check out',
      icon: 'succes',
      confirmButtonText: 'Continue shopping'
    })
  }
   

    useEffect(() => {
      axios.get(`https://dummyjson.com/products/${productID}`).then(json => setProduct(json.data))
    }, [])
console.log(json.data)
    return (
      <div className="container">
        <div className="text-center my-5">
          <h1>{product.title}-{product.price}$</h1>
          <p className="text-secondary">{product.description}</p>
          <div className='d-flex justify-content-center'>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={product.rating}
              color2={'#ffd700'}
            />
          </div>

          <div className="my-3">
            <button className="btn btn-dark mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setprocutQuantity(productQuantity - 1)}>-</button>
            {productQuantity}
            <button className="btn btn-dark mx-3" onClick={() => setprocutQuantity(productQuantity + 1)}>+</button>

          </div>
          <button className='btn btn-dark'onClick={addToCart}>Add to cart</button>
        </div>

        <div className="row">
          <div className="col-md-6">
            {
              product?.images?.length > 0 && <ImageSection images={product.images} />
            }

            { /* {
            product?.images?.map((val, key) =>
              <div key={key}>{val}</div>
            )
          }*/}

          </div>


          <div className="col-md-6">

            <div className="container">

              <div className="container">
                <div className='mb-5'>
                  <h2 className="text-center">Reviews us</h2>
                  <p className="text-secondary text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, iure.</p>

                </div>


                <div>

                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: 100 }}
                      defaultValue={review}
                      onChange={(e) => setReview(e.target.value)}
                    />
                    <label htmlFor="floatingTextarea2">Comments</label>
                  </div>
                  <div className='mt-3'>
                    Rate Us :
                    <div className="d-flex align-itemss-center">
                      <ReactStars
                        count={5}
                        size={24}
                        value={ratingstar}
                        onChange={ratingChanged}
                        color2={'#ffd700'}
                      />
                      <span className='ms-3'>({ratingstar})</span>
                    </div>
                  </div>


                  <button className='my-3 btn btn-dark' onClick={submitReview}>submit review</button>
                </div>






              </div>

            </div>

          </div>
        </div>

      </div>
    )
  }
