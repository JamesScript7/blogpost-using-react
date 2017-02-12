import React, { Component } from 'react';
import BlogForm from './BlogForm.jsx';

class BlogPosts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: []
		}

	}

	addNewPost(newPost) {
		var post = this.posts.push(newPost);
		console.log(newPost);

		this.setState({
			posts: post
		});
	}

	render() {
		return (
			<div>
				<h1>Blog it!</h1>
				<BlogForm />
			</div>
		);
	}
}

export default BlogPosts;