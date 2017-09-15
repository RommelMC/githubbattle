import { GitbattleService } from './gitbattle.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChooseComponent } from './choose/choose.component';
import { ResultComponent } from './result/result.component';
import { RanksComponent } from './ranks/ranks.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseComponent,
    ResultComponent,
    RanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [GitbattleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
