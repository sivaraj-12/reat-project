import{ configureStore}from"@reduxjs/toolkit"
import CounterSlide from "./reducer"
export const store=configureStore({
    reducer:{
        counter:CounterSlide,
    },
});
