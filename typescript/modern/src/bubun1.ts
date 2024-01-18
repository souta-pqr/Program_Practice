type Enginner = {
    name: string;
    year: number;
}
type FrontendEngineer = {
    name: string;
    year: number;
    frontendSkill: Array<string>;
}

const hasFrontendSkill = (frontendSkill: string[]) => ({
    name: "daishi",
    year: 35,
    frontendSkill,
});

const hasEngineerSkill: (frontendSkill: string[]) => Enginner = hasFrontendSkill