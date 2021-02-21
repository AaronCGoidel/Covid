import React from "react";

const AboutCovid = () => {
  return (
    <div style={{ padding: "0 2em" }}>
      <p>
        Covid-19 is a disease caused by a newly identified virus of the
        coronavirus variety. We know of many other such viruses.
      </p>
      <p>
        People who get COVID-19 can become seriously-ill, develop mild symptoms,
        or develop no symptoms at all.
      </p>
      <p>
        What makes it so dangerous is how easily it is spread by those who have
        been infected.
      </p>
      <p>
        It is possible for someone to have the virus and not develop symptoms
        yet (pre-symptomatic) or never develop symptoms.{" "}
        <span style={{ fontWeight: "bold", fontSize: "1.1em" }}>
          People who haven’t developed symptoms can still spread the disease to
          others.
        </span>
      </p>
      <p>Some commonly reported symptoms include:</p>
      <ul>
        <li>new or worsening cough</li>
        <li>shortness of breath or difficulty breathing</li>
        <li>fever; temperature equal to or over 38°C</li>
        <li>chills</li>
        <li>lethargy; fatigue or weakness</li>
        <li>muscle or body aches</li>
        <li>new loss of smell or taste</li>
        <li>headache</li>
        <li>gastrointestinal symptoms (abdominal pain, diarrhea, vomiting)</li>
        <li>generally feeling very unwell</li>
      </ul>

      <h2>
        If you or someone you live with believes they have Covid-19 or is
        showing symptoms, isolate and call a doctor.
      </h2>
    </div>
  );
};

export default AboutCovid;
