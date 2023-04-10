# TaskRow

## Usage

### Option 1 (with column styles)
1 . Require TaskRow and TableWrapper. TableWrapper contains styles (grid, templates) for TaskRow

```jsx
import { TaskRow, TableWrapper } from '@projectcor/cor-commons/lib/components/task-row'
```

```
const columns = ['title', 'messages']
const columnsConfig = {
 title: {
    name: 'title',
    width: '120px ',
  },
  messages: {
    name: 'messages',
    width: '80px',
  },
}

<TableWrapper columns={columns} columnsConfig={columnsConfig}>
    <TaskRow {...props} /> 
</Dropdown>
```

Check TaskRow props for more information


### Option 2 (within columns styles)

```jsx
import { TaskRow } from '@projectcor/cor-commons/lib/components/task-row'
```
```
<TaskRow {...props} /> 
```

Check TaskRow props for more information