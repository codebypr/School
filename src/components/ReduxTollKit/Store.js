import {  configureStore } from "@reduxjs/toolkit";
import stdreducer from './StudentSlice'
import tecreducer from './TeacherSlice'
export const store=configureStore({
    reducer:{
        stdReducer:stdreducer,
        techReducer:tecreducer
    } 
});