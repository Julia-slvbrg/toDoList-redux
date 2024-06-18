import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    {
      title: 'Estudar Javascript',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDING,
      description: 'Estudar variáveis',
      id: 1
    },
    {
      title: 'Estudar Typescript',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.DONE,
      description: 'Estudar variáveis',
      id: 2

    },
    {
      title: 'Estudar React',
      priority: enums.Priority.NORMAL,
      status: enums.Status.DONE,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      id: 3

    },
    {
      title: 'Estudar Redux',
      priority: enums.Priority.URGENT,
      status: enums.Status.PENDING,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      id: 4
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter(task => task.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.itens.findIndex(task => task.id === action.payload.id)

      if (taskIndex >= 0) {
        state.itens[taskIndex] = action.payload
      }
    }
  }
})

export const { remove, edit } = tasksSlice.actions
export default tasksSlice.reducer