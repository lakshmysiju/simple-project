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
  
  let UserInfo=localStorage.getItem("UserInfo")
  UserInfo=JSON.parse(UserInfo)

  ///////////////////////////////like////////////////////////////
  console.log(UserInfo.id)

  function like(){


        // let creatorid=list.creatorid
        // let creator=list.creator
        // let heading=list.heading 
        // let readme=list.readme
        // let content=list.content
        let like=props.data.like
         let user=UserInfo.id
          //  let send={creatorid,creator,heading,readme,content,like,user}
           let send={like,user}


           if( props.data.likeduser!=null && props.data.likeduser.includes(UserInfo.id) ===false){
            
          //   // alert("likeing")
          //   // setSty("rgb(36, 244, 91)")

            fetch(`http://localhost:8080/updatelike/${props.data.id}`, {
                method: "PUT", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(send)
            })
            .then(res => res.text())
            .then((data) => {console.log(data);})
        }
    }


/////////////////////////////////////////////////////////////////

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const [b,setB]=React.useState([])
  const data= b.slice(pagesVisited, pagesVisited + usersPerPage).map((data,index)=>
    
  <BlogFeed data={data} key={index} />
     
    )
    const pageCount = Math.ceil(b.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

        const [likes, setLikes] = useState(0);
        const [isClicked, setIsClicked] = useState(false);
      
        const handleClick = (event) => {
          console.log(props.data.id)
          
          fetch(`http://localhost:8080/likes/${props.data.id}`)
          .then(response=> response.text())
          .then((data)=>{
              let blog=data.results
              console.log(data)
             
              
          })
          // if (isClicked) {
          //   setLikes(likes - 1);
          // } else {
          //   setLikes(likes + 1);
          // }
          // setIsClicked(!isClicked);
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
     
        
    <button className={ `like-button` } onClick={ like }>
      Like <span>{props.data.like}</span>
    </button>

    

 
    </div>
    
    </div>


</div>
    
  )
}

export default ViewBlog;