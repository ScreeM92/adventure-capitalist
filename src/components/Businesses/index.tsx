import React from 'react';
import { Business } from './Business';
import { IBusiness } from '../../shared/interfaces';
import { Wrapper } from './styles';
import { useBusinessContext } from '../../state/Businesses/index';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface Props {
  businesses: IBusiness[];
}

export const Businesses: React.FunctionComponent = () => {
  const businesses = Object.values(useBusinessContext());
  const firstRow = businesses.slice(0, 5);
  const secondRow = businesses.slice(5);

  return (
    <Wrapper>
      <Container fluid>
        <BusinessRow businesses={firstRow}/>
        <BusinessRow businesses={secondRow}/>
      </Container>
    </Wrapper>
  )
}

const BusinessRow: React.FunctionComponent<Props> = ({businesses}: Props) => {
  return (
    <Row>
      {
        businesses.map((business: IBusiness) =>
          <Col key={business.id}>
            <Business
              business={business}
            />
          </Col>
        )
      }
    </Row>
  )
}