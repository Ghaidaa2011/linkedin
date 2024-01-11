/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import { getUserAuth } from './redux/actions'
import { connect } from "react-redux";
import {useEffect} from "react";
import RequireAuth from './components/RequireAuth'
function App(props) {
  useEffect(()=> {
    props.getUserAuth()
  },[]);
  return (
    <>
        <div className="app">
          <Router>
            <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/home' element={
                <RequireAuth>
                <Header/>
                <Home/>
                </RequireAuth>
              } />
            </Routes>
          </Router>
        </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
