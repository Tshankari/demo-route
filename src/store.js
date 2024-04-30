import { createStore } from "redux"
import rootReducer from "./reducer/main"
const store = createStore(rootReducer)

export default store


// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from "./reducer/main"
// export default configureStore({
//   reducer: {

//     rootReducer:rootReducer

//   },
// })