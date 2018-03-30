import React, { Component } from 'react';
import PropTypes from 'prop-types';

import productComponent from '../../components';
import ProgressiveImage from 'react-progressive-image';

class Details extends Component {
  render() {
    const { getItem } = this.props;

    return (
        <div className="row-fluid">
        {
            getItem.hasData &&
            <div className="product">
                <div className="col-sm-12 col-md-4 col-lg-4 float-left">
                    <ProgressiveImage
                        src={getItem.data.image}
                        placeholder={`${window.location.origin}/img/placeholder.png`}>
                        {(src) =>
                            <img
                                src={src}
                                alt={getItem.data.name}
                                className='img-thumbnail rounded-0 p-0 border-light product-img'/>
                            }
                    </ProgressiveImage>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8 float-left">
                    <h1 className="product-title text-capitalize">{getItem.data.name}</h1>
                    <div dangerouslySetInnerHTML={{ __html: getItem.data.description }} />
                    <hr/>
                    <productComponent.NonVeg nonVeg={getItem.data.nonVeg}/>
                    {
                        getItem.data.spicy &&
                        <productComponent.Spicy/>
                    }
                </div>
            </div>
        }

        {
            getItem.error &&
            <p>{getItem.data}</p>
        }
        </div>
    );
  }
}

Details.propTypes = {
    getItem: PropTypes.object.isRequired
};


export default Details;