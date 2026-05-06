import { useMemo, useRef, useState } from "react";

import Head from "next/head";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  city?: string;
  questions: FAQItem[];
};

const normalizeCity = (value: string) =>
  value
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");

const replaceCityToken = (text: string, city: string) =>
  String(text || "").replace(/\{city\}/gi, city);

export default function FAQ({ city = "seattle", questions = [] }: FAQProps) {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});
  const baseIdRef = useRef(`faq-${Math.random().toString(36).slice(2, 10)}`);

  const displayCity = useMemo(() => {
    const safeCity = String(city || "").trim() || "seattle";
    return normalizeCity(safeCity);
  }, [city]);

  const schemaData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: questions.map((item) => ({
        "@type": "Question",
        name: replaceCityToken(item.question, displayCity),
        acceptedAnswer: {
          "@type": "Answer",
          text: replaceCityToken(item.answer, displayCity),
        },
      })),
    }),
    [questions, displayCity],
  );

  const toggleItem = (index: number) => {
    setOpenMap((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <section aria-label="Frequently asked questions" className="faq-section">
        <style>{`
        .faq-section {
          width: 100%;
          padding: 20px 16px 40px;
          background: #f6f6f8;
          border-radius: 6px;
        }
        .faq-heading {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 20px;
          font-family: inherit;
        }
        .faq-item + .faq-item { margin-top: 16px; }
        .faq-question {
          width: 100%;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          background: #fff;
          color: #1a202c;
          padding: 18px 20px;
          font-family: inherit;
          font-size: 1.125rem;
          font-weight: 500;
          line-height: 1.5;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
        }
        .faq-question:focus-visible {
          outline: 3px solid #2563eb;
          outline-offset: 2px;
        }
        .faq-chevron {
          margin-left: 16px;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .faq-chevron.is-open {
          transform: rotate(180deg);
        }
        .faq-answer {
          border: 1px solid #e2e8f0;
          border-top: 0;
          border-radius: 0 0 6px 6px;
          padding: 16px 24px 28px;
          color: #2d3748;
          font-family: inherit;
          font-size: 1rem;
          line-height: 1.7;
          background: #fff;
        }
        .faq-question-text {
          font-size: inherit;
          font-weight: inherit;
          margin: 0;
        }
      `}</style>
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        {questions.map((item, index) => {
          const isOpen = !!openMap[index];
          const questionId = `${baseIdRef.current}-question-${index}`;
          const panelId = `${baseIdRef.current}-panel-${index}`;
          return (
            <div className="faq-item" key={`${questionId}-${item.question}`}>
              <button
                id={questionId}
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
              >
                <h3 className="faq-question-text">
                  {replaceCityToken(item?.question, displayCity)}
                </h3>
                <svg
                  className={`faq-chevron ${isOpen ? "is-open" : ""}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <div
                id={panelId}
                className="faq-answer"
                role="region"
                aria-labelledby={questionId}
                style={!isOpen ? { display: "none" } : undefined}
              >
                {replaceCityToken(item?.answer, displayCity)}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
