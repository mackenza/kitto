import React from 'react';
import Widget from '../../assets/javascripts/widget';

import './image.scss';
const placeholder = '/assets/images/nyan.gif'

Widget.mount(class Image extends Widget {
  render() {
    return (
      <div style={{backgroundImage: 'url(' + (this.state.image || placeholder) + ')'}} className={this.props.className}></div>
    )
  }
});
