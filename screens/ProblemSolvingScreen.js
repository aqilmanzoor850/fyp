import React from 'react';
import {Text, View} from 'react-native';
import ProblemSolvingModule from '../components/ProblemSolvingModule';

class ProblemSolvingScreen extends React.Component{
    constructor(props){
        super(props);
        this.reactProblemScreenHandler = this.reactProblemScreenHandler.bind(this);
    }
    reactProblemScreenHandler(){
        this.props.navigation.navigate('reactProb');
    }
    androidProblemScreenHandler = () => {
        this.props.navigation.navigate('androidProb');
    }
    phpProblemScreenHandler = () => {
        this.props.navigation.navigate('phpProb');
    }
    pythonProblemScreenHandler = () => {
        this.props.navigation.navigate('pythonProb');
    }
    cProblemScreenHandler = () => {
        this.props.navigation.navigate('cProb');
    }
    assemblyProblemScreenHandler = () => {
        this.props.navigation.navigate('assemblyProb');
    }
    machineLearningProblemScreenHandler = () => {
        this.props.navigation.navigate('mlProb');
    }
    dvProblemScreenHandler = () => {
        this.props.navigation.navigate('dvProb');
    }
    render(){
        return(
            <ProblemSolvingModule
                reactProblemScreenHandler = {this.reactProblemScreenHandler}
                androidProblemScreenHandler = {this.androidProblemScreenHandler}
                phpProblemScreenHandler = {this.phpProblemScreenHandler}
                pythonProblemScreenHandler = {this.pythonProblemScreenHandler}
                cProblemScreenHandler = {this.cProblemScreenHandler}
                assemblyProblemScreenHandler = {this.assemblyProblemScreenHandler}
                machineLearningProblemScreenHandler = {this.machineLearningProblemScreenHandler}
                dvProblemScreenHandler = {this.dvProblemScreenHandler}
            />
        );
    }
}
export default ProblemSolvingScreen;