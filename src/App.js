import Navigation from './components/Navigation';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Portfolio from './components/Portfolio';
import Section4 from './components/Section4';
import Mentions from './components/Mentions';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import SendEmail from './components/SendEmail';
import Jobs from './components/Jobs';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className="flex flex-col">
			<Navigation />
			<Section1 />
			<Section2 />
			<Portfolio />
			<Section4 />
			<Mentions />
			<Testimonials />
			<FAQ />
			<Blog />
			<SendEmail />
			<Jobs />
			<Footer />
		</div>
	);
};

export default App;
