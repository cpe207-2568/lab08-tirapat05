import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Sidebar } from "./component/Sidebar";
import { Task } from "./component/Task";
import { TaskInput } from "./component/TaskInput";

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>
      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Tirapat" type="student"></Sidebar>

        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <TaskInput></TaskInput>
            {/* Card รายการ */}
            <Task
              id={1}
              title="Read a book"
              description="Vite + React + Bootstrap + TS"
              isDone={true}
            ></Task>
            <Task
              id={2}
              title="Write code"
              description="Finish project for class"
              isDone={true}
            ></Task>
            <Task
              id={3}
              title="Deploy app"
              description="push the project to Github page"
              isDone={true}
            ></Task>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2025" fullName="Tirapat Ruangkling" studentId={670612123}></Footer>
    </div>
  );
}

export default App;
