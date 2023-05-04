export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    date_of_delivery: Date;
    qualification: number;
    isApproved: boolean | undefined;
}