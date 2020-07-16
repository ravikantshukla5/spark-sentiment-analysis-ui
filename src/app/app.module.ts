import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import {TweetService} from './tweet/tweet.service';
import {HttpClientModule} from "@angular/common/http";
import {CustomMaterialModule} from "./material/material.module";
import { UsertableComponent } from './usertable/usertable.component';
import {MatInputModule,MatToolbarModule,MatButtonModule,MatTableModule} from '@angular/material';
import {TableService} from './services/table.service';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CustomMaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [TweetService,TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
