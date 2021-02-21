import React from "react";

const Vaccine = () => {
  return (
    <div style={{ padding: "0 2em" }}>
      <p>
        The two authorized vaccines for Canada are the Moderna and
        Pfizer-BioNTech COVID-19 vaccines
      </p>
      <p>
        Both vaccines prevent the infection of COVID-19 by teaching cells how to
        make a specific protein. This protein triggers our immune system to make
        antibodies, which can fight the real virus if it enters our body in the
        future
      </p>
      <p>
        The Moderna vaccine is approved for people who are 18 years of age and
        older, while the Pfizer vaccine is approved for people who are 16 years
        of age or older
      </p>
      <p>
        Both are most effective in two doses, with the Pfizer vaccine’s second
        dose done 21 days after the first, and the Moderna vaccine’s second dose
        done a month after
      </p>
      <p>
        Side effects of both are similar to what you might have to other
        vaccines - pain at the site of the injection, body chills, feeling tired
        or feeling feverish. None of these pose a risk to your health
      </p>
      <p>
        As with all vaccines, there’s a chance that there will be a serious side
        effect, but these are rare. A serious side effect might be something
        like an allergic reaction. Speak with your health professional about any
        serious allergies or other health conditions you may have before you
        receive either vaccine
      </p>
      <p>
        As of now, the vaccine is only available to those who are most
        vulnerable to the virus (e.g. residents of long-term care homes) for
        most provinces.
      </p>
      <p>
        For more information on the rollout plan specific to your province, go
        to “Where to get vaccinated in your province or territory” at{" "}
        <a
          style={{ color: "#0652DD", textDecoration: "underline" }}
          href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/vaccines/overview.html
"
        >
          this site.
        </a>
      </p>
    </div>
  );
};

export default Vaccine;
