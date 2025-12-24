import{useDispatch, useSelector}from"react-redux"
import { increment } from "../State/reducer";

const AboutRedux=()=>{
    const state=useSelector((state)=>state.counter);
    const dispatch = useDispatch()
    return<>
    <p>{state.value}</p>
    <button onClick={()=>dispatch(increment())}> Add 1 </button>
    </>
}
export default AboutRedux