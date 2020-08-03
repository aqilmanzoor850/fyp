import React from 'react';
import { View, Text, AsyncStorage, TouchableOpacity, Image, Dimensions, SafeAreaView,ScrollView, Platform, StatusBar, } from 'react-native';import Card from '../components/Card';
import CardSection from '../components/CardSection';
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
        name: 'Java',
        img: require("../Images/java.png")
    },
    {
        name: 'C + +',
        img: require("../Images/cplusplus.png")
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
        name: 'R Language',
        img: require("../Images/rrr.png")
    },
    {
        name: 'React Native',
        img: require("../Images/react.png")
    },
    {
        name: 'Swift',
        img: require("../Images/swift.png")
    },
    {
        name: 'Python',
        img: require("../Images/pp.png")   
    },
    {
        name: 'Software Engineering',
        img: require("../Images/se.png")
    },
    {
        name: 'Operating System',
        img: require("../Images/os.png")
    },
    {
        name: 'C #',
        img: require("../Images/ch.png")
    },
    {
        name: 'Data Structure',
        img: require("../Images/database.png")
    },
    {
        name: 'Computer Networks',
        img: require("../Images/cnn.jpg")
    },
    {
        name: 'Web',
        img: require("../Images/web.png")
    },
    {
        name: 'Artifical Intelligence',
        img: require("../Images/ai.jpg")
    },
    {
        name: 'Data Warehouse',
        img: require("../Images/dw.jpg")
    },
    {
        name: 'Data Visualization',
        img: require("../Images/ds.png")
    },
    {
        name: 'Data Mining',
        img: require("../Images/database.png")
    },
    {
        name: 'Machine Learning',
        img: require("../Images/ml.jpg")
    },
    {
        name: 'OOP',
        img: require("../Images/oop.png")
    }
]

class BookModule extends React.Component{
    state={search:'', c:'C Langauge', data:[...data]}

    reactModHandler(text){
        if(text==='React'){
            this.props.reactBookHandler();
        }else if(text==='C'){
            this.props.cBookHandler();
        }else if(text==='Java'){
            this.props.javaBookHandler();
        }else if(text==='C + +'){
            this.props.cPlusPlusBookHandler();
        }else if(text==='Android'){
            this.props.androidBookHandler();
        }else if(text==='PHP'){
            this.props.phpBookHandler();
        }else if(text==='Assembly'){
            this.props.assemblyBookHandler();
        }else if(text==='R Language'){
            this.props.RlanguaueBookHandler();
        }else if(text==='React Native'){
            this.props.ReactNativeBookHandler();
        }else if(text==='Python'){
            this.props.softBookHandler();
        }else if(text==='Software Engineering'){
            this.props.softBookHandler();
        }else if(text==='Swift'){
            this.props.swiftBookHandler();
        }else if(text==='Operating System'){
            this.props.oprBookHandler();
        }else if(text==='C #'){
            this.props.csharpBookHandler();
        }else if(text==='Data Structure'){
            this.props.dataStrBookHandler();
        }else if(text==='Computer Networks'){
            this.props.compNetBookHandler();
        }else if(text==='Web'){
            this.props.webBookHandler();
        }else if(text==='Artifical Intelligence'){
            this.props.AiBookHandler();
        }else if(text==='Data Visualization'){
            this.props.datavisBookHandler();
        }else if(text==='Data Warehouse'){
            this.props.datawareBookHandler();
        }else if(text==='Data Mining'){
            this.props.dataminBookHandler();
        }else if(text==='Machine Learning'){
            this.props.machineBookHandler();
        }else if(text==='OOP'){
            this.props.oopBookHandler();
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
                            Books
                        </Text>
                    </View>
                    <SearchBar style={{width:screenWidth}} value={this.state.search} onChangeText={this.searchChange} />
                    <ScrollView>
                        {this.state.data.map((i)=>{ 
                            return (<View style={styles.box}>
                                        <TouchableOpacity onPress={() => this.reactModHandler(i.name)}>
                                            <Image resizeMode={'cover'} style={styles.Image} source={i.img} />
                                        </TouchableOpacity>
                                        <Text onPress={() => this.reactModHandler(i.name)} style={i.name==='Software Engineering' || i.name==='Operating System' || i.name==='Computer Networks' || i.name==='Data Structure' || 'Artifical Intelligence' ? styles.text1 : styles.text}>
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
export default BookModule;