def record_defeatd_monsters(monster_name, defeated_monsters=None):
    if defeated_monsters is None:
        defeated_monsters = []
    defeated_monsters.append(monster_name)
    return defeated_monsters

player_a_log = record_defeatd_monsters('Slime')
player_a_log = record_defeatd_monsters('Goblin', player_a_log)
print(f"Player A: {player_a_log}")

player_b_log = record_defeatd_monsters('Slime')
print(f"Player B: {player_b_log}")