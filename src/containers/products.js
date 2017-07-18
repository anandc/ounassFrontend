import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchAction } from '../actions/productActions';
import Header from '../common/Header';

class Products extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props,
          action = searchAction({});
        dispatch(action);
    }

    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <Header/>
            </div>
        );
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { products } = state;
    return {
        products
    };
}

export default connect(mapStateToProps)(Products)
