import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PostListComponent} from './posts/post-list/postList.component';


@NgModule({
    declarations: [
        AppComponent,
        PostListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
