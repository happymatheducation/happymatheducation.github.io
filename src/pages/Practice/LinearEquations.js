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
        let xP, yP, xQ, yQ, xR, yR, t, dx, dy

        xP = myMath.randomInteger(1, 5);
        yP = myMath.randomInteger(1, 5);
        yQ = myMath.randomInteger(1, 5);
        xQ = myMath.randomInteger(1, 5);
        [xP, yP, yQ, xQ] = [xP, yP, yQ, xQ].map(e => Math.random() > 0.5 ? e * (-1) : e);
        // QR = t*PQ
        t = myMath.randomInteger(1, 10);
        dx = xQ - xP;
        dy = yQ - yP;
        xR = xQ + t * dx;
        yR = yQ + t * dy;

        while (xQ === xP || yQ === yP || xR === 0 || yR === 0) {
            xP = myMath.randomInteger(1, 5);
            yP = myMath.randomInteger(1, 5);
            yQ = myMath.randomInteger(1, 5);
            xQ = myMath.randomInteger(1, 5);
            [xP, yP, yQ, xQ] = [xP, yP, yQ, xQ].map(e => Math.random() > 0.5 ? e * (-1) : e);
            // QR = t*PQ
            t = myMath.randomInteger(1, 10);
            dx = xQ - xP;
            dy = yQ - yP;
            xR = xQ + t * dx;
            yR = yQ + t * dy;
        };

        let slope = (yQ - yP) / (xQ - xP);
        let slopeFraction = myMath.reduceFraction(yQ - yP, xQ - xP);
        let slopeTex = myMath.fractionToTex(slopeFraction);
        let yIntercept = (xQ * yP - yQ * xP) / (xQ - xP);
        let yInterceptFraction = myMath.reduceFraction(xQ * yP - yQ * xP, xQ - xP);
        let yInterceptTex = myMath.fractionToTex(yInterceptFraction);
        let xIntercept = (yQ * xP - xQ * yP) / (yQ - yP);
        let xInterceptFraction = myMath.reduceFraction(yQ * xP - xQ * yP, yQ - yP);
        let xInterceptTex = myMath.fractionToTex(xInterceptFraction);


        [[xP, yP], [xQ, yQ], [xR, yR]] = myMath.shuffleArray([[xP, yP], [xQ, yQ], [xR, yR]]);

        // [0,1,2,3,4,5]
        // [m,b,a,P,Q,R]
        let [conditionIndex1, conditionIndex2, questionIndex] = myMath.randomDistinctIntegers(3, 0, 5);

        let askingX = Math.random() > 0.5 ? true : false;
        let allConditionsTex = [
            slopeTex,
            yInterceptTex,
            xInterceptTex,
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
                questionTex = <>What is the slope of line {lTex}? </>;
                correctAnswer = slope;
                [correctNumerator, correctDenominator] = slopeFraction;
                break;
            case 1:
                questionTex = <>What is the y-intercept of line {lTex}? </>;
                correctAnswer = yIntercept;
                [correctNumerator, correctDenominator] = yInterceptFraction;
                break;
            case 2:
                questionTex = <>What is the x-intercept of line {lTex}? </>;
                correctAnswer = xIntercept;
                [correctNumerator, correctDenominator] = xInterceptFraction;
                break;
            case 3:
                askingCoordinateTex = askingX ? 'x_P' : 'y_P';
                questionTex = <>The point <MathComponent display={false} tex={allConditionsTex[questionIndex]} /> is on the line {lTex}. What is <MathComponent display={false} tex={askingCoordinateTex} />? </>;
                correctAnswer = askingX ? xP : yP;
                break;
            case 4:
                askingCoordinateTex = askingX ? 'x_Q' : 'y_Q';
                questionTex = <>The point <MathComponent display={false} tex={allConditionsTex[questionIndex]} /> is on the line {lTex}. What is <MathComponent display={false} tex={askingCoordinateTex} />? </>;
                correctAnswer = askingX ? xQ : yQ;
                break;
            case 5:
                askingCoordinateTex = askingX ? 'x_R' : 'y_R';
                questionTex = <>The point <MathComponent display={false} tex={allConditionsTex[questionIndex]} /> is on the line {lTex}. What is <MathComponent display={false} tex={askingCoordinateTex} />? </>;
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
        return <>
            {conditionTex1}
            {conditionTex2}
            {questionTex}<br/>
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
