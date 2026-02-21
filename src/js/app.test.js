import { orderByProps, showAttacks } from "./app";

test("test function orderByProps", () => {
  const obj = {name: "мечник", health: 10, level: 2, attack: 80, defence: 40};
  const expected = [
    {key: "name", value: "мечник"},
    {key: "level", value: 2},
    {key: "attack", value: 80},
    {key: "defence", value: 40},
    {key: "health", value: 10}
  ];

  expect(orderByProps(obj, ["name", "level"])).toEqual(expected);
});

test("test function showAttacks", () => {
  const character = {
    name: "Лучник",
    type: "Bowman",
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: "Двойной выстрел",
        icon: "http://...",
        description: "Двойной выстрел наносит двойной урон"
      }, 
      {
        id: 9,
        name: "Нокаутирующий удар",
        icon: "http://..."
      }
    ]	
  };
  const expected = [
    {
      id: 8,
      name: "Двойной выстрел",
      description: "Двойной выстрел наносит двойной урон",
      icon: "http://..."
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      description: "Описание недоступно",
      icon: "http://..."
    }
  ];
  expect(showAttacks(character)).toEqual(expected);
});