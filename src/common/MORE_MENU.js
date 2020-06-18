import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export const MORE_MENU = {
    Custom_Language: {name: 'Languages', Icons: FontAwesome, icon: 'pencil-square-o'},
    Sort_Language: {name: 'Sort Languages', Icons: MaterialCommunityIcons, icon: 'sort'},
    Custom_Theme: {name: 'Theme', Icons: Ionicons, icon: 'ios-color-palette'},
    Custom_Key: {name: 'Hot Tags', Icons: FontAwesome, icon: 'pencil-square-o'},
    Sort_Key: {name: 'Sort Tags', Icons: MaterialCommunityIcons, icon: 'sort'},
    Remove_Key: {name: 'Remove Tags', Icons: AntDesign, icon: 'delete'},
    CodePush: {name: 'CodePush', Icons: Ionicons, icon: 'ios-planet'},
};
