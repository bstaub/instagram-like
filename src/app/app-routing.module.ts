import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AllPostComponent} from './all-post/all-post.component';
import {FollowingComponent} from './following/following.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {MyPostsComponent} from './my-posts/my-posts.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'allposts', component: AllPostComponent},
  {path: 'following', component: FollowingComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'myposts', component: MyPostsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);
