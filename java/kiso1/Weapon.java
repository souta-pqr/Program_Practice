class Weapon {
    final AttackPower attackpower;

    Weapon(final AttackPower attackPower) {
        this.attackPower = attackPower;
    }

    /**
     * 武器を強化する
     * @param increment 攻撃力の増分
     * @return 強化した武器
     */
    Weapon reinForce(final AttackPower increment) {
        final AttackPower reinForced = attackpower.reinForce(increment);

        return new Weapon(reinForced);
    }
}