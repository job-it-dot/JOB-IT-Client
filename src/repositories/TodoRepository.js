import request from '../lib/axios';

class TodoRepository {
  getTodo(id) {
    return request.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}

export default new TodoRepository();
