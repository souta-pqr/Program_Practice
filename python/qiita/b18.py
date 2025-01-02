from graphlib import TopologicalSorter

tasks = {
    'task1': [],
    'task2': ['task1'],
    'task3': ['task2'],
    'task4': ['task2', 'task3'],
}

sorter = TopologicalSorter(tasks)
order = list(sorter.static_order())

print(order)