class AttackPower {
    static final int MIN = 0;
    final int value;

    AttackPower(int value) {
        if (value < MIN) {
            throw new IllegalArgumentException();
        }

        this.value = value;
    }

    /**
     * 攻撃力を強化する
     * @param increment　攻撃力の増分
     * @return 強化された攻撃力
     */
    AttacPower reinForce(final AttackPower increment) {
        return new AttackPower(this.value + increment.value);
    }

    /**
     * 無力化する
     * @return 無力化された攻撃力
     */
    AttackPower disable() {
        return new AttackPower(MIN);
    }
}