import { inject, Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { collection, Firestore, doc, collectionData, onSnapshot } from '@angular/fire/firestore';
import { elementAt, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  items$;
  items;

  unsubList;
  unsubSingle;

  firestore: Firestore = inject(Firestore);

  constructor() {
    // this.items$ = collectionData(this.getNormalRef());

    this.unsubList = onSnapshot(this.getNotesRef(), (list) =>{
      list.forEach(element => {
        console.log(element);
      });
    });

    this.unsubSingle = onSnapshot(this.getSingleDocRef("notes", "ssgafg"), (element)=> {

    });

    this.unsubSingle();
    this.unsubList();



    this.items$ = collectionData(this.getNotesRef());
    this.items = this.items$.subscribe( (list) => {
      list.forEach(element => {
        console.log(element);
        
      });
    })
    this.items.unsubscribe();
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
