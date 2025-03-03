import { Link, Outlet } from 'react-router-dom';
import { fetchSelectableImages,fetchEventById } from '../../util/http.js';
import { useQuery, useMutation } from '@tanstack/react-query';
import Header from '../Header.jsx';
import { useState } from 'react';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useNavigate, useParams } from 'react-router';
import {deleteEvent} from '../../util/http.js';
import { queryClient } from '../../util/http.js';
import Modal from '../UI/Modal.jsx'
export default function EventDetails() {
  const [isDeleting,setIsDeleting] = useState(false);

  let page=useParams();
  let navigate = useNavigate()

  let term = page.id;
  console.log(term)
  const {data,isPending,isLoading,isError,error} = useQuery({
    queryKey:['selectableImages'],
    queryFn:({signal})=>fetchSelectableImages({signal}),
  })
  const userQuery = useQuery({
    queryKey:['catchEvent',{term}],
    queryFn:({signal})=>fetchEventById({signal,term}),
    staleTime:5000,
    gcTime:1000
  })
  const deleteMutation = useMutation({
    mutationFn:deleteEvent,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['events'],refetchType:'none'})
      navigate('/events')
    }
  })
  let search = data?.find((el)=>{
    return el.path === userQuery.data?.image
  })
  function handleStartDelite(){
    setIsDeleting(true)
  }
  function handleStopDelete(){
    setIsDeleting(false)
  }

  function handleDelite() {
    deleteMutation.mutate({id:term})
  }
  let content;

  if(isError){
    return  <div id="event-details-content" className="center">
    <ErrorBlock
      title="Failed to load event"
      message={
        error.info?.message ||'Failed to fetch event data, please try again later.'
      }
    />
  </div>
  }
  content = (
   <>
    <header>
      <h1>{userQuery.data?.title}</h1>
      <nav>
        <button onClick={handleStartDelite} disabled={deleteMutation.isPending} >Delete</button>
        <Link to="edit">Edit</Link>
      </nav>
    </header>
   
    <div id="event-details-content">
      <img src={`http://localhost:3000/${search?.path}`} alt={search?.caption} />
      <div id="event-details-info">
        <div>
          <p id="event-details-location">{userQuery.data?.location}</p>
          <time dateTime={`Todo-DateT$Todo-Time`}>{userQuery.data?.time}</time>
        </div>
        <p id="event-details-description">{userQuery.data?.description}</p>
      </div>
    </div>
    </>

  )
  return (
    <>
      <Outlet />
      {isDeleting&& <Modal onClose={handleStopDelete}>
         <h2>Are you sure?</h2>
         <p>Do you really want do delete this event? This action cannot undone.</p>
         <div className='form-actions'>
            <button onClick={handleStopDelete} className='button-text'>Cancel</button>
            <button onClick={handleDelite} className='button'>{deleteMutation.isPending?"Deleting...":"Delete"}</button>
         </div>
         {deleteMutation.isError && (
             <ErrorBlock
             title="Failed to delete event"
             message={
               deleteError.info?.message ||
               'Failed to delete event, please try again later.'
             }
           />
         )}
       </Modal>}
       
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
      
    </>
  );
}
