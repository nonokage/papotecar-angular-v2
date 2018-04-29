export class CityModel {
    id: number;
    zipcode: number;
    name: string;

    constructor(i: number, z: number, n: string) {
        this.id = i;
        this.zipcode = z;
        this.name = n;
    }

}
