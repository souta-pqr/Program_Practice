type Family<Parent, Child> = {
    mother: Parent;
    father: Parent;
    child: Child;
}

const obj1: Family<number, string> = {
    mother: 1,
    father: 2,
    child: "3"
};

type HasName = {
    name: string;
}

type Family2<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    father: Parent;
    child: Child;
}

// type T = Family2<number, string>; // Error: Type 'number' does not satisfy the constraint 'HasName'. 
