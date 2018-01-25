//actions: 加多一个前缀主要是为了避免action与其它页面的action冲突
const GET_BANNER_DATA = 'home/GET_BANNER_DATA';
const GET_BANNER_HEIGHT = 'home/GET_BANNER_HEIGHT';
const GET_BANNER_INDEX = 'home/GET_BANNER_INDEX';
const GET_SONG_LIST = 'home/GET_SONG_LIST';
const GET_RANK = 'home/GET_RANK';


//reducers
const initialState = {
    bannerData: {
        data: [],
        imgHeight: 176,
        slideIndex: 0,
        id: ''
    },
    songList: [],
    rank:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case  GET_BANNER_DATA:
            return{
                ...state,
                bannerData:{
                    ... state.bannerData,
                    data: action.data
                }
            }
        case GET_BANNER_HEIGHT:
            return {
                ...state,
                bannerData:{
                    ...state.bannerData,
                    imgHeight: action.data
                }
            }
        case GET_BANNER_INDEX:
            return {
                ...state,
                bannerData:{
                    ...state.bannerData,
                    slideIndex: action.data
                }
            }
        case GET_SONG_LIST:
            return {
                ...state,
                songList: action.data
            }
        case GET_RANK:
            return {
                ...state,
                rank: action.data
            }



        default:
            return state
    }
}



//mapDispatchToProps
export const dispatch_func = {
    getBannerData: (data) => {
        return dispatch => {
            dispatch({
                type: GET_BANNER_DATA,
                data: data
            });
        }
    },
    getBannerHeight: (data) => {
        return dispatch => {
            dispatch({
                type: GET_BANNER_HEIGHT,
                data: data
            });
        }
    },
    getBannerIndex: (data) => {
        return dispatch => {
            dispatch({
                type: GET_BANNER_INDEX,
                data: data
            });
        }
    },
    getSongList: (data) => {
        return dispatch => {
            dispatch({
                type: GET_SONG_LIST,
                data: data
            });
        }
    },
    getRank: (data) => {
        return dispatch => {
            dispatch({
                type: GET_RANK,
                data: data
            });
        }
    },
}