import './learnmore-section.css';

const LearnmoreSection = () => {
  return (
    <div className="learnmore-section">
      <div className="learnmore-section-container">
        <div className="logo">
          <img src="./logo.png" alt="Logo" />
        </div>
        <div className="content">
          <h1>
            Actually
            <br />
            complete that project.
          </h1>
          <p>
            There are so many books to read, podcasts to listen to, and courses
            to take... but none of that matters if you don't do the work.
            Motivated Mornings is a service focused on making sure that your
            best work actually happens.
          </p>
          <p className="learnmore-btn">
            Learn More <i class="fa-solid fa-arrow-right-long"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnmoreSection;
