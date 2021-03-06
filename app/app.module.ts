import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }   from './heroes.component';
import { HeroService } from './hero.service';

// in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'; 

@NgModule({
	imports: [ 
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
	],
	declarations: [ 
		AppComponent,
		DashboardComponent,
		HeroDetailComponent,
		HeroesComponent,
	],
	providers: [
		HeroService
	],
	bootstrap: [ AppComponent ],
})
export class AppModule { 
}
