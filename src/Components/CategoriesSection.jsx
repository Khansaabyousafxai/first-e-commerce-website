import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function CategoriesSection() {

  const [categories, setCategories] = useState()

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/categories`).then(json => 
    {
      console.log(json.data)
      setCategories(json.data)
    }
    )

  }, [])

  return (
    <div className='container'>
      <div className='my-5 text-center'>
        <h1>categories</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nemo.</p>
      </div>
      <div className="row">
        {
          categories?.map((val,key) => 
          <div className="col-md-4 my-3" key={key}>
           <Link className='text-decoration-none' to={`/products/category/${val.name}`}>
           <Card>
              <Card.Body>
                <Card.Title>{key + 1} - {val.name.toUpperCase().replace('-',' ')}</Card.Title>
              </Card.Body>
            </Card>
           </Link>
          </div>
          )
        }

      </div>
    </div>
  )
}