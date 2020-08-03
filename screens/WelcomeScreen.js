import React from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides'

const SLIDE_DATA = [
    {uri: 'https://www.kaysonseducation.co.in/app/webroot/ckfinder/userfiles/images/Rankers-Level-image.png',text: 'IT App for IT Students in Pakistan', color: '#48D1CC'},
    {uri: 'https://www.vippng.com/png/full/148-1485588_on-people-of-ladder-books-are-the-clipart.png',text: 'Find IT stuff at only platform', color: '#48D1CC'},
    {uri: 'https://cdn.clipart.email/c075d2d667b86af6553bf88c6d3483e5_student-university-estudante-college-instituto-universitxe1rio-_3647-3306.png',text: 'Go and get yourself registered!', color: '#48D1CC'}
];


{/*https://facebook.github.io/react/logo-og.png */}
class WelcomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.onSlideComplete = this.onSlideComplete.bind(this);
    }
    // onSlideComplete() {
    //     this.props.navigation.navigate('authentication');
    // }
    onSlideComplete() {
        this.props.navigation.navigate('auth');
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete} />
            </View>
        );
    }
}
export default WelcomeScreen;