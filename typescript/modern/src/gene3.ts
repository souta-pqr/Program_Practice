type Animal = {
    name: string;
};
type Human = {
    name: string;
    age: number;
};

type Family2<Parent extends HasName, Child extends Parent> = {
    mother: Parent;
    Father: Parent;
    child: Child;
};

type S = Family2<Animal, Human>;