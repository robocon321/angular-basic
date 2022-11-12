import { ShareModule } from './modules/share/share.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminRoutes } from './routes/admin.routing';
import { ClientRoutes } from './routes/client.routing';

export const routes: Routes = []

@NgModule({
  declarations: [		
    AppComponent
   ],
  imports: [
    BrowserModule,
    ShareModule,
    AdminRoutes,
    ClientRoutes,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
