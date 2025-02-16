import logging
from logging.handlers import RotatingFileHandler

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

file_handler = RotatingFileHandler(
    'app.log',
    maxBytes=1024*1024,
    backupCount=5
)
file_handler.setLevel(logging.INFO)
file_handler.setFormatter(loggin.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
))

console_handler = logging.StreamHandler()
console_handler.setLevel(logging.DEBUG)
console_handler.setFormatter(logging.Formatter(
    '%(levelname)s - %(message)s'
))

logger.addHandler(file_handler)
logger.addHandler(console_handler)