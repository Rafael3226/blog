import Center from "components/styled/Center";
import styled from "styled-components";

const Title = styled.h2`

`

function Resume() {
  return <Center>
  <main>
        <h2>Summary</h2>
        <p>
          I have extensive experience as a software engineer, with a focus on
          implementing CI/CD and using agile methodologies like SCRUM and
          DevOps. I am highly passionate about both hardware and open-source
          software, and I am always looking for new and exciting projects to
          work on. I believe that my combination of technical skills and
          creative problem-solving abilities make me an asset to any development
          team.
        </p>
        <h2>Experience</h2>
        <h3>Software Engineer - EPAM Anywhere (Feb 2022 - Present)</h3>
        <p>
          In my current role at EPAM Anywhere, I have been working on
          refactoring an e-commerce web application from a version developed
          with vanilla JS and JQuery to a new version built with React JS. The
          new application implements a Service Oriented Architecture (SOA) using
          Java Spring, SAP Hybris, and React, and has already been well-received
          by our clients. I am confident that my technical skills and ability to
          work well within a team have been major contributors to this project's
          success.
        </p>
        <h3>
          Senior Full-Stack Engineer - Teleperformance (Jan 2021 - Feb 2022)
        </h3>
        <p>
          At Teleperformance, I was responsible for building a web application
          for internal use that was designed to improve productivity in customer
          service procedures. The application was developed using Next JS and
          Typescript (SSR with React JS), and was deployed with Azure and Azure
          SQL Server. This project was a major success, with our team receiving
          positive feedback from users and management alike. I am proud to have
          played such a major role in delivering a valuable tool to our company.
        </p>
        <h3>
          Full Stack Engineer - Sistemas y Computadores S.A. (Dec 2019 - Jan
          2021)
        </h3>
        <p>
          While at Sistemas y Computadores S.A., I was responsible for
          sustaining and developing new functionalities on a document
          administration platform. I also assisted other development groups in
          implementing the company's tools and projects. This was a challenging
          but rewarding role, and I was proud to contribute to the success of
          the company through my technical skills and problem-solving abilities.
        </p>
        <h3>Web Engineer - TESOL S.A.S (Jan 2019 - Dec 2019)</h3>
        <p>
          At TESOL S.A.S, I worked on designing, developing, and deploying the
          company's landing page. This was a fast-paced and challenging project,
          but I was able to successfully deliver a high-quality web page that
          met the company's needs. I believe that my attention to detail and
          ability to work well under pressure were key factors in the success of
          this project.
        </p>
        <h2>Education</h2>
        <h3>Centennial College (Aug 2022 - May 2023)</h3>
        <p>
          I am currently pursuing a degree in Cybersecurity at Centennial
          College. I am excited to expand my knowledge and skills in this field,
          and I am confident that my education will help me to provide even more
          value to my clients and colleagues in the future.
        </p>
        <h3>Universidad Pontificia Bolivariana (2016 - 2021)</h3>
        <p>
          I received a degree in Software Engineering from Universidad
          Pontificia Bolivariana. This education provided me with a strong
          foundation in computer software engineering, and has been instrumental
          in my success as a software engineer to date.
        </p>
        <h2>Skills</h2>
        <p>
          My technical skills include Git, Bitbucket, Next.js, Microsoft Azure,
          SQL Azure, Microsoft SQL Server, Express.js, TypeScript, C#, and CSS.
          I am always looking to expand my skill set and stay up-to-date with
          the latest technologies and best practices in software engineering.
        </p>
      </main>
  </Center>;
}

export default Resume;
