import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'auth', loadChildren: () => import('../auth/auth.module').then(j => j.AuthModule) },
    { path: 'register', loadChildren: () => import('../register/register.module').then(j => j.RegisterModule) },
    { path: 'login', loadChildren: () => import('../pages/login/login.module').then(j => j.LoginModule) },
    { path: 'editor', loadChildren: () => import('../editor/editor.module').then(j => j.EditorModule) },
    { path: '**', redirectTo: 'auth/dashboard' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LazyLoadModule { }
