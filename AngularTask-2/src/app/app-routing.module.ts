import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',
    component: HomeComponent
  },
  {path:'home',
  component: HomeComponent
},
{
  path:'manage',
  loadChildren:()=>import('./manage/manage.module').then(mod => mod.ManageModule)
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
