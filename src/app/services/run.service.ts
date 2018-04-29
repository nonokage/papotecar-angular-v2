import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { RunModel } from '../models/run.model';

@Injectable()
export class RunService {

  constructor(private http: HttpClient) { }

}
