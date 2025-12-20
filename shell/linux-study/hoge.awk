#!/usr/bin/awk -f

BEGIN {
    a=1
}

{
    a*=$1
}

END {
    print a
}