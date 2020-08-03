import React from 'react';
import {View, Text, SafeAreaView, Platform, StatusBar, Button, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import firebase from 'firebase';
import Spinner from '../../components/Spinner';
import Card from '../../components/Card';

import {LinearGradient} from 'expo-linear-gradient';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

var problems = [];
var done = null;
var loading1 = false;

class Item extends React.PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    // //     console.log("state: ", this.state);
    // //     console.log("nextState: ", nextState);
    //     return this.state != nextState;
    // }
    
    render(){
        // console.log('flatlist-------->')
        return (
            <View>
                <TouchableOpacity style={[(firebase.auth().currentUser.uid===this.props.uid) ? styles.key1 : styles.key2]} onPress={()=>this.props.reactProblemSolutionHandler(this.props.description, this.props.explanation, this.props.name, this.props.image, this.props.language, this.props.tId, this.props.image1, this.props.uid)}>
                        <Text adjustsFontSizeToFit={true} style={{ justifyContent:'center', alignContent:'center', marginLeft: 10, fontSize:0.05*screenWidth}}>{this.props.description}</Text>
                </TouchableOpacity>
            </View>
        );
    }
} 

class AssemblyProblems extends React.Component{
    state = {
        random: null,
        isMounted: false,
        count:0,
        des:'',
        exp:'',
        img:'',
        states:false,
        tId: '',
        problem: []
    }
    constructor(props){
        super(props);
        this.addReactProblemHandler = this.addReactProblemHandler.bind(this);
        this.reactProblemSolutionHandler = this.reactProblemSolutionHandler.bind(this);
         this.isMount=false;
    }

        shouldComponentUpdate(nextProps, nextState) {
        // // console.log("state: ", this.state);
        // // console.log("nextState: ", nextState);
        return this.state != nextState;
    }

    componentDidMount(){
         this.isMount=true;
        problems=[];
        done=null;
        if(done===null){
            const res = firebase.database().ref('/Probelms/Assembly')
            .on('value', snapshot => {
                snapshot.forEach((child)=>{
                    problems.push({
                        description:child.val().descriptionText,
                        explanation:child.val().explanationText,
                        name:child.val().name,
                        language:child.val().Langauge,
                        image:child.val().Upload,
                        image1:child.val().Captured,
                        uid:child.val().uid,
                        tId: child.key,
                    });
                });
                loading1 = true;
                // console.log('didmount----------------------->')
                done='asdasda';
                this.setState({
                    random: "yes",
                    problem: problems
                })
            });
        }
    }


    componentWillUnmount() {
         this.isMount=false;
        // console.log('component will unmount');
    }

    addReactProblemHandler(){
         problems = [];
        this.props.navigation.navigate('addAssemblyProb',{des: this.state.des, exp: this.state.exp, img: this.state.img, states: this.state.states, key: this.state.tId});
    }

    reactProblemSolutionHandler(description, explanation, name, image, language, tId, image1, uid){
        problems=[];
        // console.log(tId)
        this.props.navigation.navigate('assemblySolution',{description: description, explanation: explanation, name: name, image: image, language: language, tId: tId, image1: image1, uid});
       
    }

    // Item( description, explanation, name, image, language, key, image1, uid ) {
    //     this.isMount=true
    // //     console.log('flat list main aya kia: ', key);
    //     done='asda';
    //     return (

    //         <Card>
    //             <TouchableOpacity style={[(firebase.auth().currentUser.uid===uid) ? styles.key1 : styles.key2]} onPress={()=>this.reactProblemSolutionHandler(description, explanation, name, image, language,key, image1, uid)}>
    //                 <Text adjustsFontSizeToFit={true} style={{ justifyContent:'center', alignContent:'center', marginLeft: 10, fontSize:0.05*screenWidth}}>{description}</Text>
    //             </TouchableOpacity>
    //         </Card>
    //     );
                
    // }  

    renderView =(p) =>{
        // console.log("params: ", p)
        return (
            <Card>
                
            </Card>
        );
        // problems = [];
    }

    render(){
        // console.log('render main tu aya hi hon ga');
        if(loading1===true){
            done='asdas';
            // // console.log('problems', problems);

            return(
                <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, flex: 1 }}>
                     <LinearGradient colors={['#48D1CC', '#eee']} style={{ width: screenWidth, height:screenHeight }}>
                        <SafeAreaView>
                        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:screenWidth, height:screenHeight*.12,  marginBottom: 10}}>
                        <View style={{display: 'flex', justifyContent:'center',marginTop:'5%',paddingBottom:'15%',paddingTop:'-7%',paddingRight:'5%',
                            
                            borderBottomRightRadius: 30,
                            
                            borderTopRightRadius: 30,
                                alignItems:'center',backgroundColor:'silver', height:screenHeight*.09}}>
                                <Text style={{fontWeight:'900',marginTop:'10%', marginLeft:'5%',fontSize:20,
                                 color:'black', fontStyle:'normal', marginBottom: 20}}>
                                  Assembly Problems
                                </Text>
                            </View>
                            
                        </View>
                    
                        <FlatList
                            data={this.state.problem}
                            extraData={this.state.problem}
                            //this.Item(item.description, item.explanation, item.name, item.image, item.language, item.key, item.image1, item.uid)
                            //<Item reactProblemSolutionHandler={this.reactProblemSolutionHandler} description={item.description} explanation={item.explanation} name={item.name} image={item.image}  language={item.language} key={item.key} image1={item.image1} uid={item.uid} />
                            renderItem={({item})=><Item  reactProblemSolutionHandler={this.reactProblemSolutionHandler} description={item.description} explanation={item.explanation} name={item.name} image={item.image}  language={item.language} tId={item.tId} image1={item.image1} uid={item.uid} /> }
                            keyExtractor={(item, index) => String(index)}
                        />
                        </SafeAreaView>
                        
                        <View style={{width:screenWidth*.5, height:screenHeight*.15, marginTop:'20%',marginLeft:'25%',marginRight:5,color:'black'}}>
                                <Button  title="Add new Problem" color='black' onPress={this.addReactProblemHandler} />
                            </View>
                     </LinearGradient>
                </View>
            );
        }
        else if(loading1 === false){
            return(
                <View style={styles.container}>{console.log('asdasda')}<Spinner/></View>
            );
        } 
    }
}

const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    key1: {
        backgroundColor: '#eee',
        marginBotton: 10,
        //textAlign:'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width:screenWidth*.9,
        height:screenHeight*.06,
        marginLeft:'3%',
        overflow:'hidden',
        flexDirection: 'row',
        marginTop:'3%'
        
    },
    key2: {
        backgroundColor: '#eee',
        marginBotton: 10,
        //textAlign:'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width:screenWidth*.9,
        height:screenHeight*.06,
        marginLeft:'3%',
        overflow:'hidden',
        flexDirection: 'row',
        marginTop:'3%'
    }
}

export default AssemblyProblems;