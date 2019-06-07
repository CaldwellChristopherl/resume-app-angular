import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainResumeComponent } from './main-resume/main-resume.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    loadChildren: './details/details.component#DetailsComponent'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: ':id',
    component: MainResumeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
