import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'dashboard', component: DashboardCrmComponent },
        {
            path: 'material-widgets',
            loadChildren: () => import('../material-widgets/material-widgets.module').then(j => j.MaterialWidgetsModule)
        },
        { path: 'tables', loadChildren: () => import('../tables/tables.module').then(j => j.TablesModule) },
        { path: 'maps', loadChildren: () => import('../maps/maps.module').then(j => j.MapsModule) },
        { path: 'charts', loadChildren: () => import('../charts/charts.module').then(j => j.ChartsModule) },
        { path: 'chats', loadChildren: () => import('../chats/chat.module').then(j => j.ChatsModule) },
        { path: 'mail', loadChildren: () => import('../mail/mail.module').then(j => j.MailModule) },
        { path: 'pages', loadChildren: () => import('../pages/pages.module').then(j => j.PagesModule) },
        { path: 'forms', loadChildren: () => import('../forms/forms.module').then(j => j.FormModule) },
        { path: 'guarded-routes', loadChildren: () => import('../guarded-routes/guarded-routes.module').then(j => j.GuardedRoutesModule) },
        { path: 'editor', loadChildren: () => import('../editor/editor.module').then(j => j.EditorModule) },
        { path: 'scrumboard', loadChildren: () => import('../scrumboard/scrumboard.module').then(j => j.ScrumboardModule) },
    ]
}];
