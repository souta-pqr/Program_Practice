type HasName = {
    name: string;
};
type Family1<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    father: Parent;
    child: Child;
};
