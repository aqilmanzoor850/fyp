import React from 'react';
import { StyleSheet } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import store from './store'
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import SignUpScreen from './screens/SignUpScreen';
import forgetpassword from './screens/ForgetPasswordScreen';
import MapScreen from './screens/MapScreen';
import TopUniversitiesScreen from './screens/TopUniversitiesScreen'; 
import Spinner from './components/Spinner';

import VideoScreen from './screens/VideoScreen';
import Reacts from './tutorialModules/Reacts';
import C from './tutorialModules/C';
import JavaTutorials from './tutorialModules/java';
import R from './tutorialModules/r';
import Swift from './tutorialModules/swift';
import SoftwareEngineering from './tutorialModules/softwareEngineering'
import Python from './tutorialModules/python';
import OperatingSystem from './tutorialModules/operatingSystem';
import DataStructure from './tutorialModules/dataStructure';
import Web from './tutorialModules/web';
import Php from './tutorialModules/php';

import BookScreen from './screens/BookScreen';
import ReactBook from './BooksModule/ReactBook';
import php_Book from './BooksModule/phpBook';
import c_Book from './BooksModule/cBook';
import cplusBook from './BooksModule/c++Book';
import androidBook from './BooksModule/androidBook';
import javaBook from './BooksModule/javaBook';
import assemblyBook from './BooksModule/assemblyBook';
import Rlanguague from './BooksModule/Rlanguague';
import ReactNative from './BooksModule/ReactNative';
import swiftBook from './BooksModule/swiftBook';
import pythonBook from './BooksModule/pythonBook';
import SoftwareEngBook from './BooksModule/SoftwareEngBook';
import oprSystemBook from './BooksModule/oprSystemBook';
import cSharpBook from './BooksModule/cSharpBook';
import dataStrBook from './BooksModule/dataStrBook';
import compNetBook from './BooksModule/compNetBook';
import webBook from './BooksModule/webBook';
import phpBook from './BooksModule/phpBook';
import AiBook from './BooksModule/AiBook';
import datawareBook from './BooksModule/datawareBook';
import datavisBook from './BooksModule/datavisBook';
import dataminBook from './BooksModule/dataminBook';
import machineBook from './BooksModule/machineBook';
import oopBook from './BooksModule/oopBook';


import ProblemSolvingScreen from './screens/ProblemSolvingScreen';
import ReactProblem from './ProblemSolvingModule/ReactProblems/ReactProblem';
import AddReactProblem from './ProblemSolvingModule/ReactProblems/AddReactProblem';
import ReactProblemSolutions from './ProblemSolvingModule/ReactProblems/ReactProblemSolutions';
import picture from './ProblemSolvingModule/PictureScreen';
import SolutionPicture from './ProblemSolvingModule/SolutionPicture';
import AddReactSolution from './ProblemSolvingModule/ReactProblems/AddReactSolution';
import AndroidProblems from './ProblemSolvingModule/AndroidProblems/AndroidProblems';
import AddAndroidProblem from './ProblemSolvingModule/AndroidProblems/AddAndroidProblem';
import AndroidSolution from './ProblemSolvingModule/AndroidProblems/AndroidSolutions';
import AddAndroidSolution from './ProblemSolvingModule/AndroidProblems/AddAndroidSolution';
import PhpProblems from './ProblemSolvingModule/PhpProblems/PhpProblem';
import AddPhpProblems from './ProblemSolvingModule/PhpProblems/AddPhpProblem';
import PhpSolutions from './ProblemSolvingModule/PhpProblems/PhpSolution';
import AddPhpSolutions from './ProblemSolvingModule/PhpProblems/AddPhpSolution';
import PythonProblems from './ProblemSolvingModule/PythonProblems/PythonProblems';
import AddPythonProblems from './ProblemSolvingModule/PythonProblems/AddPythonProblem';
import PythonSolutions from './ProblemSolvingModule/PythonProblems/PythonSolution';
import AddPythonSolution from './ProblemSolvingModule/PythonProblems/AddPythonSolution';
import CProblems from './ProblemSolvingModule/C_Problems/C_Problems';
import AddCProblem from './ProblemSolvingModule/C_Problems/AddC_Probems';
import CSolutions from './ProblemSolvingModule/C_Problems/C_Solutions';
import AddCSolution from './ProblemSolvingModule/C_Problems/AddC_Solutions';
import AssemblyProblems from './ProblemSolvingModule/AssemblyProblems/AssemblyProblem';
import AddAssemblyProblem from './ProblemSolvingModule/AssemblyProblems/AddAssemblyProblems';
import AssemblySolutions from './ProblemSolvingModule/AssemblyProblems/AssemblySolution';
import AddAssemblySolutions from './ProblemSolvingModule/AssemblyProblems/AddAssemblySolutions';
import MLProblems from './ProblemSolvingModule/MachineLearingProblems/MLProblems';
import AddMLProblem from './ProblemSolvingModule/MachineLearingProblems/AddMLProblems';
import MLSolutions from './ProblemSolvingModule/MachineLearingProblems/MLSolutions';
import AddMLSolution from './ProblemSolvingModule/MachineLearingProblems/AddMLSolutions';
import DVProblems from './ProblemSolvingModule/DataVisualization/DVProblems';
import AddDVProblem from './ProblemSolvingModule/DataVisualization/AddDVProblems';
import DVSolutions from './ProblemSolvingModule/DataVisualization/DVSolutions';
import AddDVSolution from './ProblemSolvingModule/DataVisualization/AddDVSolutions';

import JobScreen from './screens/JobScreen';
import JobModule from './components/JobModule';
import ShowJobs from './Jobs/showJobs';

import Authentication from './components/Auth';

import DropDown from './components/dropDownlist';
import UniversityFinder from './components/UniversityFinder';
import UniversityFinder1 from './components/UniversityFinder1';
import DetailJob from './Jobs/detailJobScreen';

export const firebaseConfig = {
  apiKey: "AIzaSyAC8IUU7fTox1vW6WZ9fTKGr9fFwVP2hBQ",
  authDomain: "skilled-eon-250517.firebaseapp.com",
  databaseURL: "https://skilled-eon-250517.firebaseio.com",
  projectId: "skilled-eon-250517",
  storageBucket: "gs://skilled-eon-250517.appspot.com",
  messagingSenderId: "215931286851",
  appId: "1:215931286851:web:a0f329f19a9360eb"
};
class App extends React.Component{
    componentDidMount(){
      <Spinner />
      console.log('App js wala will mount');
        // export const firebaseConfig = {
        //   apiKey: "AIzaSyAC8IUU7fTox1vW6WZ9fTKGr9fFwVP2hBQ",
        //   authDomain: "skilled-eon-250517.firebaseapp.com",
        //   databaseURL: "https://skilled-eon-250517.firebaseio.com",
        //   projectId: "skilled-eon-250517",
        //   storageBucket: "",
        //   messagingSenderId: "215931286851",
        //   appId: "1:215931286851:web:a0f329f19a9360eb"
        // };
        // Initialize Firebase
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
       }
        //firebase.initializeApp(firebaseConfig);
     
  }
  componentWillUpdate(){
    console.log('ya bhi chllta a ya ni ')
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          this.setState({ LoggedIn: true });
      } else {
          this.setState({ LoggedIn: false });
      }
  });

}
  

   render(){
    const authNavigation = createStackNavigator({    
      welcome: {screen: WelcomeScreen, navigationOptions: {header: null}},
      authentication: {screen: AuthScreen, navigationOptions: {header:null}},
      signuup: {screen: SignUpScreen, navigationOptions: {header:null}},  
      forgetpass: {screen: forgetpassword, navigationOptions: {header: null}},
      auth: {screen: Authentication, navigationOptions:{header:null}}
    },
    {
      initialRouteName: "welcome"
    });
    const mapNavigation = createStackNavigator({
      
      map: {screen: MapScreen, navigationOptions: {header:null}},

      topUni: {screen: TopUniversitiesScreen, navigationOptions: {header:null}},
      dropDown: {screen: DropDown, navigationOptions: {header: null}},
      uniFinder: {screen: UniversityFinder, navigationOptions: {header: null}},
      uniFinder1: {screen: UniversityFinder1, navigationOptions: {header: null}},

      video: {screen: VideoScreen, navigationOptions: {header:null}},
      react: {screen: Reacts, navigationOptions: {header:null}},
      c: {screen: C, navigationOptions:{header:null}},
      java: {screen: JavaTutorials, navigationOptions:{header:null}},
      r: {screen: R, navigationOptions: {header: null}},
      swift: {screen: Swift, navigationOptions: {header:null}},
      se: {screen: SoftwareEngineering, navigationOptions: {header:null}},
      python: {screen: Python, navigationOptions: {header:null}},
      os: {screen: OperatingSystem, navigationOptions: {header: null}},
      ds: {screen: DataStructure, navigationOptions: {header: null}},
      web: {screen: Web, navigationOptions: {header:null}},
      php: {screen: Php, navigationOptions: {header:null}},

      book: {screen: BookScreen, navigationOptions: {header:null}},
      reactBook: {screen: ReactBook, navigationOptions: {header:null}},
      phpBook: {screen: php_Book, navigationOptions: {header:null}},
      cBook: {screen: c_Book, navigationOptions: {header:null}},
      cplusBook: {screen: cplusBook, navigationOptions: {header:null}},
      androidBook: {screen: androidBook, navigationOptions: {header:null}},
      javaBook: {screen: javaBook, navigationOptions: {header:null}},
      assemblyBook: {screen: assemblyBook, navigationOptions: {header:null}},
      Rlanguague: {screen: Rlanguague, navigationOptions: {header:null}},
      ReactNative: {screen: ReactNative, navigationOptions: {header:null}},
      swiftBook: {screen: swiftBook, navigationOptions: {header:null}},
      pythonBook: {screen: pythonBook, navigationOptions: {header:null}},
      SoftwareEngBook: {screen: SoftwareEngBook, navigationOptions: {header:null}},
      oprSystemBook: {screen: oprSystemBook, navigationOptions: {header:null}},
      cSharpBook: {screen: cSharpBook, navigationOptions: {header:null}},
      dataStrBook: {screen:dataStrBook, navigationOptions: {header:null}},
      compNetBook: {screen: compNetBook, navigationOptions: {header:null}},
      webBook: {screen: webBook, navigationOptions: {header:null}},
      phpBook: {screen: phpBook, navigationOptions: {header:null}},
      AiBook: {screen: AiBook, navigationOptions: {header:null}},
      datawareBook: {screen: datawareBook, navigationOptions: {header:null}},
      datavisBook: {screen: datavisBook, navigationOptions: {header:null}}, 
      dataminBook: {screen: dataminBook, navigationOptions: {header:null}},
      machineBook: {screen: machineBook, navigationOptions: {header:null}},
      oopBook: {screen: oopBook, navigationOptions: {header:null}},


      problemSolving: {screen: ProblemSolvingScreen, navigationOptions: {header: null}},
      pic: {screen: picture, navigationOptions: {header:null}},
      solPic: {screen: SolutionPicture, navigationOptions: {header:null}},

  
      reactProb: {screen: ReactProblem, navigationOptions: {header:null}},
      addreactprob: {screen: AddReactProblem, navigationOptions: {header: null}},
      reactSolution: {screen: ReactProblemSolutions, navigationOptions: {header: null}},
      addreactsol: {screen: AddReactSolution, navigationOptions: {header:null}},


      androidProb: {screen: AndroidProblems, navigationOptions: {header:null}},
      addAndroidProb: {screen: AddAndroidProblem, navigationOptions: {header:null}},
      androidSolution: {screen: AndroidSolution, navigationOptions: {header:null}},
      addAndroidSolution: {screen: AddAndroidSolution, navigationOptions: {header: null}},

      phpProb: {screen: PhpProblems, navigationOptions: {header: null}},
      addPhpProb: {screen: AddPhpProblems, navigationOptions: {header: null}},
      phpSolution: {screen: PhpSolutions, navigationOptions: {header:null}},
      addPhpSolution: {screen: AddPhpSolutions, navigationOptions: {header:null}},

      pythonProb: {screen: PythonProblems, navigationOptions: {header:null}},
      addPythonProb: {screen: AddPythonProblems, navigationOptions: {header:null}},
      pythonSolution: {screen: PythonSolutions, navigationOptions: {header: null}},
      addPythonSolution: {screen: AddPythonSolution, navigationOptions: {header: null}},

      cProb: {screen: CProblems, navigationOptions: {header:null}},
      addCProb: {screen: AddCProblem, navigationOptions: {header:null}},
      cSolution: {screen: CSolutions, navigationOptions: {header:null}},
      addCSolution: {screen: AddCSolution, navigationOptions: {header:null}},

      assemblyProb: {screen: AssemblyProblems, navigationOptions: {header:null}},
      addAssemblyProb: {screen: AddAssemblyProblem, navigationOptions: {header: null}},
      assemblySolution: {screen: AssemblySolutions, navigationOptions: {header:null}},
      addAssemblySolution: {screen: AddAssemblySolutions, navigationOptions: {header:null}},

      mlProb: {screen: MLProblems, navigationOptions: {header:null}},
      addMLProb: {screen: AddMLProblem, navigationOptions: {header:null}},
      mlSolution: {screen: MLSolutions, navigationOptions: {header: null}},
      addMLSolution: {screen: AddMLSolution, navigationOptions: {header: null}},

      dvProb: {screen: DVProblems, navigationOptions: {header:null}},
      addDVProb: {screen: AddDVProblem, navigationOptions: {header:null}},
      dvSolution: {screen: DVSolutions, navigationOptions: {header: null}},
      addDVSolution: {screen: AddDVSolution, navigationOptions: {header:null}},


      jobScreen: {screen: JobScreen, navigationOptions: {header: null}},
      jobMod: {screen: JobModule, navigationOptions: {header: null}},
      showJobs: {screen: ShowJobs, navigationOptions: {header: null}},
      detailJob: {screen: DetailJob, navigationOptions: {header: null}}

    },{
      initialRouteName: 'map'
    });
    const mainNavigator = createSwitchNavigator({
      auth: authNavigation,
      map: mapNavigation
    },{
      initialRouteName: 'auth',
      headerMode: 'none'
    });
    const Main = createAppContainer(mainNavigator);
    return(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;