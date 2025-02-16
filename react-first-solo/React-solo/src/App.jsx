import "./App.css";
import UserForm from "./components/Form";
import ProgressBar from "./components/Progress-Bar";
import { HideTitel } from "./components/React-Challenge-1";
import TodooList from "./components/React-Challenge-2";
export default function App() {
  return (
    <section className="User">
      <UserForm />
      <HideTitel Title={"Hello world"} />
      <TodooList/>
      <ProgressBar/>
    </section>
  );
}
