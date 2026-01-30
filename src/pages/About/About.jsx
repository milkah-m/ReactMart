import "./About.css";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-content">
        <h1>About ReactMart</h1>
        <p className="lead">
          Fresh groceries. Simple shopping. Built for people.
        </p>
        <p>
          <strong>ReactMart</strong> was created to make grocery shopping fast,
          friendly, and stress-free. From crisp produce to everyday essentials,
          we focus on quality, speed, and simplicity.
        </p>
        <p>
          Built by passionate developers -
          <strong> Eugene, Farhiya, Jabari, and Milkah</strong> - ReactMart is
          powered by modern web technology and thoughtful design to give you an
          experience that feels smooth and human.
        </p>
        <p>
          This isn't just a store. It's your neighborhood grocery - online.
        </p>
      </div>
    </section>
  );
};

export default About;