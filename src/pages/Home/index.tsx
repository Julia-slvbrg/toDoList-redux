import AddBtn from "../../components/AddBtn"
import AsideContent from "../../container/AsideContent"
import ToDoList from "../../container/ToDoList"

const Home = () => (
  <>
    <AsideContent showFilter />
    <ToDoList />
    <AddBtn />
  </>
)

export default Home
