import { inject, Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { collection, Firestore, doc, collectionData, onSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  // items$;

  unsubList;
  unsubSingle;

  firestore: Firestore = inject(Firestore);

  constructor() {
    // this.items$ = collectionData(this.getNormalRef());

    this.unsubList = onSnapshot(this.getNotesRef(), () =>{});

   }

  // const itemCollection = collection(this.firestore, "items");

  getNotesRef() {
    return collection(this.firestore, "notes");
  }

  getNormalRef() {
    return collection(this.firestore, "trash");
  }


  getSingleDocRef(colId:string, docId:string) {
    return doc(collection(this.firestore, colId), docId);
  }
}
