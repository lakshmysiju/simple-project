import React from 'react';
import {useNavigate, Navigate} from 'react-router-dom';
import './ProfilePage.css';
import { useState,useEffect } from 'react';
import ViewBlog from './ViewBlog';
import './Pagination.css'
import { Pagination } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';





function BlogFeed() {
 
  const navigate=useNavigate();
  const [addBlog, setaddBlog] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

  const fetchData=()=>{
      fetch("http://localhost:8080/gellAllBlogs").then(response=> response.json())
          .then((data)=>{
              // let blog=data.results
              setaddBlog(data.reverse())
              // setaddBlog(data.map((data)=> {return <ViewBlog data={data} />}))
              // console.log(data.id)
              // console.log(data.id)
          })
      }

      const list=addBlog.slice(pagesVisited,pagesVisited+usersPerPage).map((data)=> 
       <ViewBlog data={data}/>
      )





      useEffect(()=>{
          fetchData();
      },[])

      const profile=(event)=>{
        event.preventDefault();
        navigate('/user')

      }
   
      const pageCount = Math.ceil(addBlog.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (

    <div >
      <div className='pro-contanier'>

      <h2>Blog Feed</h2>
<button onClick={profile}>Profile

</button>
       

        
       

      
<div></div>
<div></div>
<div></div>

{list}
<div> </div>
</div>
<ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />


    </div>

    
  );
}

export default BlogFeed;
