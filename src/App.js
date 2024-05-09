import './App.css';
import TodoForm from './components/TodoForm';
import { Main } from './pages/main/main';

import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoApp from '.compoents/tdapp';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/main"/>}>
        </Route>
        <Route exact path="/main" element={<Main/>}>
        </Route>
        <Route exact path="/components" element={<TodoForm/>}>
        </Route>
        <Route exact path="/components" element={<TodoList/>}>
        </Route>
        <Route exact path="/components" element={<TodoApp/>}>
        </Route>
       </Routes>
    </Router>
  );




}
export default App;
