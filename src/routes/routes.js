import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import Home from '../pages/dashboard/home'
import Create from '../pages/dashboard/create'
import Update from '../pages/dashboard/update'
import Index from '../pages/dashboard/list'
import Login from '../pages/login'
import Homepage from '../pages/home'

export default function Routes () {

	return (
		<Router> 
  			<Switch>
		 		<Route path="/dashboard/create/instituicao">
		 			<Create />
		 		</Route>
		 		<Route path="/dashboard/create/question">
		 			<Create />
		 		</Route>
			    <Route path="/dashboard/create/post">
			       <Create />
			     </Route>
			    <Route path="/dashboard/update/question/:id">
			       <Update />
			    </Route>
				<Route path="/dashboard/update/post/:id">
				    <Update />
				</Route>
		   		<Route path="/dashboard/update/instituicao/:id">
		     		<Update />
		   		</Route>
		   		<Route path="/dashboard/instituicoes">
		     		<Index />
		   		</Route>
		   		<Route path="/dashboard/questions">
		     		<Index />
		   		</Route>
		   		<Route path="/dashboard/posts">
		     		<Index />
		   		</Route>
		   		<Route path="/dashboard/students">
		     		<Index />
		   		</Route>
		     	<Route path="/login">
		       		<Login />
		     	</Route>
		     	<Route path="/">
		       		<Homepage />
		     	</Route>
		 		<Route path="/dashboard/">
	 				<Home />
	 			</Route>
  			</Switch>	
		</Router>
	);
}