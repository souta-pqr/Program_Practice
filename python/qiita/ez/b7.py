import heapq

def task_scheduler():
    #タスクとその優先度を管理するヒープ
    task_heap = []

    #タスクの追加
    heapq.heappush(task_heap, (3, 'task1'))
    heapq.heappush(task_heap, (1, 'task2'))
    heapq.heappush(task_heap, (2, 'task3'))

    # 優先度順にタスクを取り出す
    while task_heap:
        priority, task = heapq.heappop(task_heap)
        print(f'priority: {priority}, task: {task}')

# タスクスケジューラの実行
task_scheduler()