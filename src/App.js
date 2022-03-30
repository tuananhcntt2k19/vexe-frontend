import HomePage from './components/HomePage';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import NewsFeature from 'features/News';
import BookingForm from 'features/Booking/components/BookingForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/news" component={NewsFeature} />
        <Route path="/booking" component={BookingForm} />
      </Switch>
    </div>
  );
}

export default App;
