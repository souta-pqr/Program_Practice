# bad example

def record_defeated_monsters(monster_name, defeated_monsters=[]):
    defeated_monsters.append(monster_name)
    return defeated_monsters

player_a_log = record_defeated_monsters('Slime')

print("first player's log:", player_a_log)

player_a_log = record_defeated_monsters('Goblin', player_a_log)

print("first player's log:", player_a_log)

player_b_log = record_defeated_monsters('Dragon')

print("second player's log:", player_b_log)
