type Family3<Parent = Animal, Child = Animal> = {
    mother: Parent;
    father: Parent;
    child: Child;
}

type Z = Family3<string, string>;
type Y = Family3;