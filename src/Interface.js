import Nav from 'react-bootstrap/Nav';

function HeaderComponent() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Note app</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default HeaderComponent;