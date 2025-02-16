# ログ出力にprint()を使うのはやめよう
# loggingモジュールを使おう

import logging

# ロガーの基本設定
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    filename= "app.log"
)

# ロガーの取得
logger = logging.getLogger(__name__)

# 各レベルのログ出力
logger.debug("debug message")
logger.info("info message")
logger.warning("warning message")
logger.error("error message")
logger.critical("critical message")