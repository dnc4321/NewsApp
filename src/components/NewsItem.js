import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
    let {title,description,imgUrl,url} = this.props;
    let altImgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-pXur1imGdCkaL7l57e5UXBuVA1bHetNag&usqp=CAU";
    return (
      <div className="my-3">
        <div className="card">
          <img src={imgUrl===null?altImgUrl:imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url}  rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
