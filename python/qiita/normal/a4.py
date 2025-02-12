from enum import Enum

class OrderStatus(Enum):
    PENDING = "pending"
    SHIPPED = "shepped"
    DELIBERED = "delibered"
    CANCELLED = "canceled"

def check_order_status(status: OrderStatus):
    if status == OrderStatus.SHIPPED:
        print("ご注文の商品は発送済みです")