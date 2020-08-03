import React from 'react';
import {View, Text} from 'react-native';

import ReactBook from '../BooksModule/ReactBook';
import BookModule from '../components/booksModule';

class BookScreen extends React.Component{
    constructor(props){
        super(props);
        this.reactBookHandler = this.reactBookHandler.bind(this);
        this.phpBookHandler = this.phpBookHandler.bind(this);
        this.cBookHandler = this.cBookHandler.bind(this);
        this.cPlusPlusBookHandler = this.cPlusPlusBookHandler.bind(this);
        this.androidBookHandler = this.androidBookHandler.bind(this);
        this.assemblyBookHandler = this.assemblyBookHandler.bind(this);
        this.RlanguaueBookHandler = this.RlanguaueBookHandler.bind(this);
        this.ReactNativeBookHandler =this.ReactNativeBookHandler.bind(this);
        this.swiftBookHandler =this.swiftBookHandler.bind(this);
        this.pythonBookHandler =this.pythonBookHandler.bind(this);
        this.softBookHandler =this.softBookHandler.bind(this);
        this.oprBookHandler =this.oprBookHandler.bind(this);
        this.csharpBookHandler =this.csharpBookHandler.bind(this);
        this.dataStrBookHandler =this.dataStrBookHandler.bind(this);
        this.compNetBookHandler =this.compNetBookHandler.bind(this);
        this.webBookHandler =this.webBookHandler.bind(this);
        this.phpBookHandler =this.phpBookHandler.bind(this);
        this.AiBookHandler =this.AiBookHandler.bind(this);
        this.datawareBookHandler =this.datawareBookHandler.bind(this);
        this.datavisBookHandler =this.datavisBookHandler.bind(this);
        this.dataminBookHandler =this.dataminBookHandler.bind(this);
        this.machineBookHandler =this.machineBookHandler.bind(this);
        this.oopBookHandler =this.oopBookHandler.bind(this);

    }
    reactBookHandler(){
        this.props.navigation.navigate('reactBook')
    }
    phpBookHandler(){
        this.props.navigation.navigate('phpBook')
    }
    cBookHandler(){
        this.props.navigation.navigate('cBook')
    }
    cPlusPlusBookHandler(){
        this.props.navigation.navigate('cplusBook')
    }
    androidBookHandler() {
        this.props.navigation.navigate('androidBook')
    }
    javaBookHandler =  () => {
        this.props.navigation.navigate('javaBook')
    }
    assemblyBookHandler =  () => {
        this.props.navigation.navigate('assemblyBook')
    }
    RlanguaueBookHandler =  () => {
        this.props.navigation.navigate('Rlanguague')
    }
    ReactNativeBookHandler =  () => {
        this.props.navigation.navigate('ReactNative')
    }
    swiftBookHandler =  () => {
        this.props.navigation.navigate('swiftBook')
    }
    pythonBookHandler =  () => {
        this.props.navigation.navigate('pythonBook')
    }
    softBookHandler =  () => {
        this.props.navigation.navigate('SoftwareEngBook')
    }
    oprBookHandler =  () => {
        this.props.navigation.navigate('oprSystemBook')
    }
    csharpBookHandler =  () => {
        this.props.navigation.navigate('csharpBook')
    }
    dataStrBookHandler =  () => {
        this.props.navigation.navigate('dataStrBook')
    }
    compNetBookHandler =  () => {
        this.props.navigation.navigate('compNetBook')
    }
    webBookHandler =  () => {
        this.props.navigation.navigate('webBook')
    }
    phpBookHandler =  () => {
        this.props.navigation.navigate('phpBook')
    }
    AiBookHandler =  () => {
        this.props.navigation.navigate('AiBook')
    }
    datawareBookHandler =  () => {
        this.props.navigation.navigate('datawareBook')
    }
    datavisBookHandler =  () => {
        this.props.navigation.navigate('datavisBook')
    }
    dataminBookHandler =  () => {
        this.props.navigation.navigate('dataminBook')
    }
    machineBookHandler =  () => {
        this.props.navigation.navigate('machineBook')
    }
    oopBookHandler =  () => {
        this.props.navigation.navigate('oopBook')
    }
    render(){
        return(
           <BookModule
           reactBookHandler = {this.reactBookHandler}
           phpBookHandler = {this.phpBookHandler}
           cBookHandler = {this.cBookHandler}
           cPlusPlusBookHandler = {this.cPlusPlusBookHandler}
           androidBookHandler = {this.androidBookHandler}
           javaBookHandler = {this.javaBookHandler}
           assemblyBookHandler = {this.assemblyBookHandler}
           RlanguaueBookHandler = {this.RlanguaueBookHandler}
           ReactNativeBookHandler ={this.ReactNativeBookHandler}
           swiftBookHandler ={this.swiftBookHandler}
           pythonBookHandler ={this.pythonBookHandler}
           softBookHandler ={this.softBookHandler}
           oprBookHandler ={this.oprBookHandler}
           csharpBookHandler ={this.csharpBookHandler}
           dataStrBookHandler ={this.dataStrBookHandler}
           compNetBookHandler ={this.compNetBookHandler}
           webBookHandler ={this.webBookHandler}
           phpBookHandler ={this.phpBookHandler}
           AiBookHandler ={this.AiBookHandler}
           datawareBookHandler ={this.datawareBookHandler}
           datavisBookHandler ={this.datavisBookHandler}
           dataminBookHandler ={this.dataminBookHandler}
           machineBookHandler ={this.machineBookHandler}
           oopBookHandler ={this.oopBookHandler}

 
            />
        );
    }
}
export default BookScreen;