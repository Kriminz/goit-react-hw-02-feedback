import React, { Component } from "react";
import { Statistics } from 'components/Statistics/Statistics'
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification"

export class Feedback extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
    visible: false 
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {positivePercentage: Math.round((prevState.good / prevState.total) * 100)};
    });
  };

  show = () => {
    this.setState({visible: true});
  };

  onClickGood = () => {
    this.setState({ good: this.state.good + 1});
    this.countTotalFeedback();
    this.show();
  };
  onClickNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1});
    this.countTotalFeedback();
    this.show();
  };
  onClickBad = () => {
    this.setState({ bad: this.state.bad + 1});
    this.countTotalFeedback();
    this.show();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {total: prevState.good + prevState.neutral + prevState.bad};
    });
    this.countPositiveFeedbackPercentage();
    console.log(this.state.total);
  };

  render(){
    const {good, neutral, bad, total, positivePercentage} = this.state;

    const onLeave = {bad: this.onClickBad, good: this.onClickGood, neutral: this.onClickNeutral};

    return(
      <div>
        <Section title="Leave YOUR feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={onLeave} />
        </Section>

        {!this.state.visible 
        ? (<Notification message="There is no feedback"/>) 
        : ( <Section title="Statistic">
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          </Section>) }
      </div>
    )
  }
}