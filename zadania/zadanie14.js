let todos = [
  { id: 1, title: "Oddać projekt", done: false },
  { id: 2, title: "Przeczytać rozdział", done: true },
  { id: 3, title: "Przygotować prezentację", done: false }
];

function addTodo(todoList, title) {
  const newTodo = {
    id: todoList.length + 1,
    title,
    done: false
  };

  return [...todoList, newTodo];
}

function markAsDone(todoList, id) {
  return todoList.map(todo =>
    todo.id === id ? { ...todo, done: true } : todo
  );
}

function getUndoneTodos(todoList) {
  return todoList.filter(todo => !todo.done);
}

function countDoneTodos(todoList) {
  return todoList.filter(todo => todo.done).length;
}

const todosAfterAdd = addTodo(todos, "Powtórzyć JavaScript");
const todosAfterUpdate = markAsDone(todosAfterAdd, 1);
const undoneTodos = getUndoneTodos(todosAfterUpdate);

console.log("Oryginalne zadania:", todos);
console.log("Po dodaniu:", todosAfterAdd);
console.log("Po oznaczeniu jako wykonane:", todosAfterUpdate);
console.log("Niewykonane zadania:", undoneTodos);
console.log(`Liczba wykonanych zadań: ${countDoneTodos(todosAfterUpdate)}`);
