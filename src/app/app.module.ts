import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatDialogModule
} from "@angular/material";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import {
  ContactsComponent,
  AddContactDialog
} from "./contacts/contacts.component";
import { PopularComponent } from "./popular/popular.component";
import { ContactsService } from "./contacts.service";

const routes: Routes = [
  {
    path: "",
    component: PopularComponent
  },
  {
    path: "contacts",
    component: ContactsComponent
  },
  {
    path: "popular",
    component: PopularComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularComponent,
    AddContactDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent],
  entryComponents: [AddContactDialog]
})
export class AppModule {}
