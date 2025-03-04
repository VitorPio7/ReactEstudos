import { Link, useNavigate,useParams } from 'react-router-dom';
import {useQuery,useMutation} from '@tanstack/react-query';
import { fetchEventById,queryClient,updateEvent } from '../../util/http.js';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
 let {data,isPending}= useQuery({
    queryKey:['events',params.id],
    queryFn:(({signal})=>fetchEventById({signal,id:params.id}))
  })
  const {mutate} = useMutation({
    mutationFn:updateEvent,
    onMutate: async(data)=>{
      const newEvent = data.event;
      await queryClient.cancelQueries({queryKey:['events',params.id]})
      const previousEvent= queryClient.getQueryData(['events',params.id]);
      queryClient.setQueryData(['events',params.id],newEvent);
      return{previousEvent}
    },
    onError:(error,data,context)=>{
       queryClient.setQueryData(['events',params.id],context.previousEvent);
    },
    onSettled:()=>{
      queryClient.invalidateQueries(['events',params.id])
    }
  })
  
  function handleSubmit(formData) {
    mutate({id:params.id,event:formData});
    navigate('../')
  }
  
  function handleClose() {
    navigate('../');
  }
  let content;
  if(isPending){
    content = (
      <div className='center'>
        <LoadingIndicator/>
      </div>
    )
  }
  if(isError){
    content = <>
      <ErrorBlock title="failed to load event" message={error.info?.message||'Failed to load event. Please check your inputs and try again later'}/>
      <Link to="../" className="form-actions">
        Okay
      </Link>
    </>
  }
 if(data){
  <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
 }
  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}
