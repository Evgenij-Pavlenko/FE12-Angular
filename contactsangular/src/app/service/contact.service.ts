import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../model/Contact';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsApi = 'api/contacts';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsApi, contact, this.httpOptions);
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsApi);
  }

  deleteContact(id: number): Observable<Contact> {
    return this.http.delete(`${this.contactsApi}/${id}`);
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.contactsApi}/${id}`);
  }

  editContact(contact: Contact): Observable<void> {
   return this.http.put<void>(this.contactsApi, contact);
  }
}
