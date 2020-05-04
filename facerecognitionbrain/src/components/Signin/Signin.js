import React from 'react';

const Signin = ({onRouteChange}) =>{
	return(
		<article className="mw5 center dark-gray br3 pa3 pa4-ns mv4 ba shadow-5 b--black-10">
		  <div action="sign-up_submit" method="get" accept-charset="utf-8">
		    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
		      <legend className="ph0 mh0 fw6 clip">Register</legend>
		      <div className="mt3">
		        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
		        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
		      </div>
		      <div className="mt3">
		        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
		      </div>
		    </fieldset>
		    <div className="mt3">
		    	<input 
			    	onClick={()=>onRouteChange('home')}
			    	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
			    	type="submit" 
			    	value="Sign In"
		    	/>
		    </div>
		    <div className="lh-copy mt3">
		    	<p onClick={()=>onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
		    </div>
		  </div>
		</article>

	);
}

export default Signin;