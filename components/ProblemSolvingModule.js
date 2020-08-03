import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, SafeAreaView,ScrollView, Platform, StatusBar, } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { SearchBar } from 'react-native-elements';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const data = [
    {
        name: 'React',
        img: require('../Images/react.png')
    },
    {
        name: 'C',
        img: require("../Images/c.png")
    },
    {
        name: 'Android',
        img: require("../Images/android.png")
    },
    {
        name: 'PHP',
        img: require("../Images/php.png")
    },
    {
        name: 'Assembly',
        img: require("../Images/ass.jpg")
    },
    {
        name: 'Python',
        img: require("../Images/pp.png")   
    },
    {
        name: 'Data Visualization',
        img: require("../Images/ds.png")
    },
    {
        name: 'Machine Learning',
        img: require("../Images/ml.jpg")
    },
]

class ProblemSolvingModule extends React.Component{
    state={search:'', c:'C Langauge', data:[...data]}
    constructor(props){
        super(props);
        this.reactProbHandler = this.reactProbHandler.bind(this);
    }
    reactProbHandler(text){
        if(text==='React'){
            this.props.reactProblemScreenHandler();
        }else if(text==='C'){
            this.props.cProblemScreenHandler();
        }else if(text==='Android'){
            this.props.androidProblemScreenHandler();
        }else if(text==='PHP'){
            this.props.phpProblemScreenHandler();
        }else if(text==='Assembly'){
            this.props.assemblyProblemScreenHandler();
        }else if(text==='Python'){
            this.props.pythonProblemScreenHandler();
        }else if(text==='Machine Learning'){
            this.props.machineLearningProblemScreenHandler();
        }else if(text==='Data Visualization'){
            this.props.dvProblemScreenHandler();
        }
    }
    searchChange = (query) => {
        let table1 = [...data]
        this.setState({search:query}, () => {
            if(query){
                const list1 = table1.filter(m=>{
                    return  m.name.toLowerCase().startsWith(this.state.search.toLowerCase());
                });
                this.setState({data: list1})
            }
            else {
                this.setState({data:table1})
            }
        })
    }
    render(){
        return(            
            <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
                <LinearGradient colors={['#48D1CC', '#28b485']} style={{ width: screenWidth, height:screenHeight }}>
                    <View style={styles.ViewStyle}>
                        <Text style={{fontWeight:'900',marginLeft:'25%',marginTop:'-5%',fontSize:26,  height:screenHeight*.09,color:'black', fontStyle:'normal', marginBottom: 20}}>
                            Problem Modules
                        </Text>
                    </View>
                    <SearchBar style={{width:screenWidth}} value={this.state.search} onChangeText={this.searchChange} />
                    <ScrollView>
                        {this.state.data.map((i)=>{ 
                                return (<View style={styles.box}>
                                            <TouchableOpacity onPress={() => this.reactProbHandler(i.name)}>
                                                <Image resizeMode={'cover'} style={styles.Image} source={i.img} />
                                            </TouchableOpacity>
                                            <Text onPress={() => this.reactProbHandler(i.name)} style={i.name==='Data Visualization' || i.name==='Operating System' || i.name==='Computer Networks' || i.name==='Data Structure' || 'Artifical Intelligence' ? styles.text1 : styles.text}>
                                                {i.name}
                                            </Text>
                                        </View>)})}
                    </ScrollView>
                </LinearGradient>
            </View>
        );
    }
}
const styles = {
    ViewStyle: {
        backgroundColor: '#00BCD4',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 25,
        paddingLeft: 5,
        elevation: 2,
        position: 'relative',
        width:screenWidth*1,
        height: screenHeight*.09,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    TextStyle: {
        textAlign:'center',
        marginLeft: 10,
        fontSize: screenWidth*.07,
        fontWeight: 'bold',
        color: 'black',
         marginTop:20,
    },
    box:{
        display:'flex',
        flexDirection:'row',
        marginBottom: 5,
        marginTop:'5%',
        backgroundColor: '#eee',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height:screenHeight*.18

    },
    Image:{
        width: screenWidth*.3, 
        height: screenHeight*.15,
        borderRadius:100/2, marginBottom:2,
        marginTop:'5%'

    },
    text:{
        textAlign:'left',
        marginLeft:'20%',
        height: screenHeight*.12,
        marginTop:'8%', 
        fontWeight:'800', 
        color:'black', 
        fontSize: 30
    },
    text1: {
        textAlign:'left',
        marginLeft:'10%',
        height: screenHeight*.12,
        width: screenWidth*.45,
        marginTop:'7%', 
        fontWeight:'800', 
        color:'black', 
        fontSize: 25
    }
};
export default ProblemSolvingModule;