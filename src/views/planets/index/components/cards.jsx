import React from 'react';
import _ from 'lodash';

class Cards extends React.Component {

    loadPlanets = () => {
      let planetsArr = this.props.planetList;
      planetsArr = _.map(planetsArr, (planet, index) => {
        const pop = _.parseInt(planet.population) || 0;
        return {
          name: planet.name,
          population: pop,
          rank: index
        };
      });
      planetsArr = _.sortBy(planetsArr, 'population');
      return planetsArr;
    }

    scaleBetween = (unscaledNum, scaleMin, scaleMax, minPopulation, maxPopulation) => (scaleMax - scaleMin) * (unscaledNum - minPopulation) / (maxPopulation - minPopulation) + scaleMin;

    setFontSize = (planetObj, scale, index) => {
      if (planetObj.scale === 1) {
        return '1rem';
      }
      else {
        return ((index/10) + scale) < 0.15 ? '1.15rem' : ((index/10) + scale + 1) +'rem';
      }
    }

    render() {
        let planetsArr = this.props.planetList.length > 0 ? this.loadPlanets() : [];
        const minPopulation = this.props.planetList.length > 0 ? _.first(planetsArr).population : 0;
        const maxPopulation = this.props.planetList.length > 0 ? _.last(planetsArr).population : 0;

        return (
          <div className="cards grad-color">
            { planetsArr.map((planet, index) => {

              const scale = this.scaleBetween(planet.population, 0, 1, minPopulation, maxPopulation)
              const fontSIze = this.setFontSize(planet, scale, index);
              const divStyle = {
                  fontSize: fontSIze,
              };
              return  (
                <div key={index} className ="card">
                  <div className="card-details">
                    <div className="name" style={divStyle}>
                      {planet.name}
                    </div>
                    <div className="population"> 
                      Population: {planet.population}
                    </div>
                  </div>
                </div>
              );
                })}
            </div> 
        );
    }
}

export default Cards;