import React, {Component} from 'react';
import {Alert, TouchableHighlight, StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import actions from '../action/index';
import NavigationUtil from '../navigator/NavigationUtil';
import NavigationBar from '../common/NavigationBar';
import LanguageDao, {FLAG_LANGUAGE} from '../expand/dao/LanguageDao';
import BackPressComponent from '../common/BackPressComponent';
import ViewUtil from '../util/ViewUtil';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ArrayUtil from '../util/ArrayUtil';
import SortableListView from 'react-native-sortable-listview-newer';
import SafeAreaViewPlus from '../common/SafeAreaViewPlus';
import GlobalStyles from '../res/styles/GlobalStyles';


type Props = {};

class SortKeyPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        this.backPress = new BackPressComponent({backPress: (e) => this.onBackPress(e)});
        this.languageDao = new LanguageDao(this.params.flag);
        this.state = {
            checkedArray: SortKeyPage._keys(this.props),
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const checkedArray = SortKeyPage._keys(nextProps, prevState);
        if (prevState.checkedArray !== checkedArray) {
            return {
                checkedArray: checkedArray,
            };
        }
        return null;
    }

    componentDidMount() {
        this.backPress.componentDidMount();
        if (SortKeyPage._keys(this.props).length === 0) {
            let {onLoadLanguage} = this.props;
            onLoadLanguage(this.params.flag);
        }
    }

    componentWillUnmount() {
        this.backPress.componentWillUnmount();
    }

    /**
     * get tag keys
     * @param props
     * @param state
     * @returns {*}
     * @private
     */
    static _keys(props, state) {
        if (state && state.checkedArray && state.checkedArray.length) {
            return state.checkedArray;
        }
        const flag = SortKeyPage._flag(props);
        let dataArray = props.language[flag] || [];
        let keys = [];
        for (let i = 0, j = dataArray.length; i < j; i++) {
            let data = dataArray[i];
            if (data.checked) {
                keys.push(data);
            }
        }
        return keys;
    }

    static _flag(props) {
        const {flag} = props.navigation.state.params;
        return flag === FLAG_LANGUAGE.flag_key ? 'keys' : 'languages';
    }

    onBackPress(e) {
        this.onBack();
        return true;
    }

    onSave(hasChecked) {
        if (!hasChecked) {
            if (ArrayUtil.isEqual(SortKeyPage._keys(this.props), this.state.checkedArray)) {
                NavigationUtil.goBack(this.props.navigation);
                return;
            }
        }
        this.languageDao.save(this.getSortResult());

        const {onLoadLanguage} = this.props;

        onLoadLanguage(this.params.flag);
        NavigationUtil.goBack(this.props.navigation);
    }

    /**
     * get results after sorting
     * @returns {Array}
     */
    getSortResult() {
        const flag = SortKeyPage._flag(this.props);
        let sortResultArray = ArrayUtil.clone(this.props.language[flag]);
        const originalCheckedArray = SortKeyPage._keys(this.props);
        for (let i = 0, j = originalCheckedArray.length; i < j; i++) {
            let item = originalCheckedArray[i];
            let index = this.props.language[flag].indexOf(item);
            sortResultArray.splice(index, 1, this.state.checkedArray[i]);
        }
        return sortResultArray;
    }


    onBack() {
        if (!ArrayUtil.isEqual(SortKeyPage._keys(this.props), this.state.checkedArray)) {
            Alert.alert('Alert', 'Do you want to save changes?',
                [
                    {
                        text: 'No', onPress: () => {
                            NavigationUtil.goBack(this.props.navigation);
                        },
                    }, {
                    text: 'Yes', onPress: () => {
                        this.onSave(true);
                    },
                },
                ]);
        } else {
            NavigationUtil.goBack(this.props.navigation);
        }
    }

    render() {
        const {theme} = this.params;
        let title = this.params.flag === FLAG_LANGUAGE.flag_language ? 'Sort Languages' : 'Sort Tags';
        let navigationBar = <NavigationBar
            title={title}
            leftButton={ViewUtil.getLeftBackButton(() => this.onBack())}
            style={theme.styles.navBar}
            rightButton={ViewUtil.getRightButton('Save', () => this.onSave())}
        />;
        return <SafeAreaViewPlus
            style={GlobalStyles.root_container}
            topColor={theme.themeColor}
        >
            {navigationBar}
            <SortableListView
                data={this.state.checkedArray}
                order={Object.keys(this.state.checkedArray)}
                onRowMoved={e => {
                    this.state.checkedArray.splice(e.to, 0, this.state.checkedArray.splice(e.from, 1)[0]);
                    this.forceUpdate();
                }}
                renderRow={row => <SortCell data={row} {...this.params}/>}
            />
        </SafeAreaViewPlus>;
    }
}

class SortCell extends Component {
    render() {
        const {theme} = this.props;
        return <TouchableHighlight
            underlayColor={'#eee'}
            style={this.props.data.checked ? styles.item : styles.hidden}
            {...this.props.sortHandlers}>
            <View style={{marginLeft: 10, flexDirection: 'row'}}>
                <MaterialCommunityIcons
                    name={'sort'}
                    size={16}
                    style={{marginRight: 10, color: theme.themeColor}}/>
                <Text>{this.props.data.name}</Text>
            </View>
        </TouchableHighlight>;
    }
}

const mapPopularStateToProps = state => ({
    language: state.language,
});
const mapPopularDispatchToProps = dispatch => ({
    onLoadLanguage: (flag) => dispatch(actions.onLoadLanguage(flag)),
});

export default connect(mapPopularStateToProps, mapPopularDispatchToProps)(SortKeyPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
    hidden: {
        height: 0,
    },
    item: {
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 50,
        justifyContent: 'center'
    },
});
