import React from 'react';

const getChildrenOnDisplayName = (children, displayName) =>
  React.Children.map(children, (child) =>
    child.type.displayName === displayName ? child : null
  );

const Card = ({ children }) => {
  const header = getChildrenOnDisplayName(children, 'Header');
  const body = getChildrenOnDisplayName(children, 'body');
  const footer = getChildrenOnDisplayName(children, 'footer');

  return (
    <div style={{ width: 400, margin: 24 }}>
      {header}
      {body}
      {footer}
    </div>
  );
};

const Header = ({ children, style, ...others }) => (
  <div style={{ background: '#F48FB1', height: 48, ...style }} {...others}>
    {children}
  </div>
);

Header.displayName = 'Header';
Card.Header = Header;

const Body = ({ children, style, ...others }) => (
  <div style={{ background: '#B2EBF2', height: 250, ...style }} {...others}>
    {children}
  </div>
);

Body.displayName = 'body';
Card.Body = Body;

const Footer = ({ children, style, ...others }) => (
  <div style={{ background: '#C5E1A5', height: 48, ...style }} {...others}>
    {children}
  </div>
);

Footer.displayName = 'footer';
Card.Footer = Footer;

const SubComponent = () => (
  <>
    <Card>
      <Card.Header>Header1</Card.Header>
      <Card.Body>Body1</Card.Body>
      <Card.Footer>Footer1</Card.Footer>
    </Card>

    <Card>
      <Card.Header>Header2</Card.Header>
      <Card.Body>Body2</Card.Body>
      <Card.Footer>Footer2</Card.Footer>
    </Card>
  </>
);

export default SubComponent;
