import React from 'react';

export default  (props)=>{

	return(
		<form id="submitForm" action="/allblogposts" method="POST">
					<p>Title:</p>
					<input type="text" name="blogTitle" />
					<p>Comment:</p>
					<input type="text" name="blogComment" />
					<input type="submit" value="Submit" />
			</form>
	)
}