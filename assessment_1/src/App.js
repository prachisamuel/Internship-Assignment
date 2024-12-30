import React, { useRef } from "react";

const App = () => {
  const inputRefs = useRef({});
  const outputRefs = useRef({});

  const inputLines = [
    "Chief Complaint:",
    "Abdominal pain",
    "Major Surgical or Invasive Procedure:",
    "Exploratory laparotomy",
    "History of Present Illness:",
    "Mr. Known lastname 65533 is a 90-year-old man s/p right nephrectomy, s/p left",
    "ureterostomy ileal conduit who was transferred from Hospital 18",
    "Location (un) 620 for sharp and worsening abdominal pain. The patient",
    "denied any bowel movement in the 2-3 days prior to presentation",
    "but had some flatus in the previous hour. A CT scan performed at",
    "Location (un) 620 was concerning for large bowel obstruction/cecal",
    "volvulus.",
    "Past Medical History:",
    "PMH: CAD, MI, HTN, DJD, renal CA, a-fib",
    "PSH: CCY, R nephrectomy, cystectomy/ileal conduit, AAA,",
    "pacemaker, PTCA",
    "Social History:",
    "No tobacco, occasional wine.",
    "Family History:",
    "Non-contributory",
    "Physical Exam:",
    "Temp 97.2 72 170/76 24",
    "Gen: sitting up",
  ];

  const outputLines = [
    "Here is a chronological summary of the Discharge Summary in 100-150 words with up to 10 bullet points, including references to bowel obstruction, bowel, ischemia, ascites, and perforation:",
    "• Patient, a Age over 90 year old man, presented with sharp and worsening abdominal pain and no bowel movement for 2-3 days.",
    "• CT scan showed large bowel obstruction/cecal volvulus.",
    "• Underwent exploratory laparotomy, right colectomy, and revision of ileal conduit on 2122-2-13.",
    "• Intraoperatively, patient was found to have necrotic gut and underwent right colectomy.",
    "• Postoperatively, patient had several complications, including coagulopathy, hypoglycemia, and respiratory distress, requiring intubation and readmission to the SICU.",
    "• Patient eventually recovered and was discharged to an extended care facility for rehabilitation on 2122-3-3.",
    "• Discharge medications included pain medications, anticoagulants, and other medications to manage his underlying conditions.",
    "• Follow-up instructions included wound care, activity restrictions, and close follow-up with his surgeon.",
  ];

  const highlightWords = [
    "bowel obstruction",
    "bowel",
    "ischemia",
    "ascites",
    "perforation",
    "sharp and worsening abdominal pain",
    "no bowel movement for 2-3 days",
    "CT scan",
    "large bowel obstruction/cecal volvulus",
    "exploratory laparotomy",
    "right colectomy",
    "revision of ileal conduit",
    "necrotic gut",
    "coagulopathy",
    "hypoglycemia",
    "respiratory distress",
    "intubation",
    "readmission to the SICU",
    "recovered",
    "discharged to an extended care facility",
    "rehabilitation",
    "pain medications",
    "anticoagulants",
    "underlying conditions",
    "wound care",
    "activity restrictions",
    "close follow-up with his surgeon",
  ];

  // Function to highlight phrases in a line
  const highlightText = (line) => {
    let highlightedLine = line;
    highlightWords.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "gi");
      highlightedLine = highlightedLine.replace(
        regex,
        `<span style="background-color: yellow; cursor: pointer;">$1</span>`
      );
    });

    return highlightedLine;
  };

  const scrollToInput = (phrase) => {
    const element = Object.values(inputRefs.current).find((el) =>
      el.textContent.includes(phrase)
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div style={{ display: "flex", gap: "20px", margin: "10px", height: "94vh", width: "94vw" }}>
      {/* Input Box */}
      <div
        style={{
          width: "60%",
          height: "100%",
          border: "1px solid black",
          overflowY: "scroll",
          padding: "10px",
          lineHeight: "30px"
        }}
      >
        {inputLines.map((line, index) => (
          <div key={index} ref={(el) => (inputRefs.current[line] = el)}>
            {line}
          </div>
        ))}
      </div>

      {/* Output Box */}
      <div
        style={{
          width: "40%",
          height: "100%",
          border: "1px solid black",
          overflowY: "scroll",
          padding: "10px",
        }}
      >
        {outputLines.map((line, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: highlightText(line),
            }}
            onClick={(e) => {
              const clickedPhrase = e.target.textContent;
              if (highlightWords.includes(clickedPhrase)) {
                scrollToInput(clickedPhrase);
              }
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;
