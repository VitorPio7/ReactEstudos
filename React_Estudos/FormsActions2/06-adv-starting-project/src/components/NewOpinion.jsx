import { useActionState, use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {
  let [currentState, formAction, pending] = useActionState(formFunction, {
    err: null,
  });
  const { addOpinion } = use(OpinionsContext);
  async function formFunction(prevValue, formData) {
    let userName = formData.get("userName");
    let title = formData.get("title");
    let body = formData.get("body");
    let error = [];
    if (title.trim().length < 5) {
      error.push("Title must be at least five characters long.");
    }
    if (body.trim().length < 10) {
      error.push("Opinion must be between 10 and 300 characters long");
    }
    if (!userName.trim()) {
      error.push("Please provide your name.");
    }
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
    await addOpinion({ title, body, userName });
    return { err: null };
  }
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

        {currentState.error && (
          <ul>
            {currentState.error.map((el) => {
              return <li key={el}>{el}</li>;
            })}
          </ul>
        )}
        <Submit />
      </form>
    </div>
  );
}
