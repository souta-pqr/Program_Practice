package main

import "foo"

foo.MAX // => 100
foo.internal_const // => error: undefined: internal_const

foo.FooFunc(10) // => 11
foo.internalFunc(10) // => error: undefined: internalFunc