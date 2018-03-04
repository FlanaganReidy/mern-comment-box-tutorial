import React, {Component} from 'react';
import style from './style';
import marked from 'marked';
class Comment extends Component {
  rawMarkup() {
    //we use dangerouslySetInnerHTML to sanitize our input.
    //sine it is expecting an object, we're safe from most XSS attacks
    let rawMarkup = marked(this.props.children.toString());
    return {__html: rawMarkup};
  }
  render() {
    return (<div style={style.comment}>
      <h3>{this.props.author}</h3>
      <span dangerouslySetInnerHTML={this.rawMarkup()}/>
    </div>)
  }
}
export default Comment;
