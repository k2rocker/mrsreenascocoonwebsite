import React from 'react';
import { Container, Wrapper, Row, Column, Link, Title, Text, Socials } from './Footercss';

export default function Footernew({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footernew.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footernew.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footernew.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footernew.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footernew.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footernew.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footernew.Socials = function FooterSocials({ children, ...restProps }) {
  return <Socials {...restProps}>{children}</Socials>;
};
