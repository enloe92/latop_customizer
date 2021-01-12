import React from 'react';
import Feature from '../Feature/Feature';
import FEATURES from '../Data/Data';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

function Form(props) {
  // console.log(props);
  const features = Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    // feature
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <Feature
          feature={feature}
          selected={props.selected}
          USCurrencyFormat={props.USCurrencyFormat}
          updateFeature={props.updateFeature}
          FEATURES={FEATURES}
          key={featureHash}
          idx={idx}
        />
      </fieldset>
    );
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}

export default Form;
