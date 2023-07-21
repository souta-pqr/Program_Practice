(func (export "fizzbuzz")
    (param $n i32) (result i32)
        (if
            (i32.eq
                (i32.rem_s (local.get $n) (i32.const 15))
                (i32.const 0))
            (then
                (return (i32.const -3))))
        (if
            (i32.eq
                (i32.rem_s (local.get $n) (i32.const 3))
                (i32.const 0))
            (then
                (return (i32.const -1))))
        (if
            (i32.eq
                (i32.rem_s (local.get $n) (i32.const 5))
                (i32.const 0))
            (then
                (return (i32.const -2))))
        local.get $n)