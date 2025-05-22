import Input from "./components/Input";
import Container from "./components/Container";
import Button from "./components/Button";
function App() {
  return <main>
    {/* <Input id="name" label="Your name" type="text"/>
    <Input id="age" label="Your age" type="text"/> */}
    <Container as={Button}/> /*é possivel passar um elemento */
  </main>;
}

export default App;
