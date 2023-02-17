import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddEditInspectionComponent } from './inspection/add-edit-inspection/add-edit-inspection.component';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {
 readonly InspectionAPIUrl="https://localhost:7173/api";
  constructor(private http:HttpClient) { }

  getInspectionList():Observable<any[]>{
  return this.http.get<any>(this.InspectionAPIUrl+ '/inspections')
}

addInspection(data:any){
  return this.http.post(this.InspectionAPIUrl +'/inspections', data);
}
updateInspection(id:number|string, data: any){
return this.http.put(this.InspectionAPIUrl+ '/inspections/${id}',data);
}
deleteInspection(id:number|string){
  return this.http.delete(this.InspectionAPIUrl+'/inpections/${id}');
}
//Inpection Type

getInspectionTypesList():Observable<any[]>{
  return this.http.get<any>(this.InspectionAPIUrl+ '/inspectionTypes')
}

addInspectionTypes(data:any){
  return this.http.post(this.InspectionAPIUrl +'/inspectionTypes', data);
}
updateInpectionTypes(id:number|string, data: any){
return this.http.put(this.InspectionAPIUrl+ '/inspectionTypes/${id}',data);
}
deleteInspectionTypes(id:number|string){
  return this.http.delete(this.InspectionAPIUrl+'/inspectionTypes/${id}');
}
//Statuses

getStatusList():Observable<any[]>{
  return this.http.get<any>(this.InspectionAPIUrl+ '/Status')
}

addStatus(data:any){
  return this.http.post(this.InspectionAPIUrl +'/Status', data);
}
updateStatus(id:number|string, data: any){
return this.http.put(this.InspectionAPIUrl+ '/Status/${id}',data);
}
deleteStatus(id:number|string){
  return this.http.delete(this.InspectionAPIUrl+'/Status/${id}');
}



}