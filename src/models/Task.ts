
import * as enums from '../utils/enums/Task'

class Task {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
  id: number

  constructor(
    title: string,
    prioity: enums.Priority,
    status: enums.Status,
    description: string,
    id: number
  ) {
    this.title = title
    this.priority = prioity
    this.status = status
    this.description = description
    this.id = id
  }
}

export default Task
