import logo from './logo.svg';
import './App.css';
import Kitchen from './Kitchen'
import Bedroom1 from './Bedroom1';
import FullBath from './FullBath';
import Bedroom2 from './Bedroom2';
import LivingRoom from './LivingRoom';
import HalfBath from './HalfBath';
import Bedroom3 from './Bedroom3';

function App() {
  return (
    <div>
    <Bedroom1 />
    <Kitchen />
    <FullBath />
    <Bedroom2 />
    <LivingRoom />
    <HalfBath />
    <Bedroom3 />
    </div>
  );
}

export default App;
