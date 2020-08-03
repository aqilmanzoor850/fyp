import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, SafeAreaView,ScrollView, Platform, StatusBar } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';
import {LinearGradient} from 'expo-linear-gradient';
import { SearchBar } from 'react-native-elements';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const data = [
    {
        name: 'C Language',
        img: require("../Images/c.png"),
        press: 'cModHandler'
    },
    {
        name: 'Java Language',
        img: require("../Images/java.png")
    },
    {
        name: 'R Language',
        img: require("../Images/rrr.png")
    },
    {
        name: 'Swift Language',
        img: require("../Images/swift.png")
    },
    {
        name: 'Python Language',
        img: require('../Images/pp.png')
    },
    {
        name: 'Software Engineering',
        img: require('../Images/se.png')
    },
    {
        name: 'Operating System',
        img: require('../Images/os.png')
    },
    {
        name: 'C #',
        img: require('../Images/ch.png')
    },
    {
        name: 'Data Structure',
        img: require('../Images/database.png')
    },
    {
        name: 'Computer Networks',
        img: require('../Images/cnn.jpg')
    },
    {
        name: 'Web',
        img: require('../Images/web.png')
    },
    {
        name: 'PHP',
        img: require('../Images/php.png')
    }
]

class VideoModules extends React.Component{
    state={search:'', c:'C Langauge', data:[...data]}
     constructor(props){
         super(props);
         this.reactModHandler = this.reactModHandler.bind(this);
         this.cModHandler = this.cModHandler.bind(this);
        }
    reactModHandler(){
        this.props.reactTutorialHandler();
    }
    cModHandler(text){
        console.log(text);
        if(text==='C Language'){
            this.props.cTutorialHandler();
        }else if(text==='Java Language'){
            this.props.javaModHandler();
        }else if(text==='R Language'){
            this.props.rModHandler();
        }else if(text==='Swift Language'){
            this.props.swiftModHandler();
        }else if(text==='Python Language'){
            this.props.pythonModHandler();
        }else if(text==='Software Engineering'){
            this.props.softwareEngineeringModHandler();
        }else if(text==='Operating System'){
            this.props.operatingSystemModHandler();
        }else if(text==='C #'){
            this.props.cTutorialHandler();
        }else if(text==='Data Structure'){
            this.props.dataStructureModHandler();
        }else if(text==='Computer Networks'){
            this.props.dataStructureModHandler();
        }else if(text==='Web'){
            this.props.webModHandler();
        }else if(text==='PHP'){
            this.props.phpModHandler();
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
            
            <Text style={{fontWeight:'900',marginLeft:'35%',marginTop:'-5%',fontSize:30,  height:screenHeight*.09,color:'black', fontStyle:'normal', marginBottom: 20}}>
                    Videos
                    </Text>
                    
                   </View>
                   <SearchBar style={{width:screenWidth}} value={this.state.search} onChangeText={this.searchChange} />
                    <ScrollView>
                        {this.state.data.map((i)=>{ return (<View style={styles.box}>
                            <TouchableOpacity onPress={i.name}>
                                <Image resizeMode={'cover'} style={styles.Image} source={i.img} />
                            </TouchableOpacity>
                            <Text onPress={() => this.cModHandler(i.name)} style={i.name==='Software Engineering' || i.name==='Operating System' || i.name==='Computer Networks' ? styles.text1 : styles.text}>
                                {i.name}
                            </Text>
                        </View>)})}
                        
                        {/* 

                        <View style={styles.box}>
                            <TouchableOpacity onPress={this.dataStructureModHandler}>
                            <Image resizeMode={'cover'} style={styles.Image} source={require("../Images/ai.jpg")} />
                         </TouchableOpacity>
                        
                        <Text onPress={this.phpModHandler} 
                        style={{  textAlign:'left',
                        marginLeft:'10%',
                        height: screenHeight*.12,
                        width: screenWidth*.45,
                        marginTop:'7%', 
                        fontWeight:'800', 
                        color:'black', 
                        fontSize: 25}}>
                            Artificial Intelligence
                        </Text>
                        </View>

                        <View style={styles.box}>
                            <TouchableOpacity onPress={this.dataStructureModHandler}>
                            <Image resizeMode={'cover'} style={styles.Image} source={require("../Images/dw.jpg")} />
                         </TouchableOpacity>
                         <Text onPress={this.dataStructureModHandler} style={styles.text}>
                            Data warehouse
                        </Text>
                        </View>

                        <View style={styles.box}>
                            <TouchableOpacity onPress={this.dataStructureModHandler}>
                            <Image resizeMode={'cover'} style={styles.Image} source={require("../Images/ds.png")} />
                         </TouchableOpacity>
                         <Text onPress={this.dataStructureModHandler}style={{  textAlign:'left',
                            marginLeft:'10%',
                            height: screenHeight*.12,
                            width: screenWidth*.45,
                            marginTop:'7%', 
                            fontWeight:'800', 
                            color:'black', 
                            fontSize: 25}}>
                            Data Visualization
                        </Text>
                        </View>

                        <View style={styles.box}>
                            <TouchableOpacity onPress={this.dataStructureModHandler}>
                            <Image resizeMode={'cover'} style={styles.Image} source={require("../Images/database.png")} />
                         </TouchableOpacity>
                         <Text onPress={this.dataStructureModHandler} style={styles.text}>
                            Data Mining
                        </Text>
                        </View>

                        <View style={styles.box}>
                            <TouchableOpacity onPress={this.dataStructureModHandler}>
                            <Image resizeMode={'cover'} style={styles.Image} source={require("../Images/ml.jpg")} />
                         </TouchableOpacity>
                         <Text onPress={this.dataStructureModHandler} style={{  textAlign:'left',
                            marginLeft:'10%',
                            height: screenHeight*.12,
                            width: screenWidth*.45,
                            marginTop:'7%', 
                            fontWeight:'800', 
                            color:'black', 
                            fontSize: 25}}>
                            Machine Learning
                        </Text>
                        </View>

                        <View style={styles.box}>
                            <TouchableOpacity onPress={this.dataStructureModHandler}>
                            <Image resizeMode={'cover'} style={styles.Image} source={require("../Images/ass.jpg")} />
                         </TouchableOpacity>
                         <Text onPress={this.dataStructureModHandler} style={styles.text}>
                            Assembly 
                        </Text>
                        </View>

                        <View style={styles.box}>
                            <TouchableOpacity onPress={this.dataStructureModHandler}>
                            <Image resizeMode={'cover'} style={styles.Image} source={require("../Images/oop.png")} />
                         </TouchableOpacity>
                         <Text onPress={this.dataStructureModHandler} style={styles.text}>
                            OOP
                        </Text>
                        </View>
                 */}
                    
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
        // jusifyContent: 'center',
        // alignItems: 'center',
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

box:
    {
        display:'flex',
        flexDirection:'row',
        marginBottom: 5,
        marginTop:'5%',
        backgroundColor: '#eee',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height:screenHeight*.19

    },
    Image:{
        width: screenWidth*.3, 
        marginTop:'-25%',
        height: screenHeight*.15,
        borderRadius:100/2, marginBottom:2,
        marginTop:'10%',
        marginLeft:'5%'

    },
    text:{
        textAlign:'left',
        marginLeft:'10%',
        height: screenHeight*.12,
        marginTop:'12%', 
        fontWeight:'800', 
        color:'black', 
        fontSize: 25
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
export default VideoModules;
