import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewServices from './Pages/AddNewServices/AddNewServices';
import Home from './Pages/Home/Home';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';
import LogIn from './Pages/LogIn/LogIn'
import Register from './Pages/Register/Register'
import Error from './Pages/Error/Error'
import Header from './Components/Header/Header';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import MyOrders from './Components/MyOrders/MyOrders';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivetRoute path='/manageorder'>
              <ManageAllOrder></ManageAllOrder>
            </PrivetRoute>
            <PrivetRoute path='/order'>
              <MyOrders></MyOrders>
            </PrivetRoute>
            <Route path='/newservice'>
              <AddNewServices></AddNewServices>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
