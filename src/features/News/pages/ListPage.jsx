import React from 'react';
import PropTypes from 'prop-types';
import NewsList from '../components/NewsList';

ListPage.propTypes = {

};

function ListPage(props) {
    return (
        <div>
            <NewsList />
        </div>
    );
}

export default ListPage;