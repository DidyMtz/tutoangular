import { ChartComponent } from './chart/chart.component';
import { RegisterComponent } from './register/register.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:"", component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'register', component: RegisterComponent},
  { path:'accueil', component: AccueilComponent},
  { path:'chart', component: ChartComponent},
  { path:'**', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
