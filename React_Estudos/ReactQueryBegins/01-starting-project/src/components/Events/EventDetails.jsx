import { Link, Outlet } from 'react-router-dom';
import { fetchSelectableImages,fetchEventById } from '../../util/http.js';
import { useQuery } from '@tanstack/react-query';
import Header from '../Header.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import { useParams } from 'react-router';
export default function EventDetails() {
  let page=useParams();
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
  console.log(userQuery.data)
  let search = data?.find((el)=>{
    return el.path === userQuery.data?.image
  })
  console.log(search)

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
            <button>Delete</button>
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
