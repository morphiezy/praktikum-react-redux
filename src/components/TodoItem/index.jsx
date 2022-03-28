import { connect } from 'react-redux';
import { completeTodo, deleteTodo } from '../../store/todoSlice';
import style from './style.module.css'

const {
    todo_item,
    wrapper,
    toggle_checkbox,
    toggle_complete,
    todo_info,
    title,
    subtitle,
    todo_tools,
    btn_delete
} = style;


const TodoItem = ({id,name,create,completeTodo,deleteTodo})=>{
    return(
        <div className={todo_item}>
            <label className={wrapper}>
                <input type="checkbox" onChange={()=>completeTodo(id)} className={toggle_complete}/>
                <span className={toggle_checkbox}></span>
                <div className={todo_info}>
                    <span className={title} title={name}>
                        {name}
                    </span>
                    <span className={subtitle}>Added on {create}</span>
                </div>
            </label>
            <div className={todo_tools}>
                <button className={btn_delete} onClick={()=>deleteTodo(id)}>delete</button>
            </div>
        </div>
    )
}

const mapStateToProps = (_,ownProps)=>{
    return({...ownProps})
}

const mapDispatchToProps = (dispatch)=>{
    return{
        deleteTodo: (id)=> dispatch(deleteTodo(id)),
        completeTodo : (id)=> dispatch(completeTodo(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem)