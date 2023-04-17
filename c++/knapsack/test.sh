#!/usr/bin/bash

VAR_LEFT=5
VAR_RIGHT=5

echo $(($VAR_LEFT + $VAR_RIGHT))
echo `expr 1 + 1`
[ 1 -eq 1 ]; echo $?
