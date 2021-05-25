import './App.css';
import FolderStructure from './Component/FolderStructure/FolderStructure';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddFolder from './Component/AddFolder/AddFolder';
import DeleteFolder from './Component/DeleteFolder/DeleteFolder';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/folderStructure'>
            <FolderStructure />
          </Route>

          <Route path='/addFolder'>
              <AddFolder />
          </Route>
          
          <Route path='/deleteFolder/:id'>
              <DeleteFolder />
          </Route>
{/* 
          <Route path='/addFolder/:id'>
              <NestedFolder />
          </Route> */}

          <Route exact path='/'>
            <FolderStructure />
          </Route>



        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
