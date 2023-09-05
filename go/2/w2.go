var m map[int]string
m := make(map[int]string)

m[1] = "US"
m[81] = "Japan"
m[86] = "China"
fmt.println(m) // => map[1:US 81:Japan 86:China]

m := map[string]string{"Yamada": "Taro", "Suzuki": "Hanako"}

s := m["Yamada"]
s, ok = m["Sato"]

if _, ok := m["Sato"]; ok {
}

for k, v := range m {
}

delete(m, "Yamada")