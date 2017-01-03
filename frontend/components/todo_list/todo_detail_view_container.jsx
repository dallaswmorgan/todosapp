import { receiveTodo, removeTodo } from '../../actions/todo_actions';
import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = dispatch => ({
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoDetailView);
