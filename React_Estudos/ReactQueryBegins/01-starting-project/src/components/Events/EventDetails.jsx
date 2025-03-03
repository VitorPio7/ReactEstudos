import { Link, Outlet } from 'react-router-dom';
import { fetchSelectableImages,fetchEventById } from '../../util/http.js';
import { useQuery, useMutation } from '@tanstack/react-query';
import Header from '../Header.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useNavigate, useParams } from 'react-router';
import {deleteEvent} from '../../util/http.js';
import { queryClient } from '../../util/http.js';
export default function EventDetails() {
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
      queryClient.invalidateQueries({queryKey:['events']})
      navigate('/events')
    }
  })
  console.log(userQuery.data)
  let search = data?.find((el)=>{
    return el.path === userQuery.data?.image
  })

  function handleDelite() {
    deleteMutation.mutate({id:term})
  }
  if(isError){
    return <ErrorBlock title="Failed to load event" error={error.info?.message|| 'Failed to fetch event data, please try again later.'} />
  }
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {userQuery.isLoading && data?<LoadingIndicator/>:<article id="event-details">
        <header>
          <h1>{userQuery.data?.title}</h1>
          <nav>
            <button onClick={handleDelite} disabled={deleteMutation.isPending} >{deleteMutation.isPending?"Deleting...":"Delete"}</button>
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
      </article>}
      
    </>
  );
}
