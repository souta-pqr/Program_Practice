#!/usr/bin/env python3
"""
簡易Z80シミュレータ
基本的な命令のみサポート
"""

class Z80:
    def __init__(self):
        # 8ビットレジスタ
        self.A = 0
        self.B = 0
        self.C = 0
        self.D = 0
        self.E = 0
        self.H = 0
        self.L = 0
        
        # 16ビットレジスタ
        self.PC = 0  # Program Counter
        self.SP = 0xFFFF  # Stack Pointer
        
        # フラグ
        self.flag_Z = False  # Zero
        self.flag_C = False  # Carry
        self.flag_S = False  # Sign
        
        # メモリ (64KB)
        self.memory = [0] * 0x10000
        
        self.halted = False
    
    def load_program(self, filename, address=0):
        """バイナリファイルをメモリにロード"""
        with open(filename, 'rb') as f:
            data = f.read()
        for i, byte in enumerate(data):
            self.memory[address + i] = byte
        print(f"Loaded {len(data)} bytes at 0x{address:04X}")
    
    def get_HL(self):
        """HLレジスタペアの値を取得"""
        return (self.H << 8) | self.L
    
    def set_HL(self, value):
        """HLレジスタペアに値を設定"""
        self.H = (value >> 8) & 0xFF
        self.L = value & 0xFF
    
    def get_DE(self):
        """DEレジスタペアの値を取得"""
        return (self.D << 8) | self.E
    
    def set_DE(self, value):
        """DEレジスタペアに値を設定"""
        self.D = (value >> 8) & 0xFF
        self.E = value & 0xFF
    
    def update_flags(self, result):
        """フラグを更新"""
        self.flag_Z = (result & 0xFF) == 0
        self.flag_S = (result & 0x80) != 0
    
    def fetch(self):
        """命令をフェッチ"""
        opcode = self.memory[self.PC]
        self.PC = (self.PC + 1) & 0xFFFF
        return opcode
    
    def execute_one(self):
        """1命令実行"""
        if self.halted:
            return False
        
        opcode = self.fetch()
        
        # LD A, n (3E nn)
        if opcode == 0x3E:
            value = self.fetch()
            self.A = value
            print(f"  LD A, {value} -> A={self.A}")
        
        # LD B, n (06 nn)
        elif opcode == 0x06:
            value = self.fetch()
            self.B = value
            print(f"  LD B, {value} -> B={self.B}")
        
        # ADD A, B (80)
        elif opcode == 0x80:
            result = self.A + self.B
            self.flag_C = result > 0xFF
            self.A = result & 0xFF
            self.update_flags(self.A)
            print(f"  ADD A, B -> A={self.A}, Carry={self.flag_C}")
        
        # LD (nn), A (32 nn nn)
        elif opcode == 0x32:
            addr_low = self.fetch()
            addr_high = self.fetch()
            addr = (addr_high << 8) | addr_low
            self.memory[addr] = self.A
            print(f"  LD (0x{addr:04X}), A -> mem[0x{addr:04X}]={self.A}")
        
        # LD HL, nn (21 nn nn)
        elif opcode == 0x21:
            value_low = self.fetch()
            value_high = self.fetch()
            value = (value_high << 8) | value_low
            self.set_HL(value)
            print(f"  LD HL, {value} -> HL=0x{self.get_HL():04X}")
        
        # LD DE, nn (11 nn nn)
        elif opcode == 0x11:
            value_low = self.fetch()
            value_high = self.fetch()
            value = (value_high << 8) | value_low
            self.set_DE(value)
            print(f"  LD DE, {value} -> DE=0x{self.get_DE():04X}")
        
        # ADD HL, DE (19)
        elif opcode == 0x19:
            result = self.get_HL() + self.get_DE()
            self.flag_C = result > 0xFFFF
            self.set_HL(result & 0xFFFF)
            print(f"  ADD HL, DE -> HL=0x{self.get_HL():04X}, Carry={self.flag_C}")
        
        # LD (nn), HL (22 nn nn)
        elif opcode == 0x22:
            addr_low = self.fetch()
            addr_high = self.fetch()
            addr = (addr_high << 8) | addr_low
            hl = self.get_HL()
            self.memory[addr] = hl & 0xFF
            self.memory[addr + 1] = (hl >> 8) & 0xFF
            print(f"  LD (0x{addr:04X}), HL -> mem[0x{addr:04X}]=0x{hl:04X}")
        
        # HALT (76)
        elif opcode == 0x76:
            print(f"  HALT")
            self.halted = True
            return False
        
        else:
            print(f"  Unknown opcode: 0x{opcode:02X} at PC=0x{self.PC-1:04X}")
            return False
        
        return True
    
    def run(self, max_steps=1000):
        """プログラムを実行"""
        print(f"\n=== Starting execution at PC=0x{self.PC:04X} ===")
        steps = 0
        while steps < max_steps and self.execute_one():
            steps += 1
        
        print(f"\n=== Execution finished after {steps} steps ===")
        self.dump_registers()
    
    def dump_registers(self):
        """レジスタの状態を表示"""
        print("\n--- Registers ---")
        print(f"A={self.A:02X} ({self.A})  B={self.B:02X} ({self.B})")
        print(f"C={self.C:02X} D={self.D:02X} E={self.E:02X}")
        print(f"H={self.H:02X} L={self.L:02X} -> HL=0x{self.get_HL():04X} ({self.get_HL()})")
        print(f"PC=0x{self.PC:04X}  SP=0x{self.SP:04X}")
        print(f"Flags: Z={self.flag_Z} C={self.flag_C} S={self.flag_S}")
    
    def dump_memory(self, start, length):
        """メモリの内容を表示"""
        print(f"\n--- Memory 0x{start:04X}-0x{start+length-1:04X} ---")
        for i in range(0, length, 16):
            addr = start + i
            line = f"{addr:04X}: "
            for j in range(16):
                if i + j < length:
                    line += f"{self.memory[addr + j]:02X} "
                else:
                    line += "   "
            print(line)


if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: python3 z80_sim.py <binary_file>")
        sys.exit(1)
    
    cpu = Z80()
    cpu.load_program(sys.argv[1])
    cpu.run()
    
    # 結果が格納されているメモリ領域を表示
    cpu.dump_memory(0, 64)
    