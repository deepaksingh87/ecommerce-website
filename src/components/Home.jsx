import React from 'react';
import ProductDetail from '../product-detail/ProductDetail';
import {CardBody,CardTitle,CardSubtitle,CardText,Card,CardLink} from 'reactstrap';
import './Home.css'
export default function Home() {

    return (
      <>
      <h1>To sell the product in suitable prices</h1>
       <div>
          { ProductDetail.map((value)=>
      <Card width="25%" style={{border:"1px solid black",display:"flex",flexDirection:"row",width:"25%",display:"inline-block",margin:"20px",borderRadius:"10px",backgroundColor:"white"}}>
        <CardBody>
        <img width="100%" height="200px" src={value.image} alt="Card image cap" />
          <CardTitle tag="h3">{value.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{value.category.name}</CardSubtitle>
        </CardBody>
        <CardBody>
            <h1>price ${value.price}</h1>
          <CardText>{value.description}</CardText>
          <CardLink href={value.url} style={{color:"blue",marginLeft:"30px"}}>enter Link</CardLink>
          <CardLink href={value.url} style={{color:"blue",marginLeft:"20px"}}>Another Link</CardLink>
        </CardBody>
      </Card>)}
    </div>
      </>

    )
}


