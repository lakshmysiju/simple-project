import React from 'react';
import { useEffect,useState } from 'react';
import { Pagination } from 'react-bootstrap';


import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function AdminViewdetails(props) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        const [likes, setLikes] = useState(0);
        const [isClicked, setIsClicked] = useState(false);
      
        const handleClick = () => {
          if (isClicked) {
            setLikes(likes - 1);
          } else {
            setLikes(likes + 1);
          }
          setIsClicked(!isClicked);
        };
    

  return (
    <div>
        <div style={{ display: 'block', padding: 30 }}>
       <MDBCard>
      {/* <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' /> */}
      <MDBCardBody>
        <MDBCardTitle><h2>{props.data.title}</h2></MDBCardTitle>
        <p className='card-text'><i>{props.data.bid}</i></p>

        <MDBCardText>posted by {props.data.authorName} on {date}</MDBCardText>   
       
        <MDBCardText>
        {props.data.content}
        </MDBCardText>
        {/* <MDBBtn href='#'>Button</MDBBtn> */}
      </MDBCardBody>
    </MDBCard>
     
        
    <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
      <span className="likes-counter">{ `Like | ${likes}` }</span>
    </button>

    

      <Pagination count={2} />
    </div>
    </div>
  )
}

export default AdminViewdetails;