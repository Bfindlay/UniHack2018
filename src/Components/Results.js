import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GuageChart, ResultsBarChart } from './';


class Results extends Component {

    constructor() {
        super();
    }

    render() {
        const {
            category,
            successful,
            ratio,
            similarGoalAvg,
            similarBackersAvg,
            similarPledgeAvg,
            categoryGoalAvg,
            categoryBackersAvg,
            categoryPledgeAvg,
        } = this.props.App.results;
        return (
            <div className='content-box'>
                <div className="top-panel">
                    <GuageChart value={ratio * 100} />
                </div>
                <div className='bottom-panel'>
                    <ResultsBarChart similarAvg={similarGoalAvg} categoryAvg={categoryGoalAvg} invert={false} />
                    <ResultsBarChart similarAvg={similarBackersAvg} categoryAvg={categoryBackersAvg} invert={true} />
                    <ResultsBarChart similarAvg={similarPledgeAvg} categoryAvg={categoryPledgeAvg} invert={false} />
                </div>
            </div>
        )
    }
}

const mapStateToProp = ({ App }) => ({ App });
export default connect(mapStateToProp, {})(Results);