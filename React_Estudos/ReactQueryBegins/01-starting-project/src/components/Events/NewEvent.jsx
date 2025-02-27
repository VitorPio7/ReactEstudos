import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { createNewEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
export default function NewEvent() {
  const navigate = useNavigate();
   const {mutate,isPending,isError,error} = useMutation({
    mutationFn: createNewEvent
  })
  function handleSubmit(formData) {
    mutate({event:formData})
  }

  return (
    <Modal onClose={() => navigate('../')}>
      {isPending && <p>Creating event...</p>}
      <EventForm onSubmit={handleSubmit}>
        <>
          <Link to="../" className="button-text" disable={!isPending} >
            Cancel
          </Link>
          <button type="submit" className="button"  disable={!isPending} >
            Create
          </button>
        </>
      </EventForm>
      {isError && <ErrorBlock title="An error occurred" 
      message={error.info?.message||'Failed to create event.'} />}
    </Modal>
  );
}
