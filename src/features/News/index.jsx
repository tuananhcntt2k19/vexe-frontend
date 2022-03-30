import React from 'react';
import PropTypes from 'prop-types';
import ListPage from './pages/ListPage';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';

NewsFeature.propTypes = {

};

function NewsFeature(props) {
    const match = useRouteMatch()
    return (
        <div>
            <Switch>
                <Route path={match.url} exact component={ListPage} />
                <Route path={`${match.url}/:title`} component={DetailPage} />
            </Switch>
        </div>
    );
}

export default NewsFeature;