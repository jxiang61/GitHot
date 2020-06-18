import Types from '../../action/types';

const defaultState = {
    showText: 'Search',
    items: [],
    isLoading: false,
    projectModels: [],
    hideLoadingMore: true,
    showBottomButton: false,
};

export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.SEARCH_REFRESH:
            return {
                ...state,
                isLoading: true,
                hideLoadingMore: true,
                showBottomButton: false,
                showText: 'Cancel',
            };
        case Types.SEARCH_REFRESH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hideLoadingMore: false,
                showBottomButton: action.showBottomButton,
                items: action.items,
                projectModels: action.projectModels,
                pageIndex: action.pageIndex,
                showText: 'Search',
                inputKey: action.inputKey,
            };
        case Types.SEARCH_FAIL:
            return {
                ...state,
                isLoading: false,
                showText: 'Search',
            };
        case Types.SEARCH_CANCEL:
            return {
                ...state,
                isLoading: false,
                showText: 'Search',
            };
        case Types.SEARCH_LOAD_MORE_SUCCESS:
            return {
                ...state,
                projectModels: action.projectModels,
                hideLoadingMore: false,
                pageIndex: action.pageIndex,
            };
        case Types.SEARCH_LOAD_MORE_FAIL:
            return {
                ...state,
                hideLoadingMore: true,
                pageIndex: action.pageIndex,
            };
        default:
            return state;
    }

}
