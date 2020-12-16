import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <div className="restPage_display_wrap_slider_items_item">
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.details}</p>
        </article>
        <div className="placeHolder" />
        <section>
          <img src={this.props.photo} alt="slider_img" />
        </section>
      </div>
    );
  }
}

export default Item;
