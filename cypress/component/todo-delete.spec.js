import React from 'react';
import { TodoListItem } from '../../src/components/todo/list/TodoListItem';
import { mount } from '@cypress/react';

//Se agrega el elemento que se va a eliminar
describe('Todo list item', () => {
  it('renders todo item', () => {
    const todo = {
        id: 1,
        done: false,
        desc: 'TODO a borrar',
      };
    const todo = {
      id: 2,
      done: false,
      desc: 'TODO a no borrar',
    };
    mount(<TodoListItem todo={todo} index={1} />);
    cy.get('.list-group > .list-group-item:first > p')
      .first()
      .should('contain', '1. new TODO');
    mount(<button className='btn btn-danger' onClick={() => handleDelete(todo.id)}></button>);
    cy.get('.list-group > .list-group-item:first > p')
      .first()
      .should('contain','1. TODO a no borrar')
  });
});


