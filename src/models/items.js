import axios from 'axios'

function getItems(){
    return axios.get('/api/items')
}

export default {
    namespace: "items", 
    state: [], 
    effects: {
        *getList(action,{call,put}){
            const res=yield call(getItems)
            yield put({type:'initItems',payload:res.data.result})
        }
    },
    reducers: {
        initItems(state,action){
            return action.payload
        },
        //添加商品
        // addGood(state,action){
        //     return [...state,{title:action.payload.title}]
        // }
    }
  };