/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Page1Component} from './pages/page1/page1.component';
import {Page2Component} from './pages/page2/page2.component';
import {Page3Component} from './pages/page3/page3.component';

export const appRoutes: Routes = [
    {path: 'page1', component: Page1Component},
    {path: 'page2', component: Page2Component},
    {path: 'page3', component: Page3Component},
    {path: '', redirectTo: '/page1', pathMatch: 'full'}
];

@NgModule({imports: [RouterModule.forRoot(appRoutes)], exports: [RouterModule]})
export class AppRoutingModule {}
