import React from "react";
import { RootState } from "../../store";
//import {createStore} from 'react-redux';
import { saveComment } from '../../store/news/actions';
import { NewsItem } from "../../store/news/types";
import {
  Button,
  Comment,
  Form,
  Card,
  Grid,
  Icon,
  Segment,
} from "semantic-ui-react";
import { connect } from "react-redux";
import {incrementLikeCounter} from '../../store/news/actions'

export interface ICommentsProps {
  saveComment: typeof saveComment;
  newsItemList: NewsItem[];
  currentItem: number;
  incrementLikeCounter: typeof incrementLikeCounter
}

export class Comments extends React.Component<ICommentsProps> {

  newComment = (event: any) => {
    event.preventDefault();
    //Handle retieval of form field value

    const commentField: HTMLInputElement | null = document.querySelector(
      '[name="comment"]'
    );
    let commentFieldValue: string = "";
    if (commentField !== null) { commentFieldValue = commentField.value }
    // Add new comment.
    
    this.props.saveComment(this.props.currentItem, commentFieldValue);
    event.target.reset();
  }
  
  onLikeClick = () => {
    const {currentItem, incrementLikeCounter} = this.props
     incrementLikeCounter(currentItem);
  }

  render() {
    const { newsItemList, currentItem } = this.props;
    const currNewsItem = newsItemList.filter( newsItem => ( newsItem.newsId === currentItem ))[0]; 

    return (
      <Grid>
        <Segment>
          <Grid.Column width={10} floated="right">
            <Card>
              <Card.Description>
                <Button icon onClick={this.onLikeClick}>
                  <Icon name="like" />
                  Like
                </Button>
                  {/* Blank line required for formatting display */}
                <Button icon>
                  <Icon name="comment outline" />
                  Comment
                </Button>
                Likes: {currNewsItem.newsLikesCount}
              </Card.Description>
            </Card>
            <Segment>
              <Comment.Group>
                <Comment>
                  <Comment.Content>
                    <Form onSubmit={this.newComment}>
                      <Form.TextArea name= 'comment' ></Form.TextArea>
                      <Button
                        content="Add Comment"
                        labelPosition="left"
                        icon="edit"
                        primary
                      />
                    </Form>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            </Segment>
          </Grid.Column>
          {/* Blank line required for formatting display */}                  ​
        </Segment>
      </Grid>
    );
  }
}

// Retrieve "items" from our "global" redux state.
const mapStateToProps = (state: RootState) => {
  return {
    newsItemList: state.news.newsItemList,
  };
};

// Connect Redux and React using our values and "view!"
export default connect(mapStateToProps, { saveComment, incrementLikeCounter })(Comments);
