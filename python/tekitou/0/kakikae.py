import threading

class CancellationToken:
    def __init__(self, parent_token=None):
        self._is_cancellation_requested = False
        self._callbacks = []
        self._parent_token = parent_token
        if self._parent_token is not None and isinstance(self._parent_token, CancellationToken):
            self._parent_token.register(self.cancel)

    def register(self, callback):
        self._callbacks.append(callback)

    def cancel(self, error=None):
        self._is_cancellation_requested = True
        for callback in self._callbacks:
            callback(error)

    def create_dependent_token(self):
        return CancellationToken(self)

    @property
    def is_cancellation_requested(self):
        return self._is_cancellation_requested


def delay_async(duration, cancellation_token=None):
    event = threading.Event()

    def delay():
        if not event.wait(duration):
            if cancellation_token and cancellation_token.is_cancellation_requested:
                event.set()
                return
            raise Exception("Delayed task was cancelled.")

    thread = threading.Thread(target=delay)
    thread.start()
    return event.wait

