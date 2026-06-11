function Projects(){
    return(
        <section id="projects" className="projects">
            <h2>What I've Built</h2>

             {/*pro1*/}
                <div className="project-card highlight">
                    <h3> ⭐ DevLog V2</h3>
                    <p> Developer journal system to track learning journey, projects, and growth timeline with authentication.</p>

                    <div className="tags">
                        <span>MERN</span>
                        <span>JWT</span>
                        <span>CRUD</span>
                    </div>

                    <a 
                    href="https://github.com/Neetu445/devlog-v2"
                    target ="blank"
                    rel="noreferrer">
                        <button>View Code</button>
                    </a>
                </div>

                {/* Project2*/}
            <div className="project-grid">

                <div className="project-card">
                <h3>Kids AI Learning Platform </h3>
                <p> Interactive learning platform for children with quizzes, gamified XP system, and progress tracking.</p>

                <div className="tags">
                    <span>React</span>
                    <span>Node</span>
                    <span>MongoDB</span>
                </div>

                  <a 
                    href="https://github.https://github.com/Neetu445/kids-learning-platform"
                    target ="blank"
                    rel="noreferrer">
                        <button>View Code</button>
                    </a>
                </div>
               

                {/*pro3*/}
                <div className="project-card">
                    <h3>Study PLanner AI</h3>
                    <p> Smart system that prioritizes study tasks based on difficulty and deadlines using scheduling logic</p>
                    <div className="tags">
                        <span>Python</span>
                        <span>Logic</span>
                    </div>

                    <a 
                    href="https://github.com/Neetu445/Smart-Adaptive-Study-Planner"
                    target ="blank"
                    rel="noreferrer">
                        <button>View Code</button>
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Projects;