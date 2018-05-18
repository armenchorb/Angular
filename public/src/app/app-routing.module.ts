import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products/new', component: NewComponent},
  {path: 'products/:id', component: ShowComponent},
  {path: 'products/:id/edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
