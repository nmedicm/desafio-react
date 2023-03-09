import Button from 'react-bootstrap/Button'

const Footer = () => {
    return (
        <div className="container">
            <hr/>
            <h5>Todos los derechos reservados.</h5>
            <p>Imágen 1: Capital de Chile fundada en 1541.</p>
            <p>Imágen 2: Capital de Argentina fundada en 1536.</p>
            <p>Imágen 1: Capital de Perú fundada en 1535.</p>
            <Button variant='success'>Conoce más aquí</Button>
        </div>
    );
};

export default Footer;
