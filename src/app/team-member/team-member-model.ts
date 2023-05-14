export interface TeamMember {
    id: number;
    
    salutation: string;
    titel: string;
    firstName: string;
    lastName: string;
    birthday: Date;

    street: string;
    houseNumber: string;
    postCode: string;
    city: string;
    fon: string;
    mobile: string;
    email: string;

    number: string;
    shortName: string;
    isDeveloper: boolean;
}
