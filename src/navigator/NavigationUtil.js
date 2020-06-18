export default class NavigationUtil {
    /**
     * go to specific page
     **/
    static goPage(params, page) {
        const navigation = NavigationUtil.navigation;
        if (!navigation) {
            return;
        }
        navigation.navigate(
            page,
            {
                ...params,
            },
        );
    }

    /**
     * go back to last page
     * @param navigation
     */
    static goBack(navigation) {
        navigation.goBack();
    }

    /**
     * go to home page
     * @param navigation
     */
    static resetToHomPage(params) {
        const {navigation} = params;
        navigation.navigate('Main');
    }

}
