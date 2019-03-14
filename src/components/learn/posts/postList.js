import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../../actions';
//class comment makes us sure to use react lifecycle methods
class PostList extends Component {

//calling our action before render
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList = () => {
    return this.props.posts.map(post => {
      return(
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
        </div>
      )
    });
  }

  render(){

    return(
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
