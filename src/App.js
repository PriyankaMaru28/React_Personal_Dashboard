import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 5rem 0 5rem;
  margin: 0 auto;
`;

function App() {
  return (
    <div className="App">
      <>
        <Container>
          <UserProfile
            userdetails={{
              name: "Priyanka Maru",
              email: "priyanka.maru@gmail.com",
            }}
          />
          <TodoList />
        </Container>
      </>
    </div>
  );
}

export default App;
