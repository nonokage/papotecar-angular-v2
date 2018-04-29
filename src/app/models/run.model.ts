
export class RunModel {
    private id: number;
    private arrival: string;
    private departure: string;
    private dateRun: DateTimeFormat;
    private places: number;
    private price: number;

    constructor(i: number, a: string, d: string, da: DateTimeFormat) { // pl: number, // pr: number
        this.id = i;
        this.arrival = a;
        this.departure = d;
        this.dateRun = da;
        // this.places = pl;
        // this.price = pr;
    }


}
