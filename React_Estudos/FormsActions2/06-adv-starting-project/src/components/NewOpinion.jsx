import { useActionState } from "react";

function formFunction(prevValue, formData) {
  let userName = formData.get("userName");
  let title = formData.get("title");
  let body = formData.get("body");
  let error = [];
  if (!userName) {
    error.push("You've to put your username.");
  }
  if (!title) {
    error.push("You've to put a title.");
  }
  if (!body) {
    error.push("You've to put a body.");
  }
  if (error.length > 0) {
    return {
      error,
      enteredValues: {
        userName,
        title,
        body,
      },
    };
  }
  return { err: null };
}

export function NewOpinion() {
  let [currentState, formAction] = useActionState(formFunction, { err: null });
  console.log(currentState);
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={currentState.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={currentState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={currentState.enteredValues?.body}
          ></textarea>
        </p>

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
        {currentState.error && (
          <ul>
            {currentState.error.map((el) => {
              return <li key={el}>{el}</li>;
            })}
          </ul>
        )}
      </form>
    </div>
  );
}
