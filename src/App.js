import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainScreen from './components/mainScreen/MainScreen';
import NumbersScreen from './components/numbersScreen/NumbersScreen';
import SecondScreen from './components/secondScreen/SecondScreen';
import './scss/style.scss';

const App = () => (
	<>
		<Header />
		<MainScreen />
		<SecondScreen />
		<NumbersScreen />
		{/* <Footer /> */}
	</>
);

export default App;