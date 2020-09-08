import React from "react";
import { RootState } from "../../store";
import { incrementLikeCounter } from "../../store/news/actions";
import { NewsItem } from "../../store/news/types";
import { connect } from "react-redux";

export interface ILikescountProps {
  incrementLikeCounter: typeof incrementLikeCounter;
  newsItemList: NewsItem[];
  currentItem: number;
}

export class Likescount extends React.Component<ILikescountProps> {
  render() {
    return (
      <button>
        <i className="fas fa-heart"></i>
      </button>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    newsItemList: state.news.newsItemList,
  };
};

export default connect(mapStateToProps, { incrementLikeCounter })(Likescount);
