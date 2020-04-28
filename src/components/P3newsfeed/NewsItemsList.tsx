import * as React from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { NewsItem } from "../../store/news/types";
import IndividualNewsItem from './IndividualNewsItem';
import {Fragment} from 'react'

export interface INewsItemsListProps {
  newsItemList: NewsItem[];
}

export class NewsItemsList extends React.Component<INewsItemsListProps> {

  public render() {
    const { newsItemList } = this.props;
    return (
      <Segment>
        { newsItemList.map( newsItem => {
          return ( 
            <Fragment key={newsItem.newsId}>
              <IndividualNewsItem newsItemId={newsItem.newsId}/>
            </Fragment>
          )} )
        }
      </Segment>
    );
  }

}

const mapStateToProps = (state: RootState) => {
  return {
    newsItemList: state.news.newsItemList,
  };
};

export default connect(mapStateToProps, { })(NewsItemsList);
