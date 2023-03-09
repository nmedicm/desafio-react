import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <>
      <Header title="Galería de Imágenes con React"/>

      <Card url="https://media.staticontent.com/media/pictures/97addb06-2c89-4f6f-972b-b3708fb1e29c" 
      title="Santiago" 
      description="Chile" />

      <Card url="https://blogskystorage.s3.amazonaws.com/2021/07/skyairline_skyairline_image_182.jpeg" 
      title="Buenos Aires" 
      description="Argentina" />

      <Card url="https://rosaliatour.cl/wp/wp-content/uploads/2021/10/lima-peru-shutterstock_1047718252.jpg" 
      title="Lima" 
      description="Perú" />

      <Footer/>
    </>
  );
}

export default App;
