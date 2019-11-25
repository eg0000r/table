import React, {Component} from 'react';
import './App.css';

let ElementState = {
  SOLID: {color: '#000000'},
  LIQUID: {color: '#4E017D'},
  GAS: {color: '#BF0016'},
  UNKNOWN: {color: '#8F8F8F'}
};

let TableSection = {
  S: 'S',
  P: 'D',
  D: 'D',
  F: 'F'
};

let ElementGroup = {
  ALKALI_METAL: {code: 'K', color: '#FFB700', metal: true, non_metal: false},
  ALKALINE_EARTH_METAL: {code: 'E', color: '#FFFF00', metal: true, non_metal: false},
  LANTHANOID: {code: 'L', color: '#FFF5BF', metal: true, non_metal: false},
  ACTIONID: {code: 'A', color: '#FFDFBF', metal: true, non_metal: false},
  TRANSITION_METAL: {code: 'T', color: '#FF6259', metal: true, non_metal: false},
  POST_TRANSITION_METAL: {code: 'P', color: '#77D4C6', metal: true, non_metal: false},
  METALLOID: {code: 'M', color: '#7EE0A7', metal: false, non_metal: false},
  NOBLE_GAS: {code: 'G', color: '#89DFF5', metal: false, non_metal: true},
  OTHER_NON_METAL: {code: 'N', color: '#7FE07E', metal: false, non_metal: true}
};

let ElementsArray = [
  {name: 'Hydrogen', short: 'H', position: {group: 1, period: 1}, number: 1, mass: 1.008, state: ElementState.GAS, group: ElementGroup.OTHER_NON_METAL, section: TableSection.S},
  {name: 'Helium', short: 'He', position: {group: 18, period: 1}, number: 2, mass: 4.0026, state: ElementState.GAS, group: ElementGroup.NOBLE_GAS, section: TableSection.S},
  {name: 'Lithium', short: 'Li', position: {group: 1, period: 2}, number: 3, mass: 6.94, state: ElementState.SOLID, group: ElementGroup.ALKALI_METAL, section: TableSection.S},
  {name: 'Beryllium', short: 'Be', position: {group: 2, period: 2}, number: 4, mass: 9.0122, state: ElementState.SOLID, group: ElementGroup.ALKALINE_EARTH_METAL, section: TableSection.S},
  {name: 'Boron', short: 'B', position: {group: 13, period: 2}, number: 5, mass: 10.81, state: ElementState.SOLID, group: ElementGroup.METALLOID, section: TableSection.P},
  {name: 'Carbon', short: 'C', position: {group: 14, period: 2}, number: 6, mass: 12.011, state: ElementState.SOLID, group: ElementGroup.OTHER_NON_METAL, section: TableSection.P},
  {name: 'Nitrogen', short: 'N', position: {group: 15, period: 2}, number: 7, mass: 14.007, state: ElementState.GAS, group: ElementGroup.OTHER_NON_METAL, section: TableSection.P},
  {name: 'Oxygen', short: 'O', position: {group: 16, period: 2}, number: 8, mass: 15.999, state: ElementState.GAS, group: ElementGroup.OTHER_NON_METAL, section: TableSection.P},
  {name: 'Fluorine', short: 'F', position: {group: 17, period: 2}, number: 9, mass: 18.998, state: ElementState.GAS, group: ElementGroup.OTHER_NON_METAL, section: TableSection.P},
  {name: 'Neon', short: 'Ne', position: {group: 18, period: 2}, number: 10, mass: 20.180, state: ElementState.GAS, group: ElementGroup.NOBLE_GAS, section: TableSection.P},
  {name: 'Sodium', short: 'Na', position: {group: 1, period: 3}, number: 11, mass: 22.990, state: ElementState.SOLID, group: ElementGroup.ALKALI_METAL, section: TableSection.S},
  {name: 'Magnesium', short: 'Mg', position: {group: 2, period: 3}, number: 12, mass: 24.305, state: ElementState.SOLID, group: ElementGroup.ALKALINE_EARTH_METAL, section: TableSection.S},
  {name: 'Aluminium', short: 'Al', position: {group: 13, period: 3}, number: 13, mass: 26.982, state: ElementState.SOLID, group: ElementGroup.POST_TRANSITION_METAL, section: TableSection.P},
  {name: 'Silicon', short: 'Si', position: {group: 14, period: 3}, number: 14, mass: 28.085, state: ElementState.SOLID, group: ElementGroup.METALLOID, section: TableSection.P},
  {name: 'Phosphorous', short: 'P', position: {group: 15, period: 3}, number: 15, mass: 30.974, state: ElementState.SOLID, group: ElementGroup.OTHER_NON_METAL, section: TableSection.P},
  {name: 'Sulfur', short: 'S', position: {group: 16, period: 3}, number: 16, mass: 32.06, state: ElementState.SOLID, group: ElementGroup.OTHER_NON_METAL, section: TableSection.P},
  {name: 'Chlorine', short: 'Cl', position: {group: 17, period: 3}, number: 17, mass: 35.45, state: ElementState.GAS, group: ElementGroup.OTHER_NON_METAL, section: TableSection.P},
  {name: 'Argon', short: 'Ar', position: {group: 18, period: 3}, number: 18, mass: 39.948, state: ElementState.GAS, group: ElementGroup.NOBLE_GAS, section: TableSection.P},
  {name: 'Potassium', short: 'K', position: {group: 1, period: 4}, number: 19, mass: 39.098, state: ElementState.SOLID, group: ElementGroup.ALKALI_METAL, section: TableSection.S},
  {name: 'Calcium', short: 'Ca', position: {group: 2, period: 4}, number: 20, mass: 40.078, state: ElementState.SOLID, group: ElementGroup.ALKALINE_EARTH_METAL, section: TableSection.S},
  {name: 'Scandium', short: 'Sc', position: {group: 3, period: 4}, number: 21, mass: 44.956, state: ElementState.SOLID, group: ElementGroup.TRANSITION_METAL, section: TableSection.D},
  {name: 'Titanium', short: 'Ti', position: {group: 4, period: 4}, number: 22, mass: 47.867, state: ElementState.SOLID, group: ElementGroup.TRANSITION_METAL, section: TableSection.D},
  {name: 'Vanadium', short: 'V', position: {group: 5, period: 4}, number: 23, mass: 50.942, state: ElementState.SOLID, group: ElementGroup.TRANSITION_METAL, section: TableSection.D},
  {name: 'Chromium', short: 'Cr', position: {group: 6, period: 4}, number: 24, mass: 51.996, state: ElementState.SOLID, group: ElementGroup.TRANSITION_METAL, section: TableSection.D},
  {name: 'Manganese', short: 'Mn', position: {group: 7, period: 4}, number: 25, mass: 54.938, state: ElementState.SOLID, group: ElementGroup.TRANSITION_METAL, section: TableSection.D},
  {name: 'Iron', short: 'Fe', position: {group: 8, period: 4}, number: 26, mass: 55.845, state: ElementState.SOLID, group: ElementGroup.TRANSITION_METAL, section: TableSection.D},
  {name: 'Cobalt', short: 'Co', position: {group: 9, period: 4}, number: 27, mass: 58.933, state: ElementState.SOLID, group: ElementGroup.TRANSITION_METAL, section: TableSection.D},
  {name: 'Nickel', short: 'Ni', position: {group: 10, period: 4}, number: 28, mass: 58.693, state: ElementState.SOLID, group: ElementGroup.TRANSITION_METAL, section: TableSection.D},
  {name: 'Copper', short: 'Cu', position: {group: 11, period: 4}, number: 29, mass: 63.546, state: ElementState.SOLID, group: ElementGroup.TRANSITION_METAL, section: TableSection.D},
  {name: 'Zinc', short: 'Zn', position: {group: 12, period: 4}, number: 30, mass: 65.38, state: ElementState.SOLID, group: ElementGroup.TRANSITION_METAL, section: TableSection.D},
  {name: 'Gallium', short: 'Ga', position: {group: 13, period: 4}, number: 31, mass: 69.723, state: ElementState.SOLID, group: ElementGroup.POST_TRANSITION_METAL, section: TableSection.P},
  {name: 'Germanium', short: 'Ge', position: {group: 14, period: 4}, number: 32, mass: 72.630, state: ElementState.SOLID, group: ElementGroup.METALLOID, section: TableSection.P},
  {name: 'Arsenic', short: 'As', position: {group: 15, period: 4}, number: 33, mass: 74.922, state: ElementState.SOLID, group: ElementGroup.METALLOID, section: TableSection.P},
  {name: 'Selenium', short: 'Se', position: {group: 16, period: 4}, number: 34, mass: 78.971, state: ElementState.SOLID, group: ElementGroup.OTHER_NON_METAL, section: TableSection.P},
  {name: 'Bromine', short: 'Br', position: {group: 17, period: 4}, number: 35, mass: 79.904, state: ElementState.SOLID, group: ElementGroup.OTHER_NON_METAL, section: TableSection.P},
  {name: 'Krypton', short: 'Kr', position: {group: 18, period: 4}, number: 36, mass: 83.798, state: ElementState.SOLID, group: ElementGroup.NOBLE_GAS, section: TableSection.P},
];
function GetElementByNumber(number) {
  try {
    return (ElementsArray[number - 1])
  } catch (e) {}
}

class Element extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div style={{borderColor: GetElementByNumber(this.props.number).group.color}} className='element'>
          <p className={'number'}>{this.props.number}</p>
          <p className={'short'} style={{color: GetElementByNumber(this.props.number).state.color}}>{GetElementByNumber(this.props.number).short}</p>
          <p className={'mass'}>{GetElementByNumber(this.props.number).mass}</p>
          <p className={'name'}>{GetElementByNumber(this.props.number).name}</p>
          <div style={{backgroundColor: GetElementByNumber(this.props.number).group.color}} className={'sub'}>{GetElementByNumber(this.props.number).group.code}</div>
          <div className={'dropdownContent'}>
            <p className={'numberLarge'}>{this.props.number}</p>
            <p className={'shortLarge'} style={{color: GetElementByNumber(this.props.number).state.color}}>{GetElementByNumber(this.props.number).short}</p>
            <p className={'massLarge'}>{GetElementByNumber(this.props.number).mass}</p>
            <p className={'nameLarge'}>{GetElementByNumber(this.props.number).name}</p>
          </div>
        </div>
    )
  }
}

function FindElement(group, period) {
  let i;
  for (i = 0; i < ElementsArray.length; i ++) {
    if (ElementsArray[i].position.group === group && ElementsArray[i].position.period === period) {
      return (
          <Element number={ElementsArray[i].number}/>
      );
    }
  }
  return (
      <div/>
  );
}

function GenerateTable() {
  let tableRow = [];
  let i;
  for (i = 0; i <= 18; i ++) {
    if (i !== 0) {
      tableRow.push(<td className={'groupNumber'}>{i}</td>);
    } else {
      tableRow.push(<td/>);
    }
  }
  let tableBody = [];
  for (i = 1; i <= 7; i ++) {
    let tableRow = [];
    let n;
    for (n = 0; n <= 18; n ++) {
      if (n === 0) {
        tableRow.push(<td>{i}</td>);
      } else {
        tableRow.push(<td>{FindElement(n, i)}</td>);
      }
    }
    tableBody.push(<tr>{tableRow}</tr>);
  }
  return (
      <table className={'master'}>
        <thead>
        <tr>{tableRow}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
  )
}

function App() {
  return (
    <div>
      {GenerateTable()}
      <div className={'hint'}>
        <table>
          <tr>
            <td><div style={{color: ElementState.SOLID.color, fontWeight: 'bold', textAlign: 'center', border: 'black thin solid', width: '1.5vw', height: '1.5vw', fontSize: '1vw'}}>C</div></td>
            <td style={{color: ElementState.SOLID.color, fontWeight: 'bold', fontSize: '1.2vw'}}>SOLID</td>
          </tr>
          <tr>
            <td><div style={{color: ElementState.LIQUID.color, fontWeight: 'bold', textAlign: 'center', border: 'black thin solid', width: '1.5vw', height: '1.5vw', fontSize: '1vw'}}>Hg</div></td>
            <td style={{color: ElementState.LIQUID.color, fontWeight: 'bold', fontSize: '1.2vw'}}>LIQUID</td>
          </tr>
          <tr>
            <td><div style={{color: ElementState.GAS.color, fontWeight: 'bold', textAlign: 'center', border: 'black thin solid', width: '1.5vw', height: '1.5vw', fontSize: '1vw'}}>H</div></td>
            <td style={{color: ElementState.GAS.color, fontWeight: 'bold', fontSize: '1.2vw'}}>GAS</td>
          </tr>
          <tr>
            <td><div style={{color: ElementState.UNKNOWN.color, fontWeight: 'bold', textAlign: 'center', border: 'black thin solid', width: '1.5vw', height: '1.5vw', fontSize: '1vw'}}>Rf</div></td>
            <td style={{color: ElementState.UNKNOWN.color, fontWeight: 'bold', fontSize: '1.2vw'}}>UNKNOWN</td>
          </tr>
        </table>
      </div>
      <div className={'key'}>
        <table>

        </table>
      </div>
    </div>
  );
}

export default App;
