import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom"

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <p>We have {snacks.length} snacks and {drinks.length} drinks for you to choose from.</p>
          </CardTitle>
        <button><Link to="/new">Add a snack/drink</Link></button>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
