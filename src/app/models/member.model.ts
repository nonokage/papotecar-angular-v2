export class MemberModel {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    tel: string;
    note: number;
    picture: string;
    vehicule: string;
    roles: string;

    constructor(i: number,
                f: string,
                l: string,
                e: string,
                pa: string,
                t: string,
                v: string,
                r: string) {
        this.id = i;
        this.firstname = f;
        this.lastname = l;
        this.email = e;
        this.password = pa;
        this.tel = t;
        // this.note = n;
        // this.picture = pi;
        this.vehicule = v;
        this.roles = r;
    }

}

