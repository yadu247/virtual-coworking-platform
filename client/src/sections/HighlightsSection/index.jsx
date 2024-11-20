import './highlights-section.css';

const HighlightsSection = () => {
  return (
    <div className="highlights-section">
      <div className="head">
        <h1>
          Motivated Mornings is a virtual coworking community proven to help you
          do the work
        </h1>
      </div>
      <div className="highlights-section-container">
        <div className="highlights-card">
          <img src="./highlights-image-1.png" alt="Highlights image" />
          <h2>Morning Kick-Off Calls</h2>
          <p>
            Build healthy habits. Jumpstart each day with a 10min group video
            call with an inspiring thought about creating. Stay accountable and
            motivated. Offered Mon-Fri at 5am and 7am.
          </p>
        </div>
        <div className="highlights-card">
          <img src="./highlights-image-2.png" alt="Highlights image" />
          <h2>Virtual Coworking</h2>
          <p>
            Following Morning Kick-Off Calls, virtually cowork with fellow
            creators (MoMos). Feel the momentum of a 2- hour silent group
            coworking sesh. Celebrate benchmarks with your peers.
          </p>
        </div>
        <div className="highlights-card">
          <img src="./highlights-image-3.png" alt="Highlights image" />
          <h2>Private Slack Group</h2>
          <p>
            Stay connected with what your fellow MoMos are doing, creating, and
            accomplishing. A space for relationship building, inspiration,
            feedback, and celebrating momentum.
          </p>
        </div>
        <div className="highlights-card">
          <img src="./highlights-image-4.png" alt="Highlights image" />
          <h2>Productivity Coaching Sessions*</h2>
          <p>
            A weekly 30-minute private meeting to discuss goals, setbacks,
            breakthroughs, strategies, and create ways to be sure the momentum
            keeps going.
          </p>
        </div>
        <div className="highlights-card">
          <img src="./highlights-image-5.png" alt="Highlights image" />
          <h2>Tailored Action Plans*</h2>
          <p>
            Our personal coaching is more than rah-rah. You will go away with
            specific action plans to keep you moving in the right direction.
            Forward.
          </p>
        </div>
      </div>
      <p>*Available exclusively with the Pro plan</p>
    </div>
  );
};

export default HighlightsSection;
