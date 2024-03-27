import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* SPOTIFY */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://techcult.com/wp-content/uploads/2023/01/How-to-Install-and-Play-Spotify-on-A-Chromebook.png"
              }
              isBlog={false}
              title="Spotify"
              description="Admins upload music to the platform built using Express.js, Node.js, and MongoDB. Each user receives a default playlist upon registration, and authentication is required for accessing songs or features, ensuring security and personalized experiences. "
              ghLink="https://github.com/HarshSewarkar/Spotify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          {/* EXPENSE TRACKER */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://imgs.search.brave.com/GTmr3MIGI3UroKKcSxvD-OscUGzBHCcSVn77qmGJovk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tb25l/eS10cmFja2VyLWFw/cC1idWRnZXQtZXhw/ZW5zZS1wbGFubmlu/Zy0yMzM4NzY4Nzku/anBn"
              }
              isBlog={false}
              title="Expense Tracker"
              description="Expense Tracker web app, simplifying expense management with intuitive features. Developed using React.js and deployed on Netlify, it showcases my proficiency in modern web development. Explore it here and share your feedback!"
              ghLink="https://github.com/HarshSewarkar/Expense-Track"
              demoLink="https://expensestracker375.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://th.bing.com/th/id/OIP.zV_5EOzzrJ0eRYBWfXphnAHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              }
              isBlog={false}
              title="Instragram"
              description="Check out my Instagram clone backend—a powerful platform for photo sharing and social connectivity. Built with modern technologies, it offers seamless photo uploading, user authentication, and data storage. Explore social networking in action!"
              ghLink="https://github.com/HarshSewarkar/instaclone"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://th.bing.com/th/id/OIP.R4OgBv9juwTDDwvaEiDQcAHaE7?w=294&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
              isBlog={false}
              title="pintrest"
              description="Presenting my Pinterest clone—a vibrant platform for visual discovery. With seamless image uploading, user authentication, and efficient data storage, it offers a captivating experience. Explore the world of visual inspiration today!"
              ghLink="https://github.com/HarshSewarkar/pintrest-clone"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://thumbs.dreamstime.com/b/laptop-to-do-list-to-do-list-laptop-screen-laptop-to-do-list-to-do-list-laptop-screen-simple-vector-illustration-126769716.jpg"}
              isBlog={false}
              title="to-do list"
              description="Introducing my ToDo list app—simple, powerful, and built with React. Organize tasks effortlessly with an intuitive interface and efficient management features. Powered by React, showcasing front-end development skills. Stay focused and organized with ease!"
              ghLink="https://github.com/HarshSewarkar/ToDo-List-App"
              demoLink="https://todo-list-app-kappa-taupe.vercel.app/" 
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
