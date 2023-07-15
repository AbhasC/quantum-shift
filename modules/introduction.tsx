import { useCallback, useEffect, useRef } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { stats } from "@/data";

export default function Introduction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const observerOptions = useRef<IntersectionObserverInit>({
    threshold: 1,
  });

  const observerCallback = useCallback<IntersectionObserverCallback>(
    (entries, obv) => {
      function forEachCallback(elem: IntersectionObserverEntry) {
        if (elem.isIntersecting) {
          const numElems =
            containerRef.current?.querySelectorAll(".stat-value");
          numElems?.forEach((numElem, index) => {
            const targetVal = stats[index]?.value;
            const interval = setInterval(() => {
              let prevVal = +(numElem?.textContent ?? "");
              if (prevVal + 1 > (targetVal ?? Infinity)) {
                clearInterval(interval);
                return;
              }
              numElem.textContent = ++prevVal + "";
            }, 500 / (targetVal ?? 1));
          });
          obv.disconnect();
        }
      }
      entries.forEach(forEachCallback);
    },
    []
  );

  useEffect(() => {
    const numberObserver: IntersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions.current
    );
    if (containerRef.current) {
      numberObserver.observe(containerRef.current);
      return () => {
        numberObserver.disconnect();
      };
    }
    return;
  }, [observerCallback]);

  const mapper = (val: { value: number; desc: string }, ind: number) => {
    return (
      <div className="stat-container" key={ind}>
        <span className="stat-value">0</span>
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
      <div className="stats-container" ref={containerRef}>
        {stats.map(mapper)}
      </div>
    </section>
  );
}
