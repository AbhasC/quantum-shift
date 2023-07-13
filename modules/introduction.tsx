import { useRef } from "react";
import { AiOutlineDown } from "react-icons/ai";

export default function Introduction() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const stats = [
    { value: 127, desc: "Awards Received" },
    { value: 1505, desc: "Cups of Coffee" },
    { value: 109, desc: "Projects Completed" },
    { value: 102, desc: "Happy Clients" },
  ];

  const mapper = (val: { value: number; desc: string }, ind: number) => {
    return (
      <div className="stat-container" key={ind}>
        <span className="stat-value">{val.value}</span>
        <span className="stat-desc">{val.desc}</span>
      </div>
    );
  };

  const clickHandler = () => {
    const target = sectionRef.current;
    const scrollElem = target?.scrollIntoView({ behavior: "smooth" });
    return scrollElem;
  };

  return (
    <section className="intro-main" id="intro-main" ref={sectionRef}>
      <button className="scroll-down-text" onClick={clickHandler}>
        <AiOutlineDown />
        <span>Scroll Down</span>
      </button>
      <h2 className="intro-heading">HELLO THERE</h2>
      <span className="intro-declaration">We Are QuantumShift</span>
      <p className="intro-para">
        Welcome to QuantumShift, where we unlock the power of the quantum realm
        to revolutionize the world of computing and problem-solving. At
        QuantumShift, we harness the fundamental principles of quantum mechanics
        to develop cutting-edge technologies that go beyond the limitations of
        classical computing. From quantum algorithms and optimization techniques
        to quantum hardware and software development, we offer a comprehensive
        suite of solutions tailored to meet your specific needs.
      </p>
      <div className="stats-container">{stats.map(mapper)}</div>
    </section>
  );
}
