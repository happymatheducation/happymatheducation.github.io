import React, { Component, useReducer } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class LinearEquations extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswerIsFraction: null,
        correctAnswer: '', // including sign

        correctAnswerSign: '',
        correctNumerator: '',
        correctDenominator: '',

        userAnswerIsFraction: null,
        userAnswer: '',  // including sign

        userNumerator: '',
        userDenominator: '',

        userAnswerRawString:'',
    };

    generateQuestion = () => {
        // 0.666666666666666 === 2 / 3 // false
        // 0.6666666666666666 === 2 / 3 // true
        let xIntercept = myMath.randomInteger(1, 5);
        let yIntercept = myMath.randomInteger(1, 5);
        xIntercept = Math.random() > 0.5 ? xIntercept : -xIntercept;
        yIntercept = Math.random() > 0.5 ? yIntercept : -yIntercept;
        let slope = -yIntercept / xIntercept;
        let slopeFraction = myMath.reduceFraction(-yIntercept, xIntercept);
        let slopeTex = myMath.fractionToTex(slopeFraction);

        let scaleFactor = myMath.randomInteger(0, 10);
        xIntercept *= scaleFactor;
        yIntercept *= scaleFactor;
        let allPoints = [];

        for (let x = -50; x <= 50; x++) {
            for (let y = -50; y <= 50; y++) {
                if ((y - yIntercept) * slopeFraction[1] === x * slopeFraction[0]
                    && x * y !== 0)
                { allPoints.push([x,y]) }
            }
        }

        let [iP, iQ, iR] = myMath.randomDistinctIntegers(allPoints.length, 0, allPoints.length - 1);
        let [[xP, yP], [xQ, yQ], [xR, yR]] = [allPoints[iP], allPoints[iQ], allPoints[iR]];

        // [0,1,2,3,4,5]
        // [m,b,a,P,Q,R]
        let allConditionIndexes = myMath.randomDistinctIntegers(3, 0, 5);

        if (xIntercept === 0) {
            while (allConditionIndexes.includes(1) && allConditionIndexes.includes(2)) {
                allConditionIndexes = myMath.randomDistinctIntegers(3, 0, 5);
            }
        }

        if (!allConditionIndexes.includes(3)) { allConditionIndexes = allConditionIndexes.map(e => e > 3 ? e - 1 : e) }
        if (!allConditionIndexes.includes(3)) { allConditionIndexes = allConditionIndexes.map(e => e > 3 ? e - 1 : e) }
        if (!allConditionIndexes.includes(4)) { allConditionIndexes = allConditionIndexes.map(e => e > 4 ? e - 1 : e) }

        
        let [conditionIndex1, conditionIndex2, questionIndex] = allConditionIndexes;


        let askingX = Math.random() > 0.5 ? true : false;
        let allConditionsTex = [
            slopeTex,
            yIntercept+'',
            xIntercept+'',
            questionIndex === 3
                ? askingX ? 'P(x_P,' + yP + ')' : 'P(' + xP + ',y_P)'
                : 'P(' + xP + ',' + yP + ')',
            questionIndex === 4
                ? askingX ? 'Q(x_Q,' + yQ + ')' : 'Q(' + xQ + ',y_Q)'
                : 'Q(' + xQ + ',' + yQ + ')',
            questionIndex === 5
                ? askingX ? 'R(x_R,' + yR + ')' : 'R(' + xR + ',y_R)'
                : 'R(' + xR + ',' + yR + ')'
        ]

        let conditionTex1, conditionTex2, questionTex;
        let lTex = <MathComponent display={false} tex={'l'} />;
        conditionTex1 = <MathComponent display={false} tex={allConditionsTex[conditionIndex1]} />;
        conditionTex2 = <MathComponent display={false} tex={allConditionsTex[conditionIndex2]} />;

        switch (conditionIndex1) {
            case 0:
                conditionTex1 = <>The slope of line {lTex} is {conditionTex1}. </>;
                break;
            case 1:
                conditionTex1 = <>The y-intercept of line {lTex} is {conditionTex1}. </>;
                break;
            case 2:
                conditionTex1 = <>The x-intercept of line {lTex} is {conditionTex1}. </>;
                break;
            case 3:
                conditionTex1 = <>The point {conditionTex1} is on the line {lTex}. </>;
                break;
            case 4:
                conditionTex1 = <>The point {conditionTex1} is on the line {lTex}. </>;
                break;
            case 5:
                conditionTex1 = <>The point {conditionTex1} is on the line {lTex}. </>;
                break;
            default:
                console.log(conditionIndex1);
                break;
        }

        switch (conditionIndex2) {
            case 0:
                conditionTex2 = <>The slope of line {lTex} is {conditionTex2}. </>;
                break;
            case 1:
                conditionTex2 = <>The y-intercept of line {lTex} is {conditionTex2}. </>;
                break;
            case 2:
                conditionTex2 = <>The x-intercept of line {lTex} is {conditionTex2}. </>;
                break;
            case 3:
                conditionTex2 = <>The point {conditionTex2} is on the line {lTex}. </>;
                break;
            case 4:
                conditionTex2 = <>The point {conditionTex2} is on the line {lTex}. </>;
                break;
            case 5:
                conditionTex2 = <>The point {conditionTex2} is on the line {lTex}. </>;
                break;
            default:
                console.log(conditionIndex2);
                break;
        }

        let askingCoordinateTex;
        let correctAnswer;
        let correctNumerator, correctDenominator;

        switch (questionIndex) {
            case 0:
                questionTex = <><br />What is the slope of line {lTex}? </>;
                correctAnswer = slope;
                [correctNumerator, correctDenominator] = slopeFraction;
                break;
            case 1:
                questionTex = <><br />What is the y-intercept of line {lTex}? </>;
                correctAnswer = yIntercept;
                break;
            case 2:
                questionTex = <><br />What is the x-intercept of line {lTex}? </>;
                correctAnswer = xIntercept;
                break;
            case 3:
                askingCoordinateTex = askingX ? 'x_P' : 'y_P';
                questionTex = <>The point <MathComponent display={false} tex={allConditionsTex[questionIndex]} /> is on the line {lTex}. <br />What is <MathComponent display={false} tex={askingCoordinateTex} />? </>;
                correctAnswer = askingX ? xP : yP;
                break;
            case 4:
                askingCoordinateTex = askingX ? 'x_Q' : 'y_Q';
                questionTex = <>The point <MathComponent display={false} tex={allConditionsTex[questionIndex]} /> is on the line {lTex}. <br />What is <MathComponent display={false} tex={askingCoordinateTex} />? </>;
                correctAnswer = askingX ? xQ : yQ;
                break;
            case 5:
                askingCoordinateTex = askingX ? 'x_R' : 'y_R';
                questionTex = <>The point <MathComponent display={false} tex={allConditionsTex[questionIndex]} /> is on the line {lTex}. <br />What is <MathComponent display={false} tex={askingCoordinateTex} />? </>;
                correctAnswer = askingX ? xR : yR;
                break;
            default:
                console.log(questionIndex);
                break;
        }

        this.setState({ correctAnswer: correctAnswer });
        if (Number.isInteger(correctAnswer)) {
            this.setState({
                correctAnswerIsFraction: false,
                correctDenominator: '',
                correctNumerator: '',
                correctAnswerSign: '',
            });
        } else {
            this.setState({ correctAnswerSign: correctNumerator * correctDenominator > 0 ? '' : '-' });
            correctNumerator = Math.abs(correctNumerator);
            correctDenominator = Math.abs(correctDenominator);
            this.setState({
                correctAnswerIsFraction: true,
                correctNumerator: correctNumerator,
                correctDenominator: correctDenominator,
            })
        }

        let conditions, mGiven, bGiven
        if (allConditionIndexes.includes(5)) {
            conditions = <>The points <MathComponent display={false} tex={allConditionsTex[3] + ', ' + allConditionsTex[4] + ', ' + allConditionsTex[5]} /> are on the same line.
                <br />What is <MathComponent display={false} tex={askingCoordinateTex} />? </>
        } else if (allConditionIndexes.includes(4)) {
            conditions = <>The points <MathComponent display={false} tex={allConditionsTex[3] + ', ' + allConditionsTex[4]} /> are on the line {lTex}. </>
            conditionTex1 = conditionIndex1 <= 2 ? conditionTex1 : '';
            conditionTex2 = conditionIndex2 <= 2 ? conditionTex2 : '';
            questionTex = questionIndex <= 2 ? questionTex : <><br />What is < MathComponent display={false} tex={askingCoordinateTex} />? </>
            conditions = <>{conditions} {conditionTex1} {conditionTex2} {questionTex}</>
        } else if (allConditionIndexes.includes(3)) {
            mGiven = conditionIndex1 === 0 || conditionIndex2 === 0;
            bGiven = conditionIndex1 === 1 || conditionIndex2 === 1;
            conditions = <>The point <MathComponent display={false} tex={allConditionsTex[3]} /> is on the line {lTex}
                <MathComponent display={false} tex={':y={' +
                    (mGiven
                    ? slope === 1
                        ? ''
                        : slope === -1 ? '-' : slopeTex
                    : 'm'
                    ) + '}x' +
                    (bGiven 
                    ? yIntercept >= 0
                        ? yIntercept === 0
                            ? ''
                            : ('+' + yIntercept)
                        : yIntercept
                    : '+b')} />. </>
            conditionTex1 = conditionIndex1 === 2 ? conditionTex1 : '';
            conditionTex2 = conditionIndex2 === 2 ? conditionTex2 : '';
            questionTex = questionIndex <= 2 ? questionTex : <><br />What is < MathComponent display={false} tex={askingCoordinateTex} />? </>
            conditions = <>{conditions} {conditionTex1} {conditionTex2} {questionTex}</>
        } else if (allConditionIndexes.includes(2)) {
            mGiven = conditionIndex1 === 0 || conditionIndex2 === 0;
            bGiven = conditionIndex1 === 1 || conditionIndex2 === 1;
            if (questionIndex === 0) {
                conditions = <>The x-intercept of the line {lTex}
                    <MathComponent display={false} tex={':y={' +
                        (mGiven
                            ? slope === 1
                                ? ''
                                : slope === -1 ? '-' : slopeTex
                            : 'm'
                        ) + '}x' +
                        (bGiven
                            ? yIntercept >= 0
                                ? yIntercept === 0
                                    ? ''
                                    : ('+' + yIntercept)
                                : yIntercept
                            : '+b')} /> is {xIntercept}. <br />What is m?
                </>
            } else if (questionIndex === 1) {
                conditions = <>The x-intercept of the line {lTex}
                    <MathComponent display={false} tex={':y={' +
                        (mGiven
                            ? slope === 1
                                ? ''
                                : slope === -1 ? '-' : slopeTex
                            : 'm'
                        ) + '}x' +
                        (bGiven
                            ? yIntercept >= 0
                                ? yIntercept === 0
                                    ? ''
                                    : ('+' + yIntercept)
                                : yIntercept
                            : '+b')} /> is {xIntercept}. <br />What is b?
                </>
            } else if (questionIndex === 2) {
                conditions = <><br />What is the x-intercept of the line {lTex}
                    <MathComponent display={false} tex={':y={' +
                        (mGiven
                            ? slope === 1
                                ? ''
                                : slope === -1 ? '-' : slopeTex
                            : 'm'
                        ) + '}x' +
                        (bGiven
                            ? yIntercept >= 0
                                ? yIntercept === 0
                                    ? ''
                                    : ('+' + yIntercept)
                                : yIntercept
                            : '+b')} />?
                </>
            }
        } else { conditions = <>{conditionTex1} {conditionTex2} {questionTex}</> }

        return <>
            {conditions} &nbsp;
            (Please type 'a/b' for fraction <MathComponent display={false} tex={'a \\over b'} />)</>
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswerIsFraction: null,
            userAnswer: '',
            userSign: '',
            userNumerator: '',
            userDenominator: '',
            userAnswerRawString: '',
        });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        let correctSlope;
        if (!this.state.userAnswerIsFraction) {
            if (parseFloat(this.state.userAnswer) === parseFloat(this.state.correctAnswer)) {
                return true;
            } 
        } else {
            let userNumerator = parseInt(this.state.userNumerator);
            let userDenominator = parseInt(this.state.userDenominator);
            let userSign='';
            if (userNumerator * userDenominator < 0) {
                userSign= '-';
                userNumerator = Math.abs(userNumerator);
                userDenominator = Math.abs(userDenominator);
            } 
            if (this.state.correctAnswerIsFraction
                && userNumerator === this.state.correctNumerator
                && userDenominator === this.state.correctDenominator
                && userSign === this.state.correctAnswerSign) { 
                return true;
            } 
        }
        if (!this.state.correctAnswerIsFraction) {
            correctSlope = this.state.correctAnswer;
        } else {
            correctSlope = <MathComponent display={false}
                tex={String.raw`${this.state.correctAnswerSign}{${this.state.correctNumerator} \over ${this.state.correctDenominator}}`} />;
        }
        return (<>Incorrect! The correct answer is {correctSlope}</>);
    }

    handleUserAnswer = (rawString) => {
        this.setState({ userAnswerRawString: rawString });
        if (rawString.includes("/")) {
            let fractionPosition = rawString.indexOf("/");
            let numerator = rawString.substring(0, fractionPosition);
            let denominator = rawString.substring(fractionPosition + 1);
            this.setState({
                userAnswerIsFraction: true,
                userNumerator: numerator,
                userDenominator: denominator,
                userAnswer: '',
            });
        } else {
            this.setState({
                userAnswerIsFraction: false,
                userAnswer: rawString,
                userNumerator: '',
                userDenominator: '',
            })
        }
    }


    render() {
        let answerForm = (<>
            Your answer: <input type="text" value={this.state.userAnswerRawString} ref={this.answerForm} autoFocus 
                onChange={e => this.handleUserAnswer(e.target.value )}></input><br />
        </>);
        return (
            <FillBlanks
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}
                clearAnswerForm={this.clearAnswerForm}
                answerForm={answerForm}
            />
        );
    }
}

export default LinearEquations;
