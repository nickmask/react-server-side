'use strict';

import React from 'react';
import AthletePreview from '../AthletePreview/AthletePreview';
import athletes from '../../data/athletes';
import { Link } from 'react-router'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
        </div>
        <Link to="/shows">Shows</Link>
      </div>
    );
  }
}
