import React from 'react';
import { useEffect,useState } from 'react';
import { Pagination } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import BlogFeed from './BlogFeed';


import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function ViewBlog(props) {
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const [b,setB]=React.useState([])
  const data= b.slice(pagesVisited, pagesVisited + usersPerPage).map((data,index)=>
    
  <BlogFeed data={data} key={index}  />
     
    )
    const pageCount = Math.ceil(b.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
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

    

 
    </div>
    
    </div>


</div>
    
  )
}

export default ViewBlog;