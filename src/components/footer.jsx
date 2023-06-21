import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card data-bs-theme="dark" className="text-center">
      <Card.Header>Featured</Card.Header>

      <Card.Footer className="text-muted">Feito por Thiago Mendes</Card.Footer>
    </Card>
  );
}

export default Footer;