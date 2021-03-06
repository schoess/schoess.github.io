import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import "./Projects.css";

import "../../assets/images/Songwriters_Lament.png";
import "../../assets/images/Employee-Directory.png";
import "../../assets/images/Budget-Tracker.png";
import "../../assets/images/MVC_App.png";
import "../../assets/images/Employee-Tracker.png";
import "../../assets/images/Spark_Forums.PNG";

export default function Projects(props) {
  return (
    <div>
      <CardColumns>
        {
          props.data.map(item => (
            <Card className="card-styles" key={item.id}>
              <Card.Img className="card-image" variant="top" src={item.screenie} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href={item.repoLink}>
                  <Button className="repo-btn" variant="primary">Repo Link</Button>
                </a>
                <a href={item.link}>
                  <Button className="deploy-btn" variant="danger">Deployed App</Button>
                </a>
              </Card.Footer>
            </Card>
          ))

        }
      </CardColumns>
    </div>
  )
}