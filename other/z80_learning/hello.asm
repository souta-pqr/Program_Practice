; hello.asm - 最初のZ80プログラム
; 簡単な計算を行い，結果をメモリに格納

        ORG 0x0000          ; プログラムの開始アドレスを設定

START: 
        LD A, 10        ; Aレジスタに10を格納
        LD B, 20        ; Bレジスタに20を格納
        ADD A, B        ; AレジスタにBレジスタの値を加算
        LD (RESULT), A  ; 結果をメモリに保存

        ; 16ビット演算の例
        LD HL, 1000h    ; HLレジスタに1000
        LD DE, 500      ; DEレジスタに500
        ADD HL, DE      ; HLにDEを加算
        LD (RESULT16), HL ; 16ビット結果を保存

        HALT            ; プログラムの終了

; データ領域
RESULT:   DS 1          ; 8ビット結果の保存場所(1バイト)
RESULT16: DS 2          ; 16ビット結果の保存場所(2バイト)

        END
        